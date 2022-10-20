import throttle from 'lodash.throttle';

// STEP 1 - start
const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
}

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit);



function onFormInput () {
    const formData = { 
        email: refs.input.value, 
        message: refs.textarea.value };

    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
} 

// STEP 2 - check localStorage

function cheksStorage() {
    const parseSavedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (parseSavedData) {
      refs.input.value = parseSavedData.email;
      refs.textarea.value = parseSavedData.message;
    } else {
      refs.input.value = '';
      refs.textarea.value = '';
    }
  }

  cheksStorage();

  // STEP 3 - submit

  function onFormSubmit(evt) {
    evt.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }

