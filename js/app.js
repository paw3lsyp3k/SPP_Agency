const button = document.querySelector('.nav-hamburger');
const menuList = document.querySelector('.nav-list');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  menuList.classList.toggle('active');
});
