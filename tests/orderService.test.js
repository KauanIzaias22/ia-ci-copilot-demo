const { calculateOrderTotal } = require('../src/orderService');

describe('calculateOrderTotal', () => {

  test('calcula o total sem desconto', () => {
    const result = calculateOrderTotal(100);

    expect(result.total).toBe(100);
    expect(result.discountAmount).toBe(0);
  });

  test('calcula o total com desconto de 10%', () => {
    const result = calculateOrderTotal(200, 10);

    expect(result.discountAmount).toBe(20);
    expect(result.total).toBe(180);
  });

  test('lança erro se subtotal for negativo', () => {
    expect(() => {
      calculateOrderTotal(-50, 10);
    }).toThrow('O subtotal não pode ser negativo');
  });

  test('lança erro se desconto for maior que 100', () => {
    expect(() => {
      calculateOrderTotal(100, 150);
    }).toThrow('O percentual de desconto deve estar entre 0 e 100');
  });

  test('lança erro se subtotal não for número', () => {
    expect(() => {
      calculateOrderTotal('abc', 10);
    }).toThrow('O subtotal deve ser um número válido');
  });

});
