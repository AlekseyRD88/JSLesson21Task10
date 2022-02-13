export function finishForm() {
  const search = document.querySelector('form');
  const search1 = document.querySelector('input');
  const newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'login');
  search.insertBefore(newInput, search1);
}
