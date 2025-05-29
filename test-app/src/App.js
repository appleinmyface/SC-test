/* ==================== src/App.js ==================== */
import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import InfoSection from './components/InfoSection';
import QuestionSection from './components/QuestionSection';
import Prog from './components/Progress';
import sections from './data/sections';
import { TestContext } from './context/TestContext';

export default function App() {
  const { current, nextStep, restart, progress } = useContext(TestContext);
  const [showLogs, setShowLogs] = useState(false);

  const sec = sections[current.section];
  const logs = JSON.parse(localStorage.getItem('logs') || '[]').filter(e => e.msg === 'Answer selected' || e.msg === 'Wrong answer');

  // Custom pages
  const WelcomeTutorial = () => (
    <div className="content">
      {sec.intro.map((p, i) => <p key={i}>{p}</p>)}
      <Button className="button-sc" onClick={() => nextStep()}>
        Continue
      </Button>
    </div>
  );

  const FinalPage = () => (
    <div className="content text-center">
      <h2>{sec.intro[0]}</h2>
      <Button className="button-sc me-2" onClick={restart}>Restart Test</Button>
      <Button className="button-sc" onClick={() => setShowLogs(!showLogs)}>View Logs</Button>
      {showLogs && <pre className="pre-logs">{JSON.stringify(logs, null, 2)}</pre>}
    </div>
  );

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
          <Col md={10} style={{ padding: 0, position: 'relative' }}>
            <Banner />
            {sec.key === 'welcome' && <WelcomeTutorial />}
            {sec.key !== 'welcome' && sec.key !== 'congrats' && current.step === 'intro' && <InfoSection content={sec.intro} />}
            {sec.key !== 'welcome' && current.step === 'lesson' && <InfoSection content={sec.lesson} />}
            {sec.key !== 'welcome' && current.step === 'quiz' && <QuestionSection quiz={sec.quiz} />}
            {sec.key === 'congrats' && <FinalPage />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
