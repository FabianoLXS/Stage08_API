const { Router } = require("express")

const SessionsController = require("../controllers/SessionsController")
const SessionsController = require("../controllers/SessionsController")
const SessionsController = new SessionsController()

const sessionsRoutes = Router()
sessionsRoutes.post("/", SessionsController.create)

module.exports = sessionsRoutes
