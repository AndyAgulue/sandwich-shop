'use strict';

// To-Do: Create a form input  for menu items. one for quantity the other for notes/requests
//        Create object for menu items

function SandwichMenu(name,ingredients, price) {
  this.name = name;
  this.ingredients = ingredients;
  this.price = price;
}

SandwichMenu.prototype.display = function() {
  var item = document.createElement('ul');
  var name = document.createElement('li');
  var ingredients = document.createElement('li');
  var price = document.createElement('li');

  name.textContent = this.name;
  ingredients.textContent = this.ingredients;
  price.textContent = this.price;

  var menu = document.getElementById('sandwiches');
  menu.appendChild(item);
  item.appendChild(name);
  item.appendChild(ingredients);
  item.appendChild(price);
};

// for (var i = 0; i < sandwichNames; i++) {
//   new SandwichMenu(sandwichNames[i]);
// }

//Sandwiches
var muffaletta = new SandwichMenu('Mufaletta', 'Mortadella, Salami, Ham, Provolone, Olive Salad', '$14');
var gruyere = new SandwichMenu('Gruyere & Pear', 'North Beach Oyster Mushrooms, Caramelized Onion, Gruyere, Arugula, Bosc Pear', '$13');
var bahnmi = new SandwichMenu('Bahn Mi (Pork or Tofu)', 'Cilantro Aioli, Pickled Daikon and Carrot, Cucumber, Chilis, Herbs', '$13');
var chicken = new SandwichMenu('Fried Chicken', 'Pimento Cheese, Pickles, Cabbage Slaw', '$14');
var cheeseSteak = new SandwichMenu('Cheesesteak', 'Jack Mountain Steak, Caramelized Onion, Sweet Pepper and Garlic Relish, Mornay Sauce', '$16');
var pork = new SandwichMenu('Roast Pork Sanguche', 'Aji Amarillo, Cortido, Radish, Crema', '$14');
var poboy = new SandwichMenu('Fried Prawn Po\'Boy', 'Remoulade, Lettuce, Tomato, Bacon', '$15');

muffaletta.display();
gruyere.display();
bahnmi.display();
chicken.display();
cheeseSteak.display();
pork.display();
poboy.display();

//Salads

function SaladMenu(name,ingredients, price) {
  this.name = name;
  this.ingredients = ingredients;
  this.price = price;
}

SaladMenu.prototype.display = function() {
  var item = document.createElement('ul');
  var name = document.createElement('li');
  var ingredients = document.createElement('li');
  var price = document.createElement('li');

  name.textContent = this.name;
  ingredients.textContent = this.ingredients;
  price.textContent = this.price;

  var menu = document.getElementById('salads');
  menu.appendChild(item);
  item.appendChild(name);
  item.appendChild(ingredients);
  item.appendChild(price);
};

var mixed = new SaladMenu('Mixed Greens', 'Lemon Tahini Dressing, Radish, Seeds', '$4/8');
var caesar = new SaladMenu('Kale Caesar', 'Anchovy, Parmesan, Lemon, Bread Crumbs', '$6/12');
var bunCha = new SaladMenu('Bun Cha (Pork or Tofu)', 'Vermicelli Rice Noodles, Pickled Carrot and Daikon, Lettuce, Nuoc Chom, Hoisin Sauce, Peanuts, Herbs', '$14');

mixed.display();
caesar.display();
bunCha.display();

//Kids Menu

function KidsMenu(name, price) {
  this.name = name;
  this.price = price;
}

KidsMenu.prototype.display = function() {
  var item = document.createElement('ul');
  var name = document.createElement('li');
  var price = document.createElement('li');

  name.textContent = this.name;
  price.textContent = this.price;

  var menu = document.getElementById('kids');
  menu.appendChild(item);
  item.appendChild(name);
  item.appendChild(price);
};

var pbj = new KidsMenu('PB&J', '$6');
var grilledCheese = new KidsMenu('Grilled Cheese', '$6');
var hamCheese = new KidsMenu('Ham & Cheese', '$6');
var kidsBunCha = new KidsMenu('Kids Bun Cha', '$8');

pbj.display();
grilledCheese.display();
hamCheese.display();
kidsBunCha.display();

function DrinksMenu(name, price) {
  this.name = name;
  this.price = price;
}

//Drinks

DrinksMenu.prototype.display = function() {
  var item = document.createElement('ul');
  var name = document.createElement('li');
  var price = document.createElement('li');

  name.textContent = this.name;
  price.textContent = this.price;

  var menu = document.getElementById('kids');
  menu.appendChild(item);
  item.appendChild(name);
  item.appendChild(price);
};

var coke = new DrinksMenu('Mexican Coke', '$3');
var limonata = new DrinksMenu('Pellegrino Limonata', '$3');
var aranciata = new DrinksMenu('Pellegrino Aranciata Rossa', '$3');
var topochico = new DrinksMenu('Topo Chico', '$3');
var coffee = new DrinksMenu('Local Goods French Press Coffee', '$3');
var tea = new DrinksMenu('Enchanted Forest Tea', '$4');
var beer = new DrinksMenu('Beer & Cider', '$5');
var wine = new DrinksMenu('See Store for Details');

coke.display();
limonata.display();
aranciata.display();
topochico.display();
coffee.display();
tea.display();
beer.display();
wine.display();
