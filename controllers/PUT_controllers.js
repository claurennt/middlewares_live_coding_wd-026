const pool = require("../db/client");

const updateOneMovieById = async (req, res, next) => {
  const { id } = req.params; //req.params.id

  const { title, director, year } = req.body; // req.body.title   req.body.director
  try {
    const { rows } = await pool.query(
      "UPDATE movies set title = $1, director= $2, year= $3 WHERE id = $4 RETURNING *",
      [req.body.title, req.body.director, req.body.year, req.params.id]
    );
    res.status(200).send(rows);
  } catch (err) {
    next(err);
  }
};

module.exports = updateOneMovieById;
