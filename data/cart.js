// what we're gonna do is create an array(to think of it, cart is nothing but a list of objects, so we store it in array) to store the products in a cart, and we can push products as an object inside the cart array. we can use something like this ->

const cart1 = [];
cart1.push({
  name: "Basketball",
  quantity: 2,
});

console.log(cart1);

// but with this approach the problem arises that how are we gonna know that which product is being added to cart. For that we know a concept called Data Attributes in HTML.

// A data attribute allows us to attach any information to an element.
// SYntax of data Attribute -> A data attribute has to start with data- then we can give it any name. Its just like any other HTML attribute. e.g. data-product-name (kebab-case). The Use of data attribute is that we can attach any information to it, like product name, price etc. (data-bs-attribute).

// To access the the data property in javaScript, we use the attribute 'dataset'. e.g.  ->
// button.dataset (it will give us all the properties related to that data)

export const cart = []; //by using export, this variable can be used outside cart.js file.
