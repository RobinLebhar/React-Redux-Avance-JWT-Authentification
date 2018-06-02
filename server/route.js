module.exports = function (expressServer) {
    expressServer.get("/", function (req, res, next) {
        res.send({ serverData: ["Stratocaster", "Gibson", "Ibanez"] })
    });
}