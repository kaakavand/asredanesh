const hamburgerMenu = document.getElementById('hamburger-menu')
const aside = document.querySelector('aside')

hamburgerMenu.addEventListener('click' , () => {
  console.log('amirhosein');
  aside.style.display = 'block'
  aside.style.width = '80%'
  console.log(aside);
})