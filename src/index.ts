import "dotenv/config"
import Express from "express";
import rotas from "./routers/produtoRoutes";

const app = Express()
app.use(Express.json())
app.use(rotas)

const porta = process.env.PORT

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

