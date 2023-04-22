const counter = document.querySelector('#counter');
const valueEl = counter.querySelector('#value');
const incrementBtn = counter.querySelector('[data-action = "increment"]');
const decrementBtn = counter.querySelector('[data-action = "decrement"]');

let counterValue = 0;
valueEl.textContent = counterValue;

incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueEl.textContent = counterValue;
 })

decrementBtn.addEventListener('click', () => {
    counterValue--;
    valueEl.textContent = counterValue;
 })