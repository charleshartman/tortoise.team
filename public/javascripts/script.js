// script.js

"use strict";

document.addEventListener('DOMContentLoaded', () => {
  let root = document.querySelector('#root');
  let intro = document.createElement('p');
  intro.classList.add('message');
  intro.textContent = 'is under development.';

  root.appendChild(intro);
});

