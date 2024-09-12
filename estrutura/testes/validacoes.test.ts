import { validarCodigoDeBarrasEAN13 } from "../../src/utils/validacoes";

describe('Validação do Código de Barras EAN-13', () => {
  test('Deve retornar true para um código de barras EAN-13 válido', () => {
    expect(validarCodigoDeBarrasEAN13('5901234123457')).toBe(true);
  });

  test('Deve retornar false para um código de barras EAN-13 inválido', () => {
    expect(validarCodigoDeBarrasEAN13('5901234123452')).toBe(false);
  });

  test('Deve retornar false para um código de barras com formato inválido', () => {
    expect(validarCodigoDeBarrasEAN13('123456789012')).toBe(false); // Menos de 13 dígitos
  });
});