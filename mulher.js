const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Thais Correia' ,
        imagem: 'https://avatars.githubusercontent.com/u/90629181?s=96&v=4' ,
        minibio: 'Desenvolvedora frontend, graduanda em ads'
    })

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)