//// first exercise

const counterField = document.getElementById('counter');
let counter = 0;

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus')

plusButton.addEventListener('click', function() {
    counter += 1;
    counterField.innerHTML = counter;
});

minusButton.addEventListener('click', function() {
    counter -= 1;
    counterField.innerHTML = counter;
});

//// second exercise

const counterField2 = document.getElementById('counter2');
let counter2 = 0;

const plusButton2 = document.getElementById('plus2');
const minusButton2 = document.getElementById('minus2')

plusButton2.addEventListener('click', function() {
    counter2 += 1;
    counterField2.innerHTML = counter2;
});

minusButton2.addEventListener('click', function() {
    if (counter2 > 0) {
        counter2 -= 1;
    counterField2.innerHTML = counter2;
    }
});