document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    let valid = true

    // Name validation
    let name = document.getElementById('name').value
    let nameRegex = /^[\u10A0-\u10FFa-zA-Z\s]{2,}$/ // Georgian and Latin letters, min 2 chars
    if (!nameRegex.test(name)) {
      document.getElementById('nameError').innerText =
        'სახელი უნდა შეიცავდეს მინიმუმ 2 ასოს'
      valid = false
    } else {
      document.getElementById('nameError').innerText = ''
    }

    // Email validation
    let email = document.getElementById('email').value
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerText =
        'შეიყვანეთ სწორი ელ.ფოსტა'
      valid = false
    } else {
      document.getElementById('emailError').innerText = ''
    }

    // Message validation
    let message = document.getElementById('message').value
    if (message.length < 10) {
      document.getElementById('messageError').innerText =
        'ტექსტი უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს'
      valid = false
    } else {
      document.getElementById('messageError').innerText = ''
    }

    if (!valid) {
      event.preventDefault()
    }
  })
