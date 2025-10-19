function calculateTotal() {
  const productPrice = parseFloat(document.getElementById('product').value);
  const quantity = parseInt(document.getElementById('quantity').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(productPrice) || productPrice === 0) {
    resultDiv.textContent = 'Пожалуйста, выберите товар.';
    resultDiv.style.color = 'red';
    return;
  }
  if (isNaN(quantity) || quantity <= 0) {
    resultDiv.textContent = 'Введите корректное количество.';
    resultDiv.style.color = 'red';
    return;
  }

  const total = productPrice * quantity;
  resultDiv.textContent = `Стоимость заказа: ${total.toLocaleString('ru-RU')} ₽`;
  resultDiv.style.color = 'black';
}