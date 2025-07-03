// Добавьте этот скрипт для работы меню
document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.header__wrapper').classList.toggle('active');
});