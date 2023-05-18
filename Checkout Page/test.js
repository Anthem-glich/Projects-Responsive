const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const input = document.querySelector('.number-input');
console.log("Hello");

function handleClick(e) {
    const btn = e.target.className; 
    const value = parseInt(input.value);
    input.value = (btn === 'plus') ? (value+1) : (value-1); 

}

console.log(plus);


plus.addEventListener('click', handleClick);
minus.addEventListener('click', handleClick);