/* ==================== src/components/Sidebar.js ==================== */
import React, { useContext } from 'react';
import sections from '../data/sections';
import { TestContext } from '../context/TestContext';

export default function Sidebar() {
  const { current } = useContext(TestContext);

  return (
    <div className="sidebar">
      <div className="sidebar-header">BMS Training</div>
      <ul>
        {sections.map((sec, i) => (
          <li key={sec.key} className="section-item">
            <div className="section-title">{sec.title}</div>
            <ul>
              {sec.labels?.intro !== null && (
                <li
                  className={`child-item ${
                    current.section === i && current.step === 'intro' ? 'active' : ''
                  }`}
                >
                  {sec.labels?.intro || 'Intro'}
                </li>
              )}
              {sec.labels?.lesson !== null && (
                <li
                  className={`child-item ${
                    current.section === i && current.step === 'lesson' ? 'active' : ''
                  }`}
                >
                  {sec.labels?.lesson || 'Lesson'}
                </li>
              )}
              {Array.isArray(sec.quiz) && sec.quiz.length > 0 && sec.labels?.quiz !== null && (
                <li
                  className={`child-item ${
                    current.section === i && current.step === 'quiz' ? 'active' : ''
                  }`}
                >
                  {sec.labels?.quiz || 'Quiz'}
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}