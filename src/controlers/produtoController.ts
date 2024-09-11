import { Request, Response } from "express";

export const inicio = (req: Request, res: Response) => {
    res.json({
        mensagem: "API de Controle de Deficit Calórico."
    })
}