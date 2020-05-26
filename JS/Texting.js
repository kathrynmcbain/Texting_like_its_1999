const output = document.getElementById('screen');

let buttonTimeout = null;
let incrementer = 0;

let text='';
let newLetter='';

function buttonPressed(letterArray){
    if (!buttonTimeout) {
        buttonTimeout = setTimeout(() => {
            newLetter=letterArray[incrementer-1];
            text=text+newLetter;
            incrementer = 0;
            buttonTimeout = null;
        }, 1000);
    }
    output.innerHTML = text+letterArray[incrementer];
    incrementer += 1;
}