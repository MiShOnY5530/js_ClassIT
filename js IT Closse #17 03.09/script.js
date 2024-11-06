const form = document.getElementById('myForm');
const languageSelect = document.getElementById('language');
const errorDiv = document.getElementById('error');

const languages = {
  ua: {
    name: { label: 'Ім\'я:', placeholder: 'Введіть ваше ім\'я' },
    phone: { label: 'Телефон:', placeholder: '+38 (0XX) XXX-XX-XX' },
    error: { invalidPhone: 'Невірний формат телефону' }
  },
  en: {
    name: { label: 'Name:', placeholder: 'Enter your name' },
    phone: { label: 'Phone:', placeholder: '+1 (XXX) XXX-XXXX' },
    error: { invalidPhone: 'Invalid phone format' }
  }
};

function updateForm(lang) {
  const fields = ['name', 'phone'];
  fields.forEach(field => {
    const element = document.getElementById(field);
    element.previousElementSibling.textContent = languages[lang][field].label;
    element.placeholder = languages[lang][field].placeholder;
  });
}

function validatePhone(value, lang) {
  const phoneRegex = lang === 'ua' ? /^\+38\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/ : /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/;
  return phoneRegex.test(value);
}

languageSelect.addEventListener('change', () => {
  updateForm(languageSelect.value);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const phone = document.getElementById('phone').value;
  const lang = languageSelect.value;

  if (!validatePhone(phone, lang)) {
    errorDiv.textContent = languages[lang].error.invalidPhone;
  } else {
    console.log('Форма відправлена');
  }
});

updateForm('ua');