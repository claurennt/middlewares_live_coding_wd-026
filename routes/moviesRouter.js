const express = require("express");

const moviesRouter = express.Router();
const {
  getAllMovies,
  getMovieById,
} = require("../controllers/GET_controllers");
const createNewMovie = require("../controllers/POST_controllers");
const updateOneMovieById = require("../controllers/PUT_controllers");
const deleteOneMovieById = require("../controllers/DELETE_controllers");

const checkAdminToken = require("../middlewares/checkAdminToken");

moviesRouter.route("/").get(getAllMovies).post(createNewMovie);

moviesRouter
  .route("/:id")
  .get(getMovieById)
  .put(checkAdminToken, updateOneMovieById)
  .delete(checkAdminToken, deleteOneMovieById);

module.exports = moviesRouter;
