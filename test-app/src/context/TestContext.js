/* ==================== src/context/TestContext.js ==================== */
import React, { createContext, useState, useEffect } from 'react';
import sections from '../data/sections';
export const TestContext = createContext();
export const TestProvider = ({ children }) => {
  const [current, setCurrent] = useState({ section: 0, step: 'intro' });
  const [progress, setProgress] = useState(0);

useEffect(() => {
  const totalSteps = sections.reduce((sum, s) => {
    const hasLesson = Array.isArray(s.lesson) && s.lesson.length > 0;
    const hasQuiz = Array.isArray(s.quiz) && s.quiz.length > 0;
    return sum + (hasLesson ? 2 : 1) + (hasQuiz ? 1 : 0);
  }, 0);

  let idx = 0;
  sections.forEach((sec, i) => {
    const hasLesson = Array.isArray(sec.lesson) && sec.lesson.length > 0;
    const hasQuiz = Array.isArray(sec.quiz) && sec.quiz.length > 0;

    if (i < current.section) {
      idx += (hasLesson ? 2 : 1) + (hasQuiz ? 1 : 0);
    } else if (i === current.section) {
      if (current.step === 'intro') idx += 1;
      else if (current.step === 'lesson') idx += hasLesson ? 2 : 1;
      else if (current.step === 'quiz') idx += (hasLesson ? 2 : 1) + 1;
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
