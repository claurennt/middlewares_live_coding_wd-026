const getOnlyMiddleware = (req, res, next) => {
  if (req.method === "GET") {
    console.log("all good");
    //goes to next middleware/function in the line if the request is a GET request
    next();
  } else return res.status(400).send("Only get requests are allowed");
  //else we stop everything and send an error back to the client
};

module.exports = getOnlyMiddleware;
