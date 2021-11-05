// import functions

let variableSwitcher = 0;
let num1 = '';
let num2 = '';
let operand = '';

const number1 = document.getElementById(`number1`);
const number2 = document.getElementById(`number2`);
const operator = document.getElementById(`operator`);
const result = document.getElementById(`result`);

const zero = document.getElementById(`zero`);
zero.addEventListener('click', () => {
    pushNumber('0');
});

const one = document.getElementById(`one`);
one.addEventListener('click', () => {
    pushNumber('1');
});

const two = document.getElementById(`two`);
two.addEventListener('click', () => {
    pushNumber('2');
});

const three = document.getElementById(`three`);
three.addEventListener('click', () => {
    pushNumber('3');
});

const four = document.getElementById(`four`);
four.addEventListener('click', () => {
    pushNumber('4');
});

const five = document.getElementById(`five`);
five.addEventListener('click', () => {
    pushNumber('5');
});

const six = document.getElementById(`six`);
six.addEventListener('click', () => {
    pushNumber('6');
});

const seven = document.getElementById(`seven`);
seven.addEventListener('click', () => {
    pushNumber('7');
});

const eight = document.getElementById(`eight`);
eight.addEventListener('click', () => {
    pushNumber('8');
});

const nine = document.getElementById(`nine`);
nine.addEventListener('click', () => {
    pushNumber('9');
});

const point = document.getElementById(`point`);
point.addEventListener('click', () => {
    if (variableSwitcher === 0 && !num1.includes('.')){
        num1 += '.';
        displayCalc();
    } else if (variableSwitcher === 1 && !num2.includes('.')){
        num2 += '.';
        displayCalc();
    }       
});

const clear = document.getElementById(`clear`);
clear.addEventListener('click', () => {

    clearAll();
    // num1 = '';
    // num2 = '';
    // operand = '';
    // result.textContent = '';
    // displayCalc();
    // variableSwitcher = 0;
});

const add = document.getElementById(`add`);
add.addEventListener('click', () =>{
    operate('+');
});

const subtract = document.getElementById(`subtract`);
subtract.addEventListener('click', () =>{
    operate('-');
});

const multiply = document.getElementById(`multiply`);
multiply.addEventListener('click', () =>{
    operate('*');
});

const divide = document.getElementById(`divide`);
divide.addEventListener('click', () =>{
    operate('/');
});

const equals = document.getElementById(`equals`);
equals.addEventListener('click', () => {
    equalsFunction();
    // if (num1 === ''){
    //     num1 = '0';
    // }
    
    // if (num2 === ''){
    //     num2 = 0;
    // }
    
    // let num1IsNum = +num1;
    // let num2IsNum = +num2;
    
    // let total = 0;

    // switch (operand) {
    //     case '+':
    //         total = num1IsNum + num2IsNum;
    //         calcResult(total);
    //         displayCalc();
    //         break;
    //     case '-':
    //         total = num1IsNum - num2IsNum;
    //         calcResult(total);
    //         displayCalc();
    //         break;
    //     case '*':
    //         total = num1IsNum * num2IsNum;
    //         calcResult(total);
    //         displayCalc();
    //         break;
    //     case '/':
    //         total = num1IsNum / num2IsNum;
    //         calcResult(total);
    //         displayCalc();
    //         break;
    //     case '':
    //         break;
    //     default: 
    //         //never should default
    //         break;
    // }
});

function calcResult(total){
    result.textContent = total;
    num1 = total.toString();
    num2 = '';
    operand = '';
}

function pushNumber(number){
    if (variableSwitcher === 0){
        num1 += number;
        displayCalc();
    } else if (variableSwitcher === 1){
        num2 += number;
        displayCalc();
    }
}

function operate(op){
    if (variableSwitcher === 0){
        operand = op;
        displayCalc();
        variableSwitcher++;
    } else if (variableSwitcher === 1){
        operand = op;
        displayCalc();
    }
}

function displayCalc(){
    number2.textContent = num2;
    operator.textContent = operand;
    number1.textContent = num1;
}


document.addEventListener('keydown', (e) => {
    if (e.key === '0'){
        pushNumber('0');
    } else if (e.key === '1'){
        pushNumber('1');
    } else if (e.key === '2'){
        pushNumber('2');
    } else if (e.key === '3'){
        pushNumber('3');
    } else if (e.key === '4'){
        pushNumber('4');
    } else if (e.key === '5'){
        pushNumber('5');
    } else if (e.key === '6'){
        pushNumber('6');
    } else if (e.key === '7'){
        pushNumber('7');
    } else if (e.key === '8'){
        pushNumber('8');
    } else if (e.key === '9'){
        pushNumber('9');
    } else if (e.key === '+'){
        operate('+');
    } else if (e.key === '-'){
        operate('-');
    } else if (e.key === '*'){
        operate('*');
    } else if (e.key === '/'){
        operate('/');
    } else if (e.key === 'Enter'){
        equalsFunction();
    } else if (e.key === 'Backspace'){
        clearAll();
    }

    e.preventDefault();

});

function equalsFunction(){
    if (num1 === ''){
        num1 = '0';
    }
    
    if (num2 === ''){
        num2 = 0;
    }
    
    let num1IsNum = +num1;
    let num2IsNum = +num2;
    
    let total = 0;

    switch (operand) {
        case '+':
            total = num1IsNum + num2IsNum;
            calcResult(total);
            displayCalc();
            break;
        case '-':
            total = num1IsNum - num2IsNum;
            calcResult(total);
            displayCalc();
            break;
        case '*':
            total = num1IsNum * num2IsNum;
            calcResult(total);
            displayCalc();
            break;
        case '/':
            total = num1IsNum / num2IsNum;
            calcResult(total);
            displayCalc();
            break;
        case '':
            break;
        default: 
            //never should default
            break;
    }
}

function clearAll(){
    num1 = '';
    num2 = '';
    operand = '';
    result.textContent = '';
    displayCalc();
    variableSwitcher = 0;
}