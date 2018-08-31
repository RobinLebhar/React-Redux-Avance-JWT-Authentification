const User = require("../models/user");
const lodash = require("lodash");
const jwt = require("jwt-simple");
const config = require("../../config");
require("../services/passport");

const passport = require("passport");

function getTokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timeStamp
    },
    config.secret
  );
}
exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      return res.status(422).send({ error: "Email utilisé" });
    }
    if (lodash.isEmpty(email) || lodash.isEmpty(password)) {
      return res.status(422).send({ error: "Email ou mot de passe vide" });
    } else {
      const user = new User({
        email: email,
        password: password
      });
      user.save(function(err) {
        if (err) {
          return next(err);
        }
        res.json({ token: getTokenForUser(user) });
      });
    }
  });
};

exports.signin = function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(500)
        .send({ message: "Les identifiants sont invalides" });
    }
    res.json({ token: getTokenForUser(req.user) });
  })(req, res, next);
};
