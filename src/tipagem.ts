export type TInformacoesNutricionais = {
    porcao: number;
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gordurasTotais: number;
    gordurasSaturadas: number;
    fibras: number;
    sodio: number;
}

export type TProdutos = {
    id: string; 
    nome: string;
    categoria: TCategoria;
    descricao?: string;
    quantidade: number;
    codigoDeBarras: number;
    informacoesNutricionais: TInformacoesNutricionais;
}

export type TCategoria = {
    id: string;
    nome: string;
    descricao?: string;
}