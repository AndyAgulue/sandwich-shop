'use strict';


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


SandwichMenu.prototype.display = function() {

  for (var i = 0; i < 1; i++) {
    if (this.itemType === 'sandwich') {
      var select = document.getElementById('sandwiches');
      var item = document.createElement('ul');
      var name = document.createElement('li');
      var ingredients = document.createElement('li');
      var price = document.createElement('li');
      name.textContent = this.name;
      ingredients.textContent = this.ingredients;
      price.textContent = ('$' + this.price);
      Option.textContent = this.name;
      Option.value = this.name;
      select.appendChild(item);
      item.appendChild(name);
      item.appendChild(ingredients);
      item.appendChild(price);
    }
    if (this.itemType === 'salad') {
      var selectSalad = document.getElementById('salads');
      var itemSalad = document.createElement('ul');
      var nameSalad = document.createElement('li');
      var ingredientsSalad = document.createElement('li');
      var priceSalad = document.createElement('li');
      nameSalad.textContent = this.name;
      ingredientsSalad.textContent = this.ingredients;
      priceSalad.textContent = ('$' + this.price);
      Option.textContent = this.name;
      Option.value = this.name;
    
      selectSalad.appendChild(itemSalad);
      itemSalad.appendChild(nameSalad);
      itemSalad.appendChild(ingredientsSalad);
      itemSalad.appendChild(priceSalad);
    }
    if (this.itemType === 'kids') {
      var selectKids = document.getElementById('kids');
      var itemKids = document.createElement('ul');
      var nameKids = document.createElement('li');
      var ingredientsKids = document.createElement('li');
      var priceKids = document.createElement('li');
      nameKids.textContent = this.name;
      ingredientsKids.textContent = this.ingredients;
      priceKids.textContent = ('$' + this.price);
      Option.textContent = this.name;
      Option.value = this.name;
    
      selectKids.appendChild(itemKids);
      itemKids.appendChild(nameKids);
      itemKids.appendChild(ingredientsKids);
      itemKids.appendChild(priceKids);
    }
    if (this.itemType === 'drink') {
      var selectDrinks = document.getElementById('drinks');
      var itemDrinks = document.createElement('ul');
      var nameDrinks = document.createElement('li');
      var ingredientsDrinks = document.createElement('li');
      var priceDrinks = document.createElement('li');
      nameDrinks.textContent = this.name;
      ingredientsDrinks.textContent = this.ingredients;
      priceDrinks.textContent = ('$' + this.price);
      Option.textContent = this.name;
      Option.value = this.name;
    
      selectDrinks.appendChild(itemDrinks);
      itemDrinks.appendChild(nameDrinks);
      itemDrinks.appendChild(ingredientsDrinks);
      itemDrinks.appendChild(priceDrinks);
    }
  }
};



//Menu Items
var muffaletta = new SandwichMenu('Mufaletta', 'Mortadella, Salami, Ham, Provolone, Olive Salad', 14, 'sandwich');
var gruyere = new SandwichMenu('Gruyere & Pear', 'North Beach Oyster Mushrooms, Caramelized Onion, Gruyere, Arugula, Bosc Pear', 13, 'sandwich');
var banhmi = new SandwichMenu('Banh Mi (Pork or Tofu)', 'Cilantro Aioli, Pickled Daikon and Carrot, Cucumber, Chilis, Herbs', 13, 'sandwich');
var chicken = new SandwichMenu('Fried Chicken', 'Pimento Cheese, Pickles, Cabbage Slaw', 14, 'sandwich');
var cheeseSteak = new SandwichMenu('Cheesesteak', 'Jack Mountain Steak, Caramelized Onion, Sweet Pepper and Garlic Relish, Mornay Sauce', 16, 'sandwich');
var pork = new SandwichMenu('Roast Pork Sanguche', 'Aji Amarillo, Cortido, Radish, Crema', 14, 'sandwich');
var poboy = new SandwichMenu('Fried Prawn Po\'Boy', 'Remoulade, Lettuce, Tomato, Bacon', 15, 'sandwich');
var mixed = new SandwichMenu('Mixed Greens', 'Lemon Tahini Dressing, Radish, Seeds', 8, 'salad');
var mixedKale = new SandwichMenu('Kale and Mixed Greens', 'Lemon Tahini Dressing, Radish, Seeds', 8, 'salad');
var smallCaesar = new SandwichMenu('Small Kale Caesar', 'Anchovy, Parmesan, Lemon, Bread Crumbs', 8, 'salad');
var caesar = new SandwichMenu('Kale Caesar', 'Anchovy, Parmesan, Lemon, Bread Crumbs', 12, 'salad');
var bunCha = new SandwichMenu('Bun Cha (Pork or Tofu)', 'Vermicelli Rice Noodles, Pickled Carrot and Daikon, Lettuce, Nuoc Chom, Hoisin Sauce, Peanuts, Herbs', 14, 'salad');
var pbj = new SandwichMenu('PB&J','',6, 'kids');
var grilledCheese = new SandwichMenu('Grilled Cheese','', 6, 'kids');
var hamCheese = new SandwichMenu('Ham & Cheese','', 6, 'kids');
var kidsBunCha = new SandwichMenu('Kids Bun Cha','', 8, 'kids');
var coke = new SandwichMenu('Mexican Coke','', 3, 'drink');
var limonata = new SandwichMenu('Pellegrino Limonata','', 3, 'drink');
var aranciata = new SandwichMenu('Pellegrino Aranciata Rossa','', 3, 'drink');
var topochico = new SandwichMenu('Topo Chico','', 3, 'drink');
var coffee = new SandwichMenu('Local Goods French Press Coffee','', 3, 'drink');
var tea = new SandwichMenu('Enchanted Forest Tea','', 4, 'drink');
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
mixedKale.display();
caesar.display();
smallCaesar.display();
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


// Creating a new cart and adding and removing items from cart
var Cart = function(items) {
  this.items = items;
};

Cart.prototype.addItem = function(price, name, quantity) {
  var cartItem = new CartItem(price, name, quantity);
  console.log(cartItem);
  this.items.push(cartItem);
};

Cart.prototype.saveToLocalStorage = function() {
  console.log(this.items);
  var cartString = JSON.stringify(this.items);
  localStorage.setItem('cart', cartString);
};

Cart.prototype.removeItem = function() {
  this.quantity.splice(this.quantity, 1);
};

var CartItem = function(price, name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.price = price;
};


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
    var cartheaderRow = document.createElement('tr');
    var deleteLink = document.createElement('td');
    deleteLink.textContent = 'X';
    deleteLink.classList.add('remover');
    deleteLink.id = [i];
    var amountOfItem = document.createElement('td');
    amountOfItem.textContent = cart.items[i].quantity;
    var itemPathWay = document.createElement('td');

    cartheaderRow.appendChild(deleteLink);
    cartheaderRow.appendChild(amountOfItem);
    cartheaderRow.appendChild(itemPathWay);
    tableBody.appendChild(cartheaderRow);
  }
}
showCart();

renderCart();

var cart = new Cart([]);
var selectElement = document.getElementById('sandwich');

function populateForm() {
  for (var i = 0; i < SandwichMenu.allSandwichMenu.length; i++) {
    var elem = document.createElement('option');
    var option = SandwichMenu.allSandwichMenu[i].name;
    elem.textContent = option;
    selectElement.appendChild(elem);
  }
}

populateForm();

function handleSubmit(event) {
  event.preventDefault();
  var price = 0;
  var itemSelected = select.options[select.selectedIndex].value;
  var quantitySelected = quantity.value;
  console.log(quantitySelected, itemSelected);
  for (var i = 0; i < SandwichMenu.allSandwichMenu.length; i++) {
    if (itemSelected === SandwichMenu.allSandwichMenu[i].name) {
      if (quantitySelected === '0') {
        alert('Please select a Quantity');
      }
      else {
        price = SandwichMenu.allSandwichMenu[i].price;
        console.log(price);
        addSelectedItemToCart(price, itemSelected, quantitySelected);
        cart.saveToLocalStorage();
        updateCounter();
        updateCartPreview(price, itemSelected, quantitySelected);
      }
    }
  }
}

function addSelectedItemToCart(price, itemSelected, quantitySelected) {
  cart.addItem(price, itemSelected, quantitySelected);
  console.log(cart);
}
var cartCount = document.getElementById('cartCounter');
var paraCount = document.createElement('p');
cartCount.appendChild(paraCount);

function updateCounter(){
  var cartTotal = 0;
  for (var i=0; i < cart.items.length; i++) {
    var cartQuant = parseInt(cart.items[i].quantity);
    cartTotal += cartQuant;
    console.log(cartTotal);
  }

  paraCount.textContent = ` ${cartTotal}`;
}

function updateCartPreview(price, itemSelected, quantitySelected) {
  var cartOutput = document.getElementById('cartContents');
  var totalPrice = (price * quantitySelected);
  var itemRow = document.createElement('tr');
  var itemName = document.createElement('td');
  var itemQuantity = document.createElement('td');
  var itemPrice = document.createElement('td');  
  itemName.textContent = `${itemSelected}`;
  itemQuantity.textContent =`${quantitySelected}`;
  itemPrice.textContent =`$${totalPrice}`;

  itemRow.appendChild(itemName);
  itemRow.appendChild(itemQuantity);
  itemRow.appendChild(itemPrice);

  cartOutput.appendChild(itemRow);
  for (var i = 0; i < Cart.length; i++) {
    grandCartTotal += totalPrice;
  }
  orderTotal.textContent = `$${grandCartTotal}`;
}
var cartTotal = document.getElementById('cartTotal');
var grandTotal = document.createElement('tr');
var grandCartTotal = 0;
var menuForm = document.getElementById('menuItem');
var emptyCell = document.createElement('td');
var emptyCell2 = document.createElement('td');
var orderTotal = document.createElement('td');
emptyCell.textContent = 'Cart Total';
grandTotal.appendChild(emptyCell);
grandTotal.appendChild(emptyCell2);
grandTotal.appendChild(orderTotal);
cartTotal.appendChild(grandTotal);


menuForm.addEventListener('submit', handleSubmit);
