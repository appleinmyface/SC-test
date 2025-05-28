/* ==================== src/App.js ==================== */
import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import InfoSection from './components/InfoSection';
import QuestionSection from './components/QuestionSection';
import Prog from './components/Progress';
import sections from './data/sections';
import { TestContext } from './context/TestContext';

export default function App() {
  const { current, restart } = useContext(TestContext);
  const [showLogs, setShowLogs] = useState(false);

  const sec = sections[current.section];
  const logs = JSON.parse(localStorage.getItem('logs') || '[]').filter(entry => entry.msg.includes('Answer'));

  return (
    <>
      <div className="header">
        <Image src="/logo.png" className="logo" />
        <Prog />
      </div>
      <Container fluid style={{ padding: 0 }}>
        <Row>
          <Col md={2} style={{ padding: 0 }}><Sidebar /></Col>
          <Col md={10} style={{ padding: 0, position: 'relative' }}>
            <Banner />
            {current.step === 'intro' && <InfoSection content={sec.intro} />}
            {current.step === 'lesson' && <InfoSection content={sec.lesson} />}
            {current.step === 'quiz' && <QuestionSection quiz={sec.quiz} />}
            {sec.key === 'congrats' && (
              <div className="content text-center">
                <Button className="button-sc me-2" onClick={restart}>Restart Test</Button>
                <Button className="button-sc" onClick={() => setShowLogs(!showLogs)}>View Logs</Button>
                {showLogs && <pre className="pre-logs">{JSON.stringify(logs, null, 2)}</pre>}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
