import { validacaoInformacoesNutricionaisSchema } from "../../src/models/produtoModel";

describe('Validação de Informações Nutricionais com Yup', () => {
    // Teste 1: Verifica se um objeto completo e válido passa na validação
    test('Valida um objeto de informações nutricionais completo e válido', async () => {
        const objetoValido = {
            porcao: 100,
            calorias: 200,
            proteinas: 10,
            carboidratos: 20,
            gordurasTotais: 5,
            gordurasSaturadas: 2,
            fibras: 3,
            sodio: 100,
        };

        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoValido)).resolves.toEqual(objetoValido);
    });

    // Teste 2: Verifica se a validação falha quando a porção é negativa
    test('Falha na validação quando a porção é um número negativo', async () => {
        const objetoInvalido = {
            porcao: -100,
            calorias: 200,
            proteinas: 10,
            carboidratos: 20,
            gordurasTotais: 5,
            gordurasSaturadas: 2,
            fibras: 3,
            sodio: 100,
        };

        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("A porção não deve ser um número negativo.");
    });

    // Teste 3: Verifica se a validação falha quando o campo calorias é omitido
    test('Falha na validação quando as calorias são omitidas', async () => {
        const objetoInvalido = {
            porcao: 100,
            // calorias: 200, // Campo omitido intencionalmente
            proteinas: 10,
            carboidratos: 20,
            gordurasTotais: 5,
            gordurasSaturadas: 2,
            fibras: 3,
            sodio: 100,
        };


        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("As calorias são obrigatórias.");
    });

    // Teste 4: Verifica se a validação falha quando as gorduras totais são negativas
    test('Falha na validação quando as gorduras totais são um número negativo', async () => {
        const objetoInvalido = {
            porcao: 100,
            calorias: 200,
            gordurasTotais: -5,
            proteinas: 10,
            carboidratos: 20,
            gordurasSaturadas: 2,
            fibras: 3,
            sodio: 100,
        };


        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("As gorduras totais não devem ser um número negativo.");
    });

    // Teste 5: Verifica se a validação falha por falta de um campo obrigatório (proteínas)
    test('Falha na validação por falta do campo obrigatório (proteínas)', async () => {
        const objetoInvalido = {
            porcao: 100,
            calorias: 200,
            // proteinas: 10, // Campo omitido intencionalmente
            carboidratos: 20,
            gordurasTotais: 5,
            gordurasSaturadas: 2,
            fibras: 3,
            sodio: 100,
        };


        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("As proteínas são obrigatórias.");
    });

    // Teste 6: Verifica se a validação falha quando os carboidratos são negativos
    test('Falha na validação quando os carboidratos são um número negativo', async () => {
        const objetoInvalido = {
            porcao: 100,
            calorias: 200,
            proteinas: 10,
            carboidratos: -20,
            gordurasTotais: 5,
            gordurasSaturadas: 2,
            fibras: 3,
            sodio: 100,
        };

        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("Os carboidratos não devem ser um número negativo.");
    });

    // Teste 7: Verifica se a validação falha quando as gorduras saturadas são negativas
    test('Falha na validação quando as gorduras saturadas são um número negativo', async () => {
        const objetoInvalido = {
            porcao: 100,
            calorias: 200,
            proteinas: 10,
            carboidratos: 20,
            gordurasTotais: 5,
            gordurasSaturadas: -2,
            fibras: 3,
            sodio: 100,
        };

        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("As gorduras saturadas não devem ser um número negativo.");
    });

    // Teste 8: Verifica se a validação falha quando as fibras são negativas
    test('Falha na validação quando as fibras são um número negativo', async () => {
        const objetoInvalido = {
            porcao: 100,
            calorias: 200,
            proteinas: 10,
            carboidratos: 20,
            gordurasTotais: 5,
            gordurasSaturadas: 2,
            fibras: -3,
            sodio: 100,
        };

        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("As fibras não devem ser um número negativo.");
    });

    // Teste 9: Verifica se a validação falha quando o sódio é negativo
    test('Falha na validação quando o sódio é um número negativo', async () => {
        const objetoInvalido = {
            porcao: 100,
            calorias: 200,
            proteinas: 10,
            carboidratos: 20,
            gordurasTotais: 5,
            gordurasSaturadas: 2,
            fibras: 3,
            sodio: -100,
        };

        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoInvalido)).rejects.toThrow("O sódio não deve ser um número negativo.");
    });

    // Teste 10: Verifica se a validação é bem-sucedida mesmo com campos opcionais ausentes
    test('Validação bem-sucedida sem campos opcionais', async () => {
        const objetoParcialmenteValido = {
            porcao: 50,
            calorias: 100,
            proteinas: 5,
            carboidratos: 10,
            gordurasTotais: 2,
            gordurasSaturadas: 1,
            fibras: 2,
            sodio: 50,
        };

        await expect(validacaoInformacoesNutricionaisSchema.validate(objetoParcialmenteValido)).resolves.toEqual(objetoParcialmenteValido);
    });
});