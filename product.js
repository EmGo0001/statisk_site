const productContainer  = document.querySelector(".description")

const params = new URLSearchParams(window.location.search);
const id = params .get("id");
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then(res => res.json())
.then(data => showProduct(data));

function showProduct(product){
console.log(id);



productContainer.innerHTML = `<div>
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp"
            alt="nike shoes"
          />
        </div>
        <div>
        
        <h1>${product.productdisplayname}</h1>
          <h2>Product information</h2>
            
            ${product.description}
          </p>

          <p><strong>Model name: </strong><span>${product.variantname}</span></p>
           <p><strong>Color: </strong><span>${product.basecolour}</span></p>
           <p><strong>Inventory number: </strong><span>${product.id}</span></p>
        
        
          <div class="buy">
          <h3>${product.articletype}</h3>
          <p class="stock">In stock</p>
            <p><strong>Price: </strong><span> DKK ${product.price}</span> ,-</p>
         <p>
            <p class="subtle">${product.subcategory} | ${product.agegroup}</p>
            <label for="size"></label>
            <select name="size" id="size">
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <button class="add-to-basket">Add to Basket</button>
          </div>
        </div>`;

};