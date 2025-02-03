document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon')
  const closeIcon = document.querySelector('.fa-times')
  const navMenu = document.querySelector('nav ul')

  if (menuIcon) {
    menuIcon.addEventListener('click', function () {
      navMenu.classList.toggle('showing')
    })
  }

  if (closeIcon) {
    closeIcon.addEventListener('click', function () {
      navMenu.classList.toggle('showing')
    })
  }
})
