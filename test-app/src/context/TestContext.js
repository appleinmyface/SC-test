/* ==================== src/context/TestContext.js ==================== */
import React, { createContext, useState, useEffect } from 'react';
import sections from '../data/sections';
export const TestContext = createContext();
export const TestProvider = ({ children }) => {
  const [current, setCurrent] = useState({ section: 0, step: 'intro' });

  const nextStep = () => {
    const sec = sections[current.section];
    if (current.step === 'intro') setCurrent({ section: current.section, step: 'lesson' });
    else if (current.step === 'lesson') setCurrent({ section: current.section, step: 'quiz' });
    else if (current.section < sections.length - 1) setCurrent({ section: current.section + 1, step: 'intro' });
  };

  const restart = () => setCurrent({ section: 0, step: 'intro' });

  return (
    <TestContext.Provider value={{ current, nextStep, restart }}>
      {children}
    </TestContext.Provider>
  );
};