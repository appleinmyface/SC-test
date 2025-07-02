// ==================== src/App.js ====================
import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import InfoSection from './components/InfoSection';
import QuestionSection from './components/QuestionSection';
import Prog from './components/Progress';
import sections from './data/sections';
import { TestContext } from './context/TestContext';
import logger from './services/logger';

export default function App() {
  const { current, nextStep, restart, progress, prevStep, goToSection } = useContext(TestContext);
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    logger.clearLogs();
  }, []);

  const sec = sections[current.section];
  const logs = logger
    .getSummaryReport()
    .map((log, i) => `Q${log.questionNumber}: "${log.question}"\nYour answer: ${log.yourAnswer}\nCorrect answer: ${log.correctAnswer}\n`)
    .join('\n');

  const WelcomeTutorial = () => (
    <div className="content">
      {sec.intro.map((p, i) => <p key={i}>{p}</p>)}
      <Button className="button-sc" onClick={nextStep}>Continue</Button>
    </div>
  );

  const FinalPage = () => {
    const goToFinalExam = () => {
      const finalExamIndex = sections.findIndex(sec => sec.key === 'final-exam');
      if (finalExamIndex !== -1) {
        goToSection(finalExamIndex);
      }
    };

    return (
      <div className="final-congrats text-center">
        <h1>🎉 Congratulations</h1>
        <p>You have completed all the main training sections. Now, you can proceed to the final exam. Review your logs to see any mistakes you made during the quiz.</p>
        <p><strong><span style={{ fontSize: '2rem' }}>Good luck!</span></strong></p>
        <img src="/images/congrats.png" alt="Congrats Celebration" className="congrats-img" />
        <div style={{ marginTop: '2rem' }}>
          <Button className="button-sc me-2" onClick={restart}>Restart Test</Button>
          <Button className="button-sc me-2" onClick={() => setShowLogs(!showLogs)}>View Logs</Button>
          <Button className="button-sc" onClick={goToFinalExam}>Continue to Final Exam</Button>
        </div>
        {showLogs && (
          <pre className="pre-logs" style={{ textAlign: 'left', marginTop: '1rem' }}>{logs || 'No wrong answers!'}</pre>
        )}
      </div>
    );
  };

  const isFinalExam = sec.key === 'final-exam';

  return (
    <>
      <div className="header">
        <div className="logo-text">Saddle Creek</div>
        <div className="progress-container">
          <Prog progress={progress} />
        </div>
      </div>
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col md={2} style={{ padding: 0 }}><Sidebar /></Col>
          <Col
            md={10}
            style={{
              padding: 0,
              position: 'relative',
              backgroundImage: 'url("/images/SC_background.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight: '100vh'
            }}
          >
            <Banner />
            <div style={{ padding: '0 2rem', fontSize: '1.2rem', color: '#333' }}>
              {sec.key === 'welcome' && <WelcomeTutorial />}

              {sec.key !== 'welcome' && sec.key !== 'congrats' && current.step === 'intro' && (
                <div className="content">
                  <InfoSection content={sec.intro} />
                  <div className="d-flex justify-content-between mt-4 gap-2">
                    <Button variant="secondary" onClick={prevStep}>Previous</Button>
                    <Button className="button-sc" onClick={nextStep}>Continue</Button>
                  </div>
                </div>
              )}

              {current.step === 'lesson' && sec.lesson?.length > 0 && (
                <div className="content">
                  <InfoSection content={sec.lesson} />
                  <div className="d-flex justify-content-between mt-4 gap-2">
                    <Button variant="secondary" onClick={prevStep}>Previous</Button>
                    <Button className="button-sc" onClick={nextStep}>Continue</Button>
                  </div>
                </div>
              )}

              {sec.key !== 'welcome' && current.step === 'quiz' && (
                <QuestionSection quiz={sec.quiz} disableHints={isFinalExam} />
              )}

              {sec.key === 'congrats' && <FinalPage />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
