const counterField = document.getElementById('counter');
let counter = 0;

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus')

plusButton.addEventListener('click', function() {
    counter += 1;
    counterField.innerHTML = counter;
});

minus.addEventListener('click', function() {
    counter -= 1;
    counterField.innerHTML = counter;
});