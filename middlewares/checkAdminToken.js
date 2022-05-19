const checkAdminToken = (req, res, next) => {
  if (!req.body.token || req.body.token !== process.env.ADMINTOKEN) {
    return res
      .status(401)
      .send(
        "You don't have the rights to perform this operation.Missing token"
      );
  } else next();
};

module.exports = checkAdminToken;
