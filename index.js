export function finishForm() {
  const inputPassword = document.querySelector('input');
  inputPassword.setAttribute('type', 'password');
  const newInput = document.createElement('input');
  newInput.setAttribute('name', 'login');
  const loginForm = document.querySelector('form');
  loginForm.after(newInput);
}
