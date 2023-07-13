const { Router } = require("express")
const userRoutes = Router()

userRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body

  response.json(`Usuário:${name} | e-mail: ${email} | senha: ${password}`)
})

module.exports = userRoutes
