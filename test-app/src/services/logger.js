/* src/services/logger.js */
const logger = {
  log: (msg, data) => {
    const entry = { timestamp: new Date().toISOString(), msg, data };
    console.log(entry);
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.push(entry);
    localStorage.setItem('logs', JSON.stringify(logs));
  }
};
export default logger;