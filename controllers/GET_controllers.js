const pool = require("../db/client");

const getAllMovies = async (req, res, next) => {
  try {
    const { rows } = await pool.query("SELECT * FROM movies");
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

const getMovieById = async (req, res, next) => {
  //console.log(req);
  //const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * FROM movies WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllMovies, getMovieById };
