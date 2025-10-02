const productlistContainer  = document.querySelector(".product_list_container");

const params = new URLSearchParams(window.location.search);
const category = params .get("category");
const header = document.querySelector("h2").textContent=category

fetch(`https://kea-alt-del.dk/t7/api/products?limit=48&category=${category}`)
.then(response => response.json())
.then(data => showProducts(data))

function showProducts(products) {
  products.forEach((element) => {
    let discountHTML = "";

    if (element.discount > 0) {
      const discountPrice = Math.round(
        element.price - element.price * (element.discount / 100)
      );

      discountHTML = `
        <p class="discount">DKK ${discountPrice} ,-</p>
        <div class="price-container">
          <p class="price price_sale">DKK ${element.price} ,-</p>
          <p class="discount">${element.discount}% off</p>
        </div>`;
    } else {
      discountHTML = `
        <div class="price-container">
          <p class="price">DKK ${element.price} ,-</p>
        </div>`;
    }

    productlistContainer.innerHTML += `
      <article class="product">
        <a href="product.html?id=${element.id}">
          <div class="image_container">
            <img
              class="${element.soldout ? "soldout_img" : ""}"
              src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"
              alt="${element.productdisplayname}"
            />
            <span class="${element.discount > 0 ? "deal_banner" : ""} ${element.soldout ? "soldout_banner" : ""}"></span>
          </div>
          <h3>${element.productdisplayname}</h3>
          <p class="subtle">Sportswear | unisex</p>
          ${discountHTML}
        </a>
      </article>`;
  });
}
