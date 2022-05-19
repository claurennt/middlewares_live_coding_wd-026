const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  return res
    .status(500)
    .send("There was an error. The Admin has been informed");
};
module.exports = errorHandler;
