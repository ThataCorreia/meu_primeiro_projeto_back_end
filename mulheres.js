const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },

    {
        nome: 'Iana Chan' ,
        imagem: 'https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg' ,
        minibio: 'Fundadora da PrograMaria'
    },

    {
        nome: 'Nina da Hora' ,
        imagem: 'https://mittechreview.com.br/wp-content/uploads/2020/10/nina_da_hora.jpg' ,
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)