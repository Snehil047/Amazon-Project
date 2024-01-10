// Main Idea of Javascript,

//     1. Save The Data -> Create something that closely matches the data, like if there's a list make it save in an array, if the list has multiple attributes, save it in an Object.
//     2. Generate The HTML
//     3. Make It Interactive

// STEP 01 -> SAVE THE DATA

// const products = [
//   {
//     image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//     name: " Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//       stars: 4.5,
//       count: 87,
//     },
//     priceCents: 1090, //javascript have trouble doing calculations in decimal hence we use cents insted of dollars.
//   },
//   {
//     image: "images/products/intermediate-composite-basketball.jpg",
//     name: " Intermediate Size Basketball",
//     rating: {
//       stars: 4,
//       count: 127,
//     },
//     priceCents: 2095,
//   },
//   {
//     image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name: "Adults Plain Cotton T-Shirt - 2 Pack",
//     rating: {
//       stars: 4.5,
//       count: 56,
//     },
//     priceCents: 799,
//   },
//   {
//     image: "images/products/black-2-slot-toaster.jpg",
//     name: "2 Slot Toaster Black",
//     rating: {
//       stars: 5,
//       count: 2197,
//     },
//     priceCents: 1899,
//   },
//   {
//     image: "",
//   },
// ];

//STEP 02 -> GENERATING THE HTML
// we're going to use the above data to generate HTML, instead of doing that manually.

let productsHTML = "";

products.forEach((product) => {
  productsHTML =
    productsHTML +
    `   <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
          product.id
        }">
          Add to Cart
        </button>
      </div>`;
});

//now all the HTML is inside this variable, now all that remains is to put it on webpage.

// STEP 03 -> Now, we'll combine all the HTML together in a string and put it on the web page.(We can do that using the DOM)

// now this works just like an object, so to access the name inside it we just have to type after (.) button.dataset.productName. Now notice it got changed from kebab case to camel case.

document.querySelector(".js-products-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item; //it'll be an object, and object are truthy values
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    let cartQuantity = 0; //calculate the total quantity of the cart.

    cart.forEach((item) => {
      cartQuantity = cartQuantity + item.quantity;
    });

    //now to put in on the page we can use DOM.

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});

// as of now when we update the cart, the item is added again in the cart with quantity being 1. This should not happen, when we add an existing product, the quantity should only increse by 1.

// To solve this problem, what we can do is ->
// 1. Check if the product is already in the cart.
// 2. If its in the cart then increase the quantity.
// 3. If its not in the cart, add it into the card.

// As far, we've been using product.name to identify a product and adding it to cart, but in a big e-commerce website, two or more products can have the same name. Hence, it is not recommended to use product name, instead of that we should use produt id. Product id should be unique.

// MAKING THE CART QUANTITY IN THE NAVBAR INTERACTIVE (SHOWS HOW MANY PRODUCT ARE ADDED IN THE CART).
// Steps to follow ->

// 1. Calculate quantity. -> we know all our products are in array and we can loop through the array and add all the quantities together and display it on the page.
// 2. Put the quantity on the page.
