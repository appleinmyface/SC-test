/* ==================== src/context/TestContext.js ==================== */
import React, { createContext, useState, useEffect } from 'react';
import sections from '../data/sections';
export const TestContext = createContext();
export const TestProvider = ({ children }) => {
  const [current, setCurrent] = useState({ section: 0, step: 'intro' });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalSteps = sections.reduce((sum, s) => sum + (s.lesson.length > 0 ? 2 : 1) + (s.quiz.length > 0 ? 1 : 0), 0);
    let idx = 0;
    sections.forEach((sec, i) => {
      if (i < current.section) idx += (sec.lesson.length > 0 ? 2 : 1) + (sec.quiz.length > 0 ? 1 : 0);
      else if (i === current.section) {
        if (current.step === 'intro') idx += 1;
        else if (current.step === 'lesson') idx += 2;
        else if (current.step === 'quiz') idx += 3;
      }
    });
    setProgress(Math.round((idx / totalSteps) * 100));
  }, [current]);

  const nextStep = () => {
    const sec = sections[current.section];
    if (current.step === 'intro') {
      if (sec.lesson.length > 0) {
        setCurrent({ section: current.section, step: 'lesson' });
        return;
      } else if (sec.quiz.length > 0) {
        setCurrent({ section: current.section, step: 'quiz' });
        return;
      }
    }
    if (current.step === 'lesson' && sec.quiz.length > 0) {
      setCurrent({ section: current.section, step: 'quiz' });
      return;
    }
    // otherwise, move to next section intro
    if (current.section < sections.length - 1) {
      setCurrent({ section: current.section + 1, step: 'intro' });
    }
  };

  const restart = () => setCurrent({ section: 0, step: 'intro' });

  return (
    <TestContext.Provider value={{ current, nextStep, restart, progress }}>
      {children}
    </TestContext.Provider>
  );
};
