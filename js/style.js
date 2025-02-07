const responsive_index_btn = document.querySelector('.responsive_btn');
responsive_index_btn.addEventListener('click', menuToggle);

function menuToggle() {
  const header_index_detail = document.querySelector('.nav');
  header_index_detail.classList.toggle('menu_active');
}