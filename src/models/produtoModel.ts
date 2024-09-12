import * as yup from "yup"
import { TCategoria, TInformacoesNutricionais, TProdutos } from "../tipagem";

export class InformacoesNutricionais {
    porcao: number;
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gordurasTotais: number;
    gordurasSaturadas: number;
    fibras: number;
    sodio: number;

    constructor(informacoesNutricionais: TInformacoesNutricionais){
        this.porcao = informacoesNutricionais.porcao
        this.calorias = informacoesNutricionais.calorias
        this.proteinas = informacoesNutricionais.proteinas
        this.carboidratos = informacoesNutricionais.carboidratos
        this.gordurasTotais = informacoesNutricionais.gordurasTotais
        this.gordurasSaturadas = informacoesNutricionais.gordurasSaturadas
        this.fibras = informacoesNutricionais.fibras
        this.sodio = informacoesNutricionais.sodio
    }


}

export class Produtos {
    id: string; 
    nome: string;
    categoria: TCategoria;
    descricao?: string;
    quantidade: number;
    codigoDeBarras: number;
    informacoesNutricionais: TInformacoesNutricionais;

    constructor(produtos: TProdutos){
        if (produtos.informacoesNutricionais.calorias < 0) {
            throw new Error('Calorias não podem ser negativas');
        }

        this.id = produtos.id
        this.nome = produtos.nome
        this.categoria = produtos.categoria
        this.descricao = produtos.descricao
        this.quantidade = produtos.quantidade
        this.codigoDeBarras = produtos.codigoDeBarras
        this.informacoesNutricionais = produtos.informacoesNutricionais
    }
}

export class Categoria {
    id: string;
    nome: string;
    descricao?: string;

    constructor(categoria: TCategoria){
        this.id = categoria.id
        this.nome = categoria.nome
        this.descricao = categoria.descricao
    }

}


