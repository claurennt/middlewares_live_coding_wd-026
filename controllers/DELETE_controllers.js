const pool = require("../db/client");

const deleteOneMovieById = async (req, res, next) => {
  try {
    const { rowCount } = await pool.query("DELETE FROM movies WHERE id = $1", [
      req.params.id,
    ]);

    res
      .status(200)
      .send(`Successfully deleted ${rowCount} movie from database.`);
  } catch (err) {
    //calling next and passing the err as an argument will fire the custom error handler if we have one, otherwise the built-in error handler will fire
    next(err);
  }
};

module.exports = deleteOneMovieById;
