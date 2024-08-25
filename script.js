const maxlength="9"

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function deleteLastCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
  }

  function appendCharacter(character) {
    var display = document.getElementById('display');
    if (display.value.length < 9) {
    display.value += character;
    }
  }

  function calculateResult() {
    var display = document.getElementById('display');
  try {
    display.value = eval(display.value);
    } catch (e) {
    display.value = 'Error';
    }
  }





