const passport = require('passport');
const User = require("../models/user")
const config = require("../../config")
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

//Option pour la stratégie de JWT
const jwtOptions = {
    // Il faut dire a jwt ou chercher dans le header pour trouver le token
    // Des qu'une requete arrive regarde la variable authorization dans le header pour trouver le token
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    // Il faut décoder le tokendonc on lui donne la clé d'encryption
    secretOrKey: config.secret
};

// Création de la stratégie JWT
// Va vérifier si l'id passé en payload existe dans la db
// Si c'est le cas ,appeler done

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    User.findById(payload.sub, function (err, user) {
        if (err) {
            // Erreur
            return done(err, false);
        }
        if (user) {
            // Pas d'erreur et user trouvé
            return done(null, user);
        } else {
            //Pas d'erreur mais user non trouvé
            return done(null, false);
        }
    })
})

passport.use(jwtLogin);