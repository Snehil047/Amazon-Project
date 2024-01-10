// what we're gonna do is create an array(to think of it, cart is nothing but a list of objects, so we store it in array) to store the products in a cart, and we can push products as an object inside the cart array. we can use something like this ->

const cart1 = [];
cart1.push({
  name: "Basketball",
  quantity: 2,
});

console.log(cart1);

// but with this approach the problem arises that how are we gonna know that which product is being added to cart. For that we know a concept called Data Attributes in HTML.

const cart = [];
