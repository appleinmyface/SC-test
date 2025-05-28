/* ==================== src/components/InfoSection.js ==================== */
import React from 'react';
import { Button } from 'react-bootstrap';
import { TestContext } from '../context/TestContext';
export default function InfoSection({ content }) {
  const { nextStep } = React.useContext(TestContext);
  return (
    <div className="content">
      {content.map((p, i) => <p key={i}>{p}</p>)}
      <Button className="button-sc mt-3" onClick={nextStep}>Continue</Button>
    </div>
  );
}