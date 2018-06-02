const User = require("../models/user")
const lodash = require("lodash")
const jwt = require("jwt-simple");
const config = require("../../config");

function getTokenForUser(user) {
    //sub pour subject et iat : issue at time
    const timeStamp = new Date().getTime();
    return jwt.encode({
        sub: user.id,
        iat: timeStamp
    }, config.secret);
}
exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        email
    }, function (err, existingUser) {
        if (err) {
            return next(err)
        }
        if (existingUser) {
            return res
                .status(422)
                .send({ error: "Email utilisé" })
        }
        if (!lodash.isEmpty(email) && !lodash.isEmpty(password)) {
            const user = new User({ email: email, password: password })

            user.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.json({ token: getTokenForUser(user) });
            })
        } else {
            return res
                .status(422)
                .send({ error: "Mot de passe ou email vide" })
        }

    })
}

exports.signin = function (req, res, next) {
    res.json({ token: getTokenForUser(req.user) });
}