const middlewares = require("../middlewares/auth.middleware")

module.exports = function (app) {
    app.post("/auth/requireAuth", [middlewares.verifyToken()] (req, res) =>{
        res.status(200).send("requireAuth route")
    });
    app.post("auth/notRequireAuth", (req, res) =>{
        res.status(200).send("notRequireAuth route")
    });
}