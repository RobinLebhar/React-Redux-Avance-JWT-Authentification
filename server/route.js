const AuthentificationController = require("./controllers/authentification")
module.exports = function (expressServer) {
    expressServer.post("/signup", AuthentificationController.signup)
}