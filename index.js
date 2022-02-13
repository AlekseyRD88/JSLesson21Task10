export function finishForm() {
  const inputPassword = document.querySelector('input');
  inputPassword.setAttribute('type', 'password');
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text', 'name', 'login');
  const loginForm = document.querySelector('.login-form');
  loginForm.after(newInput);
}
