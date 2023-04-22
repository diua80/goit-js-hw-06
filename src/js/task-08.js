const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
        alert('Будь ласка заповніть усі поля!');
        return;
    }

    const formDataObject = {
        email,
        password
    };

    console.log(formDataObject);

    form.reset();
}
