const fieldsContainer = document.getElementById('fieldsContainer');

function addField() {
    const field = document.createElement('div');
    field.innerHTML = `
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="tel" placeholder="Phone">
        <button type="button" onclick="removeField(this)">Remove</button>
        <p class="error"></p>
    `;
    fieldsContainer.appendChild(field);
}

function removeField(button) {
    button.parentNode.remove();
}

function validateField(input) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';

    if (!input.value) {
        errorElement.textContent = 'Це поле обов\'язкове';
        return false;
    }

    if (input.type === 'email' && !isValidEmail(input.value)) {
        errorElement.textContent = 'Невірний формат email';
        return false;
    }

    if (input.type === 'tel' && !isValidPhone(input.value)) {
        errorElement.textContent = 'Невірний формат телефону';
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidPhone(phone) {
    const re = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d{3}[- .]?\d{4}$/;
    return re.test(phone);
}

document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        console.log('Форма відправлена');
    }
});
