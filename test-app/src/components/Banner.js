/* ==================== src/components/Banner.js ==================== */
import React, { useContext } from 'react';
import sections from '../data/sections';
import { TestContext } from '../context/TestContext';
export default function Banner() {
  const { current } = useContext(TestContext);
  const sec = sections[current.section];
  const label = current.step.charAt(0).toUpperCase() + current.step.slice(1);
  return <div className="banner">{sec.title}: {label}</div>;
}