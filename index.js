export function finishForm() {
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text', 'name', 'login');
  const loginForm = document.querySelector('form');
  loginForm.prepend(newInput);
  const inputPassword = document.querySelector('.password');
  inputPassword.setAttribute('type', 'password');
}
