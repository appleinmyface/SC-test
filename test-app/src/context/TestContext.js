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

  // ✅ Fix: define this function to handle going to the next section
  function goToNextSection() {
    const nextSection = current.section + 1;

    if (nextSection < sections.length) {
      setCurrent({ section: nextSection, step: 'intro' });
    } else {
      // Optional: handle if you're at the last section
      console.log('End of sections reached');
      // You can also set a special state or redirect here if needed
    }
  }

  function nextStep() {
    const sec = sections[current.section];

    if (current.step === 'intro') {
      if (sec.lesson && sec.lesson.length > 0) {
        setCurrent({ ...current, step: 'lesson' });
      } else if (sec.quiz && sec.quiz.length > 0) {
        setCurrent({ ...current, step: 'quiz' });
      } else {
        goToNextSection();
      }
    } else if (current.step === 'lesson') {
      if (sec.quiz && sec.quiz.length > 0) {
        setCurrent({ ...current, step: 'quiz' });
      } else {
        goToNextSection();
      }
    } else {
      goToNextSection();
    }
  }

  const prevStep = () => {
    const sec = sections[current.section];

    if (current.step === 'quiz') {
      if (sec.lesson.length > 0) {
        setCurrent({ section: current.section, step: 'lesson' });
      } else {
        setCurrent({ section: current.section, step: 'intro' });
      }
      return;
    }

    if (current.step === 'lesson') {
      setCurrent({ section: current.section, step: 'intro' });
      return;
    }

    if (current.step === 'intro' && current.section > 0) {
      const prevSec = sections[current.section - 1];
      const hasQuiz = prevSec.quiz.length > 0;
      const hasLesson = prevSec.lesson.length > 0;
      const step = hasQuiz ? 'quiz' : hasLesson ? 'lesson' : 'intro';
      setCurrent({ section: current.section - 1, step });
    }
  };

  const restart = () => setCurrent({ section: 0, step: 'intro' });

  return (
    <TestContext.Provider value={{ current, nextStep, prevStep, restart, progress }}>
      {children}
    </TestContext.Provider>
  );
};
