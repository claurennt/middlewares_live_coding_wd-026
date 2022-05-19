const express = require("express");
require("dotenv").config();

const app = express();

const port = 3000;

const moviesRouter = require("./routes/moviesRouter");
const getOnlyMiddleware = require("./middlewares/getOnlyMiddleware");
const requestTimeLogger = require("./middlewares/requestTimeLogger");
const errorHandler = require("./middlewares/errorHandler");

// App-level BUILT-IN middleware to parse the body of incoming requests
app.use(express.json());

//binds the getOnlyMiddleware to every request made on path /get-only-path
app.use("/get-only-path", getOnlyMiddleware);

app.get("/get-only-path", (req, res) =>
  res.status(200).send("Correct method!")
);

//binds moviesRouter to every request at path starting with /movies
app.use("/movies", moviesRouter);

//uses the requestTimeLogger middleware for every request on path /movies
app.use("/movies", requestTimeLogger);

//binds custom error handler to every reqeust made to our app, must be the last one declared in the app-level middleware stack
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
