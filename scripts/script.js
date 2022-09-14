const password = document.getElementById('userPassword');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.querySelector('form');

password.addEventListener('input', (e) => {
  if (password.validity.patternMismatch){
    password.setCustomValidity('Entered value must include: UpperCase, LowerCase, Number/SpecialChar and min 8 Chars!')    
    // password.reportValidity();
  }else {
    password.setCustomValidity('');
  }  
});

confirmPassword.addEventListener('input', (e) => {
  if (confirmPassword.value !== password.value){
    confirmPassword.setCustomValidity('Passwords do not match!')    
    // password.reportValidity();
  }else {
    confirmPassword.setCustomValidity('');
  }  
});

form.addEventListener('submit', (e) => {
  if(password.value !== confirmPassword.value) {
    e.preventDefault();
  }
});