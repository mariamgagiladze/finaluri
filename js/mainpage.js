document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0)
})

window.addEventListener('scroll', function () {
  const header = document.querySelector('header')
  const logo = document.getElementById('logo')

  if (window.scrollY > 450) {
    header.classList.add('black')
    logo.src = './images/logo-black.png'
  } else {
    header.classList.remove('black')
    logo.src = './images/logo.png'
  }
})
