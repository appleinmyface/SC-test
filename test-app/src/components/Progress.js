/* src/components/Progress.js */
import React, { useContext } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { TestContext } from '../context/TestContext';
const Prog=()=>{const{progress}=useContext(TestContext);return(
  <div className="progress-container">
    <ProgressBar now={progress} label={`${progress}%`} variant="success" />
  </div>
);}
export default Prog;