'use strict';

// To-Do: Create a form input  for menu items. one for quantity the other for notes/requests
//        Create object for menu items

function MenuItems(name,ingredients, price) {
  this.name = name;
  this.ingredients = ingredients;
  this.price = price;
}

MenuItems.prototype.display = function() {
  var item = document.createElement('ul');
  var name = document.createElement('li');
  var ingredients = document.createElement('li');
  var price = document.createElement('li');

  name.textContent = this.name;
  ingredients.textContent = this.ingredients;
  price.textContent = this.price;

  var menu = document.getElementById('menu');
  menu.appendChild(item);
  item.appendChild(name);
  item.appendChild(ingredients);
  item.appendChild(price);
};

// for (var i = 0; i < sandwichNames; i++) {
//   new MenuItems(sandwichNames[i]);
// }


var muffaletta = new MenuItems('Mufaletta', 'Mortadella, Salami, Ham, Provolone, Olive Salad', '$14');
var gruyere = new MenuItems('Gruyere & Pear', 'North Beach Oyster Mushrooms, Caramelized Onion, Gruyere, Arugula, Bosc Pear', '$13');
var bahnmi = new MenuItems('Bahn Mi (Pork or Tofu', 'Cilantro Aioli, Pickled Daikon and Carrot, Cucumber, Chilis, Herbs', '$13');


muffaletta.display();
gruyere.display();
bahnmi.display();




// Ham Sandwoich, ham and bread,  $10


// document.getElementById('menuItem').textContent()



/////////////////////////////////////////////////////////////////////////////////////////////

// var node = document.createElement("LI");                 // Create a node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to
// document.getElementById("myList").appendChild(node);     // Append to  with id="myList"
