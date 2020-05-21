const abc = document.getElementById("2");
const ghi = document.getElementById("4");
const output = document.getElementById('screen');

let buttonTimeout = null;
let incrementer = 0;

const alphaA = ['a','b','c','a','b','c'];
const alphaG=['g','h','i','g','h','i'];

var text='';
var newLetter='';

abc.addEventListener('click', () => {
    if (!buttonTimeout) {
        buttonTimeout = setTimeout(() => {
            newLetter=alphaA[incrementer-1];
            console.log('finished: '+newLetter);
            text=text+newLetter;
            console.log('total text: '+text);
            incrementer = 0;
            buttonTimeout = null;
           // abc.removeAttribute('disabled');
        }, 1000);
    }
    output.innerHTML = alphaA[incrementer];
    incrementer += 1;
});
ghi.addEventListener('click', () => {
    if (!buttonTimeout) {
        buttonTimeout = setTimeout(() => {
            newLetter=alphaG[incrementer-1];
            text=text+newLetter;
            console.log('total text: '+text);
            incrementer = 0;
            buttonTimeout = null;
            // abc.removeAttribute('disabled');
        }, 1000);
    }
    output.innerHTML = alphaG[incrementer];
    incrementer += 1;
});