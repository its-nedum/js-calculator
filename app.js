// assign number divs to variables
const n1 = document.getElementById('one');
const n2 = document.getElementById('two');
const n3 = document.getElementById('three');
const n4 = document.getElementById('four');
const n5 = document.getElementById('five');
const n6 = document.getElementById('six');
const n7 = document.getElementById('seven');
const n8 = document.getElementById('eight');
const n9 = document.getElementById('nine');
const n0 = document.getElementById('zero');
const ndot = document.getElementById('dot');

// operators
const divide = document.getElementById('divide');
const times = document.getElementById('times');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

// equal to
const equal = document.getElementById('equalto');

// result div
const answer = document.getElementById('result');

// clear div
const clear = document.getElementById('clear');

// clearing all items on click
clear.addEventListener('click', () => {
    // reset store
    before = [];
    after = [];
    operator = null;
    answer.innerText = '';
})

// collect the numbers clicked into an array
let before = [];
let operator = null;
let after = [];

// set operator
divide.addEventListener('click', () => {
    operator = "/";
    answer.innerText = "/";
});
times.addEventListener('click', () => {
    operator = "*";
    answer.innerText = "*";
});
minus.addEventListener('click', () => {
    operator = "-";
    answer.innerText = "-";
});
plus.addEventListener('click', () => {
    operator = "+";
    answer.innerText = "+"
});

// fill the array with clicked numbers
n1.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }
});
n2.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }    
});
n3.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }   
});
n4.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }  
});
n5.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }   
});
n6.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }    
});
n7.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }   
});
n8.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }   
});
n9.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }    
});
n0.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }    
});
ndot.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
        answer.innerText = parseFloat(before.join().replace(/,/g, ''))
    }else{
        after.push(e.target.innerText) 
        answer.innerText = parseFloat(after.join().replace(/,/g, ''))
    }   
});
    
// perform the calculation and display result
equal.addEventListener('click', () => {
    let result
    // clean up the before array
    let operand1 = parseFloat(before.join().replace(/,/g, ''));
    // clean up the after array
    let operand2 = parseFloat(after.join().replace(/,/g, ''));
    
    // only execute when there is operands to work with
    if (operand1 && operand2){
        // calculate
        switch (operator) {
            case '/':
                result = operand1 / operand2
                break;
            case '*':
                result = operand1 * operand2
                break;
            case '-':
                result = operand1 - operand2
                break;
            default:
                result = operand1 + operand2
                break;
        }

        answer.innerText = result;

        // reset store
        before = [];
        after = [];
        operator = null;
    }  
});
