/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import store from './store.js';
import item from './item.js';
import shoppingList from './shopping-list.js';


const main = function () {

  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();