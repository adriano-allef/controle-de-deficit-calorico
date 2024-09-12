import * as yup from 'yup'
//variável para validar os campos de entrada
export const validacaoInformacoesNutricionaisSchema = yup.object().shape({
    porcao: yup.number().min(0, "A porção não deve ser um número negativo.").required("A porção é obrigatória."),
    calorias: yup.number().min(0, "As calorias não devem ser um número negativo.").required("As calorias são obrigatórias."),
    proteinas: yup.number().min(0, "As proteínas não devem ser um número negativo.").required("As proteínas são obrigatórias."),
    carboidratos: yup.number().min(0, "Os carboidratos não devem ser um número negativo.").required("Os carboidratos são obrigatórios."),
    gordurasTotais: yup.number().min(0, "As gorduras totais não devem ser um número negativo.").required("As gorduras totais são obrigatórias."),
    gordurasSaturadas: yup.number().min(0, "As gorduras saturadas não devem ser um número negativo.").required("As gorduras saturadas são obrigatórias."),
    fibras: yup.number().min(0, "As fibras não devem ser um número negativo.").required("As fibras são obrigatórias."),
    sodio: yup.number().min(0, "O sódio não deve ser um número negativo.").required("O sódio é obrigatório."),
});

//variável para validar os campos de entrada
 export const validacaoProdutos = yup.object().shape({
    //O id não precisa pq vai ser gerado automaticamente
    nome: yup.string().min(3, "Seu nome precisa ter no mínimo 3 letras.").required("O nome é obrigatório."),
    descricao:yup.string(),
    quantidade: yup.number().required("Digite a quantidade descrita na embalagem."),
});

export const validacaoCategorias = yup.object().shape({
    nome:yup.string().min(3, "O nome da categoria precisa ter no minimo 3 letras").required("O nome é obrigatorio"),
    descricao:yup.string(),
})

/**
 * Função para validar um código de barras EAN-13.
 * 
 * O EAN-13 é um sistema de código de barras usado mundialmente para marcar produtos
 * vendidos no varejo. Ele é composto por 13 dígitos, dos quais o último é um dígito
 * verificador calculado a partir dos 12 primeiros.
 * 
 * @param {string} codigo - O código de barras EAN-13 a ser validado.
 * @returns {boolean} Retorna true se o código de barras for válido, false caso contrário.
 */
export const validarCodigoDeBarrasEAN13 = (codigo: string): boolean => {
    // Verifica se o código tem exatamente 13 dígitos numéricos.
    // A expressão regular /^\d{13}$/ verifica se a string contém exatamente 13 dígitos (0-9).
    if (!/^\d{13}$/.test(codigo)) {
      return false; // Se não tiver 13 dígitos, retorna falso.
    }
  
    let soma = 0; // Inicializa a soma dos dígitos.
  
    // Itera sobre os primeiros 12 dígitos do código para calcular a soma.
    // O último dígito é o dígito verificador e não entra no cálculo.
    for (let i = 0; i < 12; i++) {
      // Converte o dígito atual de string para número e o multiplica por 1 ou 3.
      // Os dígitos em posições ímpares (0-indexado) são multiplicados por 1,
      // e os dígitos em posições pares são multiplicados por 3.
      soma += parseInt(codigo[i]) * (i % 2 === 0 ? 1 : 3);
    }
  
    // Calcula o dígito verificador. O dígito verificador é o número que, adicionado à soma,
    // faz o total ser um múltiplo de 10. Isso é feito subtraindo o resto da divisão da soma por 10 de 10.
    const dígitoVerificadorCalculado = 10 - (soma % 10);
  
    // Se o resto for 0, o dígito verificador deve ser 0.
    // Isso é tratado ajustando o dígito verificador calculado para 0 se ele for 10.
    const dígitoVerificador = dígitoVerificadorCalculado === 10 ? 0 : dígitoVerificadorCalculado;
  
    // Compara o dígito verificador calculado com o último dígito do código (dígito verificador).
    // Retorna true se eles coincidirem, indicando que o código de barras é válido.
    return dígitoVerificador === parseInt(codigo[12]);
  }