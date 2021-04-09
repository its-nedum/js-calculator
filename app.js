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

// operator
const divide = document.getElementById('divide');
const times = document.getElementById('times');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

// equal to
const equal = document.getElementById('equalto');

/*
 * get all numbers clicked before an operator
*/
// collect the numbers clicked into an array
let before = [];
let operator = null;
let after = [];

// set operator
divide.addEventListener('click', () => {
    operator = "/"
});
times.addEventListener('click', () => {
    operator = "*"
});
minus.addEventListener('click', () => {
    operator = "-"
});
plus.addEventListener('click', () => {
    operator = "+"
});


n1.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }  
});
n2.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n3.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n4.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n5.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n6.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n7.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n8.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n9.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
n0.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
ndot.addEventListener('click', (e) => {
    if (operator === null){
        before.push(e.target.innerText)
    }else{
        after.push(e.target.innerText) 
    }    
});
      



equal.addEventListener('click', () => {
    let result
    // clean up the before array
    let operand1 = Number(before.join().replace(/,/g, ''));
    // clean up the after array
    let operand2 = Number(after.join().replace(/,/g, ''));
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
    console.log(result)
    return result;
});
