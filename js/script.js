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
document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "none";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
});
