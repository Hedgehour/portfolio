import './app/app.element.ts';

const handleClick = (event: MouseEvent) => {
  console.log('success');
  console.log('event: ', event);
  alert('success!!');
};

const main = () => {
  const button = document.getElementById('click-me-button');
  button.addEventListener('click', (e) => handleClick(e));
};

window.onload = main;
