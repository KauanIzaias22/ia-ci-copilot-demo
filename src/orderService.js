/**
 * Gerado com o prompt no GitHub Copilot:
 * "Crie uma função em JavaScript que calcule o total de um pedido
 * aplicando um desconto percentual, com validações básicas."
 */


function calculateOrderTotal(subtotal, discountPercent = 0) {
  // Validação: subtotal deve ser um número
  if (typeof subtotal !== 'number' || isNaN(subtotal)) {
    throw new Error('O subtotal deve ser um número válido');
  }

  // Validação: subtotal não pode ser negativo
  if (subtotal < 0) {
    throw new Error('O subtotal não pode ser negativo');
  }

  // Validação: desconto deve ser um número
  if (typeof discountPercent !== 'number' || isNaN(discountPercent)) {
    throw new Error('O percentual de desconto deve ser um número válido');
  }

  // Validação: desconto deve estar entre 0 e 100
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('O percentual de desconto deve estar entre 0 e 100');
  }

  // Cálculo do desconto
  const discountAmount = subtotal * (discountPercent / 100);

  // Cálculo do total
  const total = subtotal - discountAmount;

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    discountPercent: discountPercent,
    discountAmount: parseFloat(discountAmount.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

module.exports = { calculateOrderTotal };