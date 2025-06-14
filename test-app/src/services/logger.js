// src/services/logger.js

const LOG_KEY = 'logs';

// Helper to fetch logs from localStorage
function getLogs() {
  return JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
}

// Helper to save logs back to localStorage
function saveLogs(logs) {
  localStorage.setItem(LOG_KEY, JSON.stringify(logs));
}

// Add a new log entry
function addLog(entry) {
  const logs = getLogs();
  logs.push({ timestamp: new Date().toISOString(), ...entry });
  saveLogs(logs);
}

// Log a wrong answer with full context
function logAnswer(idx, given, correct, question) {
  addLog({
    msg: 'Wrong answer',
    data: { idx, given, correct, question }
  });
}

// Log a selected answer (for tracking)
function logSelected(idx, val) {
  addLog({
    msg: 'Answer selected',
    data: { idx, val }
  });
}

// Clear all logs
function clearLogs() {
  localStorage.removeItem(LOG_KEY);
}

// Generate a clean summary of all wrong answers
function getSummaryReport() {
  const logs = getLogs();
  return logs
    .filter(log => log.msg === 'Wrong answer')
    .map(log => {
      const { idx, given, correct, question } = log.data;
      return {
        questionNumber: idx + 1,
        question,
        yourAnswer: given,
        correctAnswer: correct
      };
    });
}

export default {
  logAnswer,
  logSelected,
  clearLogs,
  getSummaryReport
};
