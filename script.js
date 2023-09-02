function saveToLocalStorage(id) {
  var inputValue = document.getElementById(id).value;
  localStorage.setItem(id, inputValue);
  updateTotal();
}

function loadFromLocalStorage() {
  for (var i = 0; i <= 9; i++) {
    var numId = 'num' + i;
    var textId = 'text' + i;
    var savedNum = localStorage.getItem(numId);
    var savedText = localStorage.getItem(textId);
    if (savedNum !== null) {
      document.getElementById(numId).value = savedNum;
    }
    if (savedText !== null) {
      document.getElementById(textId).value = savedText;
    }
  }
  updateTotal();
}

function updateTotal() {
  var totalElement = document.getElementById('total');
  var totalValue = 0;

  for (var i = 0; i <= 9; i++) {
    totalValue += parseInt(document.getElementById('num' + i).value);
  }

  totalElement.textContent = totalValue;
}

function incrementNumber(id) {
  var numberInput = document.getElementById(id);
  var currentValue = parseInt(numberInput.value);
  currentValue++;
  numberInput.value = currentValue;
  saveToLocalStorage(id);
}

function decrementNumber(id) {
  var numberInput = document.getElementById(id);
  var currentValue = parseInt(numberInput.value);
  if (currentValue > 0) {
    currentValue--;
    numberInput.value = currentValue;
    saveToLocalStorage(id);
  }
}

// Load saved values from localStorage when the page loads
window.onload = loadFromLocalStorage;