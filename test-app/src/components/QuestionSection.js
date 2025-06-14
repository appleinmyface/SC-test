/* ==================== src/components/QuestionSection.js ==================== */
import React, { useState, useContext } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { TestContext } from '../context/TestContext';
import logger from '../services/logger';

export default function QuestionSection({ quiz }) {
  const { nextStep, prevStep } = useContext(TestContext);
  const [answers, setAnswers] = useState({});
  const [wrongIdx, setWrongIdx] = useState(null);
  const [tip, setTip] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

const handleSelect = (i, val) => {
  setAnswers(prev => ({ ...prev, [i]: val }));
  logger.logSelected(i, val);  // Log answer selection here
};

const handleSubmit = () => {
  for (let i = 0; i < quiz.length; i++) {
    const userAnswer = answers[i];
    const correctAnswer = quiz[i].answer;
    const questionText = quiz[i].q;

    if (userAnswer !== correctAnswer) {
      logger.logAnswer(i, userAnswer, correctAnswer, questionText); // Log wrong answer
      setWrongIdx(i);
      setTip(`Hint: ${quiz[i].hint}`);
      return;
    }
  }

  setShowSuccess(true);
};


  const handleContinue = () => {
    setShowSuccess(false);
    nextStep();
  };
  

  return (
    <div className="content">
      <Form>
        {quiz.map((q, i) => (
          <Form.Group key={i} className="mb-3">
            <Form.Label className={wrongIdx === i ? 'question-red' : ''}>{q.q}</Form.Label>
            {q.options.map(opt => (
              <Form.Check
                key={opt}
                type="radio"
                name={`q${i}`}
                label={opt}
                onChange={() => handleSelect(i, opt)}
              />
            ))}
            {wrongIdx === i && <Alert variant="danger" className="mt-2">Incorrect</Alert>}
          </Form.Group>
        ))}
      </Form>

      {tip && <Alert variant="warning">{tip}</Alert>}

      {!showSuccess ? (
        <div className="d-flex justify-content-between mt-3">
          <Button variant="secondary" onClick={prevStep}>Previous</Button>
          <Button className="button-sc" onClick={handleSubmit}>Submit Answers</Button>
        </div>
      ) : (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1>✔</h1>
            <p>All answers correct!</p>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={prevStep}>Previous</Button>
              <Button className="button-sc" onClick={handleContinue}>Continue</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
