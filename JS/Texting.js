const output = document.getElementById('screen');

let buttonTimeout = null;
let currentButton;
let currentArray;
let incrementer = -1;

let text = '';
let textBuffer = '';

function buttonPressed(button, letterArray) {
    if (buttonTimeout === null || currentButton != button.id) {
        nextButtonPressed(button, letterArray);
    } else {
        sameButtonPressed();
    }
}

function nextButtonPressed(button, newLetterArray) {
    if (textBuffer.length) {
        text = textBuffer;
    }

    resetButtonTimeout(buttonTimeout);

    currentButton = button.id;
    currentArray = newLetterArray; 
    incrementer = -1;

    incrementBuffer();
}

function sameButtonPressed() {
    incrementBuffer();
    resetButtonTimeout();
}

function incrementBuffer() {
    if (currentArray && incrementer < currentArray.length - 1) {
        incrementer++;
        textBuffer = text + currentArray[incrementer];
    }

    renderText();
}

function renderText() {
    output.innerHTML = buttonTimeout !== null ? textBuffer : text;
}

function resetButtonTimeout(fromTimer) {
    clearTimeout(buttonTimeout);

    buttonTimeout = setTimeout(() => {
        clearTimeout(buttonTimeout);
        buttonTimeout = null;
        currentButton = null;
        text = textBuffer;
        incrementer - 1;
        renderText();
    }, 1000);
}