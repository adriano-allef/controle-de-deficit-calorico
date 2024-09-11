import { Router } from "express";
import { inicio } from "../controlers/produtoController";

const rotas = Router()

rotas.get('/', inicio)


export default rotas