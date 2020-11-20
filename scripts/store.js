/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import item from './item.js';


let items = [];
let hideCheckedItems = false;


function findById(id){
  return items.find(item => item.id === id);
}

function addItem(name){
  try {
    item.validateName(name);
    item.create(name);
    items.push({id: cuid(), name: name, checked: false});
  } catch (error) {
    console.log(error.message, "This is an error message from line 21");
  }
}

function findAndToggleChecked(id){
  const tempItem = this.findById(id);
  tempItem.checked = !tempItem.checked;
}

function findAndUpdateName(id, newName){
  try {
    validateName(id);
    this.findById.push({id: cuid(), name: newName});
  } catch (error) {
    throw new TypeError('Cannot update name: ${error.message}');
  }
}

function findAndDelete(id){
  //this.findById(id).splice({id: cuid()});
  const index = items.findIndex(item => item.id === id);
  items.splice(index, 1);
}

const toggleCheckedFilter = function () {
  console.log(hideCheckedItems);
  this.hideCheckedItems = !this.hideCheckedItems;
  console.log(hideCheckedItems);
};


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};

