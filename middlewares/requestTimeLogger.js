const requestTimeLogger = (req, res, next) => {
  const date = new Date();
  console.log(`${req.method} ${req.originalUrl}: ${date.toLocaleTimeString()}`);
  next();
};

module.exports = requestTimeLogger;
