const btn = document.querySelector('.btn');
function changeInnerIcon() {
  btn.classList.toggle('is-filled');
}

btn.addEventListener('click', changeInnerIcon);