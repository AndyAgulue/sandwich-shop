'use strict';

// To-Do: Create a form input  for menu items. one for quantity the other for notes/requests
//        Create object for menu items
var select = document.getElementById('sandwich');
var quantity = document.getElementById('quantity');

function SandwichMenu(name,ingredients, price, itemType) {
  this.name = name;
  this.ingredients = ingredients;
  this.price = price;
  this.itemType = itemType;
  SandwichMenu.allSandwichMenu.push(this);
}

SandwichMenu.allSandwichMenu = [];

// Cart.selectedItems = [];

SandwichMenu.prototype.display = function() {
  var select = document.getElementById('sandwiches');
  var item = document.createElement('ul');
  var name = document.createElement('li');
  var ingredients = document.createElement('li');
  var price = document.createElement('li');
  name.textContent = this.name;
  ingredients.textContent = this.ingredients;
  price.textContent = this.price;
  Option.textContent = this.name;
  Option.value = this.name;

  select.appendChild(item);
  item.appendChild(name);
  item.appendChild(ingredients);
  item.appendChild(price);
};


// for (var i = 0; i < sandwichNames; i++) {
//   new SandwichMenu(sandwichNames[i]);
// }

//Sandwiches
var muffaletta = new SandwichMenu('Mufaletta', 'Mortadella, Salami, Ham, Provolone, Olive Salad', '$14', 'sandwich');
var gruyere = new SandwichMenu('Gruyere & Pear', 'North Beach Oyster Mushrooms, Caramelized Onion, Gruyere, Arugula, Bosc Pear', '$13', 'sandwich');
var banhmi = new SandwichMenu('Banh Mi (Pork or Tofu)', 'Cilantro Aioli, Pickled Daikon and Carrot, Cucumber, Chilis, Herbs', '$13', 'sandwich');
var chicken = new SandwichMenu('Fried Chicken', 'Pimento Cheese, Pickles, Cabbage Slaw', '$14', 'sandwich');
var cheeseSteak = new SandwichMenu('Cheesesteak', 'Jack Mountain Steak, Caramelized Onion, Sweet Pepper and Garlic Relish, Mornay Sauce', '$16', 'sandwich');
var pork = new SandwichMenu('Roast Pork Sanguche', 'Aji Amarillo, Cortido, Radish, Crema', '$14', 'sandwich');
var poboy = new SandwichMenu('Fried Prawn Po\'Boy', 'Remoulade, Lettuce, Tomato, Bacon', '$15', 'sandwich');
var mixed = new SandwichMenu('Mixed Greens', 'Lemon Tahini Dressing, Radish, Seeds', '$4/8', 'salad');
var caesar = new SandwichMenu('Kale Caesar', 'Anchovy, Parmesan, Lemon, Bread Crumbs', '$6/12', 'salad');
var bunCha = new SandwichMenu('Bun Cha (Pork or Tofu)', 'Vermicelli Rice Noodles, Pickled Carrot and Daikon, Lettuce, Nuoc Chom, Hoisin Sauce, Peanuts, Herbs', '$14', 'salad');
var pbj = new SandwichMenu('PB&J','','$6', 'kids');
var grilledCheese = new SandwichMenu('Grilled Cheese','', '$6', 'kids');
var hamCheese = new SandwichMenu('Ham & Cheese','', '$6', 'kids');
var kidsBunCha = new SandwichMenu('Kids Bun Cha','', '$8', 'kids');
var coke = new SandwichMenu('Mexican Coke','', '$3', 'drink');
var limonata = new SandwichMenu('Pellegrino Limonata','', '$3', 'drink');
var aranciata = new SandwichMenu('Pellegrino Aranciata Rossa','', '$3', 'drink');
var topochico = new SandwichMenu('Topo Chico','', '$3', 'drink');
var coffee = new SandwichMenu('Local Goods French Press Coffee','', '$3', 'drink');
var tea = new SandwichMenu('Enchanted Forest Tea','', '$4', 'drink');
// var beer = new SandwichMenu('Beer & Cider','', '$5', 'drink');
// var wine = new SandwichMenu('See Store for Details', '', 'varies', 'drink');


muffaletta.display();
gruyere.display();
banhmi.display();
chicken.display();
cheeseSteak.display();
pork.display();
poboy.display();
mixed.display();
caesar.display();
bunCha.display();
pbj.display();
grilledCheese.display();
hamCheese.display();
kidsBunCha.display();
coke.display();
limonata.display();
aranciata.display();
topochico.display();
coffee.display();
tea.display();
// beer.display();
// wine.display();


//Salads

// function SaladMenu(name,ingredients, price) {
//   this.name = name;
//   this.ingredients = ingredients;
//   this.price = price;
// }

// SaladMenu.prototype.display = function() {
//   var item = document.createElement('ul');
//   var name = document.createElement('li');
//   var ingredients = document.createElement('li');
//   var price = document.createElement('li');
//   var select = selector(this);


//   name.textContent = this.name;
//   ingredients.textContent = this.ingredients;
//   price.textContent = this.price;

//   var menu = document.getElementById('salads');
//   menu.appendChild(item);
//   item.appendChild(name);
//   item.appendChild(ingredients);
//   item.appendChild(price);
//   item.appendChild(select);
// };





// //Kids Menu

// function KidsMenu(name, price) {
//   this.name = name;
//   this.price = price;
// }

// KidsMenu.prototype.display = function() {
//   var item = document.createElement('ul');
//   var name = document.createElement('li');
//   var price = document.createElement('li');
//   var select = selector(this);

//   name.textContent = this.name;
//   price.textContent = this.price;

//   var menu = document.getElementById('kids');
//   menu.appendChild(item);
//   item.appendChild(name);
//   item.appendChild(price);
//   item.appendChild(select);
// };





// function DrinksMenu(name, price) {
//   this.name = name;
//   this.price = price;
// }

// //Drinks

// DrinksMenu.prototype.display = function() {
//   var item = document.createElement('ul');
//   var name = document.createElement('li');
//   var price = document.createElement('li');
//   var select = selector(this);

//   name.textContent = this.name;
//   price.textContent = this.price;

//   var menu = document.getElementById('drinks');
//   menu.appendChild(item);
//   item.appendChild(name);
//   item.appendChild(price);
//   item.appendChild(select);
// };






// Cart constructor
// Creating a new cart and adding and removing items from cart
var Cart = function(items) {
  this.items = items;
  // Cart.selectedItems.push(this);
};

Cart.prototype.addItem = function(name, quantity) {
  var cartItem = new CartItem(name,quantity);
  console.log(cartItem);
  this.items.push(cartItem);

};

Cart.prototype.saveToLocalStorage = function() {
  console.log(this.items);
  var cartString = JSON.stringify(this.items);
  localStorage.setItem('cart', cartString);
  // localStorage.setItem('cart', JSON.stringify(this.price));
  // localStorage.setItem('cart', JSON.stringify(this.name));
};

Cart.prototype.removeItem = function() {
  this.quantity.splice(this.quantity, 1);
};

var CartItem = function(name, quantity, price) {
  this.name = name;
  this.quantity = quantity;
  this.price = price;
};


// var table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

function renderCart() {
  loadCart();
  clearCart();
}


function clearCart() {
  var tableRows = document.querySelectorAll('#cart tbody tr');
  for (var i = 0; i <= tableRows.length; i++) {
    if (tableRows[i]) {
      tableRows[i].remove();
    }
  }
}

function showCart() {
  var tableBody = document.querySelector('#cart tbody');
  for (var i in Cart.item) {
    var cartItemRow = document.createElement('tr');
    var deleteLink = document.createElement('td');
    deleteLink.textContent = 'X';
    deleteLink.classList.add('remover');
    deleteLink.id = [i];
    var amountOfItem = document.createElement('td');
    amountOfItem.textContent = cart.items[i].quantity;
    var itemPathWay = document.createElement('td');

    cartItemRow.appendChild(deleteLink);
    cartItemRow.appendChild(amountOfItem);
    cartItemRow.appendChild(itemPathWay);
    tableBody.appendChild(cartItemRow);
  }
}
showCart();

function removeItemFromCart(event){
  if (event.target.classList.contains('remover')){
    cart.removeItem(parseInt(event.target.id));
    cart.saveToLocalStorage();
    renderCart();
  }
}
renderCart();

var cart = new Cart([]);
var selectElement = document.getElementById('sandwich');

function populateForm() {
  for (var i = 0; i < SandwichMenu.allSandwichMenu.length; i++) {
  //console.log(i);
    var elem = document.createElement('option');
    var option = SandwichMenu.allSandwichMenu[i].name;
    elem.textContent = option;
    selectElement.appendChild(elem);
  }
}

populateForm();

function handleSubmit(event) {
  event.preventDefault();
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

function addSelectedItemToCart() {
  var itemSelected = select.options[select.selectedIndex].value;
  var quantitySelected = quantity.value;
  console.log('testing', itemSelected, quantitySelected);
  cart.addItem(itemSelected, quantitySelected);
  console.log(cart);
}


function updateCounter(){
  var cartCount = document.getElementById('itemCount');
  var cartTotal = 0;
  for (var i=0; i < cart.items.length; i++) {
    var cartQuant = parseInt(cart.items[i].quantity);
    cartTotal += cartQuant;
    console.log(cartTotal);
  }
  cartCount.textContent = ` ${cartTotal}`;
}

function updateCartPreview() {
  var sandwich = document.getElementById('sandwiches');
  var quantity = document.getElementById('quantity');
  var price = document.getElementById('price');
  var cartOutput = document.getElementById('cartContents');
  var itemElement = document.createElement('div');
  itemElement.textContent = sandwich + quantity + price;
  cartOutput.appendChild(itemElement);
}

var menuForm = document.getElementById('menuItem');
menuForm.addEventListener('submit', handleSubmit);


