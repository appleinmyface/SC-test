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
              <li className={`child-item ${current.section === i && current.step === 'intro' ? 'active' : ''}`}>Intro</li>
              <li className={`child-item ${current.section === i && current.step === 'lesson' ? 'active' : ''}`}>Lesson</li>
              {sec.quiz.length > 0 && (
                <li className={`child-item ${current.section === i && current.step === 'quiz' ? 'active' : ''}`}>Quiz</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}