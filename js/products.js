document.addEventListener('DOMContentLoaded', async function () {
  const productImage = document.querySelector('.product .image img')
  const productTextContainer = document.querySelector('.product .text')

  async function fetchProduct() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1') // Fetch a single product
      const product = await response.json()

      // Update image
      productImage.src = product.image
      productImage.alt = product.title

      // Update text content
      productTextContainer.innerHTML = `
          <h3>${product.title}</h3>
          <p>${product.description.substring(0, 150)}...</p>
          <p><strong>ფასი:</strong> $${product.price}</p>
          <button class="main-button">
            სრულად ნახვა<i class="fa fa-angle-right"></i>
          </button>
        `
    } catch (error) {
      console.error('Error fetching product:', error)
      productTextContainer.innerHTML = `<p style="color:red;">პროდუქტის ჩატვირთვის შეცდომა</p>`
    }
  }

  fetchProduct()
})
