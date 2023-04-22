const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handleEventBlur);

function handleEventBlur(event) {
    const length = Number(event.target.dataset.length);
    const value = event.target.value;
    if (value.length === length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}