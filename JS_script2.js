const basePrices = { 1: 1000, 2: 1500, 3: 2000 };

const quantityInput = document.getElementById('quantity');
const typeRadios = document.getElementsByName('type');
const optionsDiv = document.getElementById('options');
const propertyDiv = document.getElementById('property');
const optionSelect = document.getElementById('optionSelect');
const extraProperty = document.getElementById('extraProperty');
const resultDiv = document.getElementById('result');

for (let r of typeRadios) {
  r.addEventListener('change', onTypeChange);
}
quantityInput.addEventListener('input', updateTotal);
optionSelect.addEventListener('change', updateTotal);
extraProperty.addEventListener('change', updateTotal);

function onTypeChange() {
  const selectedType = getSelectedType();

  if (selectedType === 1) {
    optionsDiv.classList.add('hidden');
    propertyDiv.classList.add('hidden');
  } else if (selectedType === 2) {
    optionsDiv.classList.remove('hidden');
    propertyDiv.classList.add('hidden');
  } else if (selectedType === 3) {
    optionsDiv.classList.add('hidden');
    propertyDiv.classList.remove('hidden');
  }

  updateTotal();
}

function getSelectedType() {
  for (let r of typeRadios) {
    if (r.checked) return parseInt(r.value);
  }
  return null;
}

function updateTotal() {
  const type = getSelectedType();
  const quantity = parseInt(quantityInput.value) || 0;
  if (!type || quantity <= 0) {
    resultDiv.textContent = 'Стоимость: 0 ₽';
    return;
  }

  let total = basePrices[type] * quantity;

  if (type === 2) {
    const coef = parseFloat(optionSelect.value);
    total *= coef;
  }

  if (type === 3 && extraProperty.checked) {
    total *= 1.3;
  }

  resultDiv.textContent = Стоимость: ${total.toLocaleString('ru-RU')} ₽;
}