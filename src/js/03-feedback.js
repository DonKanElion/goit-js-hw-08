
const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
}

refs.form.addEventListener("input", onFormInput);
// refs.form.addEventListener("submit", onFormSubmit);

//form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput () {
    const formData = { 
        email: refs.input.value, 
        message: refs.textarea.value };

    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
} 
