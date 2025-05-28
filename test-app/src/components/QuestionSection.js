/* ==================== src/components/QuestionSection.js ==================== */
import React, { useState, useContext } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { TestContext } from '../context/TestContext';

export default function QuestionSection({ quiz }) {
  const { nextStep } = useContext(TestContext);
  const [answers, setAnswers] = useState({});
  const [wrongIdx, setWrongIdx] = useState(null);
  const [tip, setTip] = useState('');

  const handleSelect = (i, val) => setAnswers(prev => ({ ...prev, [i]: val }));

  const handleSubmit = () => {
    for (let i = 0; i < quiz.length; i++) {
      if (answers[i] !== quiz[i].a) {
        setWrongIdx(i);
        setTip(`Tip: Think of the sound a ${quiz[i].q.split(' ')[1]} makes.`);
        return;
      }
    }
    nextStep();
  };

  return (
    <div className="content">
      <Form>
        {quiz.map((q, i) => (
          <Form.Group key={i} className="mb-3">
            <Form.Label className={wrongIdx === i ? 'question-red' : ''}>{q.q}</Form.Label>
            {q.options.map(opt => (
              <Form.Check key={opt} type="radio" name={`q${i}`} label={opt}
                onChange={() => handleSelect(i, opt)} />
            ))}
            {wrongIdx === i && <Alert variant="danger" className="mt-2">Incorrect</Alert>}
          </Form.Group>
        ))}
      </Form>
      {tip && <Alert variant="warning">{tip}</Alert>}
      <Button className="button-sc" onClick={handleSubmit}>Submit Answers</Button>
    </div>
  );
}