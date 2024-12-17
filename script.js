let display = document.getElementById("display");

// Append value to the input
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Use eval to evaluate the expression
    } catch (e) {
        alert("Invalid Expression");
        clearDisplay();
    }
}
