const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function () {
  output.innerHTML = 'ты нажал на кнопку';
});
