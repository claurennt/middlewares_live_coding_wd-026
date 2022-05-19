const pool = require("../db/client");

const createNewMovie = async (req, res, next) => {
  //   console.log(req.body);
  try {
    const { rows } = await pool.query(
      `INSERT INTO movies (title,director,year) VALUES ($1,$2,$3) RETURNING *`,
      [req.body.title, req.body.director, req.body.year]
    );

    res.status(201).send(rows);
  } catch (err) {
    next(err);
  }
};

module.exports = createNewMovie;
