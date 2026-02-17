// script.js - Ejemplo mínimo

document.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelector('main section p');
  const btn = document.createElement('button');
  btn.textContent = 'Haz clic';
  btn.addEventListener('click', () => {
    p.textContent = 'Has hecho clic en el botón.';
  });
  document.querySelector('main section').appendChild(btn);
});
