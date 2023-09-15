const hamburgerMenu = document.getElementById('hamburger-menu')
const scrollButton = document.getElementById('scroll')
const buttonCloseMenu = document.getElementById('menu_close')
const aside = document.querySelector('aside')

hamburgerMenu.addEventListener('click' , () => {
  aside.style.display = 'block'
  aside.style.width = '80%'
  buttonCloseMenu.style.display = 'block'
})

buttonCloseMenu.addEventListener('click' , () => {
  aside.style.display = 'none'
  aside.style.width = '0%'
  buttonCloseMenu.style.display = 'none'
})

scrollButton.addEventListener('click' , () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};
