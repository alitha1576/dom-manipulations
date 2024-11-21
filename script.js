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



//// fourth exercise

const counterField4 = document.getElementById('counter4');

const plusButton4 = document.getElementById('plus4');
const minusButton4 = document.getElementById('minus4');

const isEven4 = document.getElementById("isEven4");

const userInput = document.getElementById('user-input');

plusButton4.addEventListener('click', function() {
    counterField4.style.color = 'black';
    const counter4 = parseInt(userInput.value);
    counterField4.innerHTML = parseInt(counterField4.innerHTML) + counter4;
});

minusButton4.addEventListener('click', function () {
    counterField4.style.color = 'black';
    const counter4 = parseInt(userInput.value);
    const diff = parseInt(counterField4.innerHTML) - counter4;
    if (diff >= 0) {
        counterField4.innerHTML = diff;
    } else {
        counterField4.innerHTML = 0;
    }
});

isEven4.addEventListener('click', function() {
    if (parseInt(counterField4.innerHTML) % 2 === 0) {
        counterField4.style.color='green';
    } else {
        counterField4.style.color='red';
    }
})



