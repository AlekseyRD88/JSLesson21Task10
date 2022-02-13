export function finishForm() {
  const newInput = document.createElement('input');
  newInput.setAttribute('name', 'login');
  const loginForm = document.querySelector('form');
  loginForm.after(newInput);
  const inputPassword = document.querySelector('input');
  inputPassword.setAttribute('type', 'password');
}
