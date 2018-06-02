const AuthentificationController = require("./controllers/authentification")
require("./services/passport");
const passport = require("passport");

// Indique a passport d'utiliser un type d'authentification jwt et pas de session ( authentification avec cookie )
const requireAuth = passport.authenticate("jwt", { session: false })
const requireSignin = passport.authenticate("local", { session: false })

module.exports = function (expressServer) {
    expressServer.get("/specialRessource", requireAuth, function (req, res) {
        res.send({ result: "Ca c'est de la ressource de qualité" })
    })

    expressServer.post("/signin", requireSignin, AuthentificationController.signin);

    expressServer.post("/signup", AuthentificationController.signup)
}