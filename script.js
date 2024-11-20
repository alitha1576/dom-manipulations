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


//// third exercise

const counterField3 = document.getElementById('counter3');
let counter3 = 0;

const plusButton3 = document.getElementById('plus3');
const minusButton3 = document.getElementById('minus3');

const isEven = document.getElementById("isEven");

plusButton3.addEventListener('click', function() {
    counterField3.style.color='black';
    counter3 += 1;
    counterField3.innerHTML = counter3;
});

minusButton3.addEventListener('click', function() {
    counterField3.style.color='black';
    if (counter3 > 0) {
        counter3 -= 1;
    counterField3.innerHTML = counter3;
    }
});

isEven.addEventListener('click', function() {
    if (counter3 % 2 === 0) {
        counterField3.style.color='green';
    } else {
        counterField3.style.color='red';
    }
})


