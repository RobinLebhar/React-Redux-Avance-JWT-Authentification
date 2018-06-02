const AuthentificationController = require("./controllers/authentification")
require("./services/passport");
const passport = require("passport");

// Indique a passport d'utiliser un type d'authentification jwt et pas de session ( authentification avec cookie )
const requireAuth = passport.authenticate("jwt", { session: false })

module.exports = function (expressServer) {
    expressServer.get("/", requireAuth, function (req, res) {
        res.send({ result: "Pas mal, ce token à bien été généré par jwt" })
    })
    expressServer.post("/signup", AuthentificationController.signup)
}