/*Instructions
Task 1: Array Manipulation Basics
Create an empty array called shoppingList.
Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
Write a function called removeLastItem that removes the last item from the shoppingList array.
Write a function called displayList that logs all items in the shoppingList array to the console.

Task 2: Filter and Search an Array
Modify the addItem function to only add the item if it is not already in the shoppingList array.
Write a function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive).

Task 3: Render the List in the Browser
Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.*/

//Task 1: Array Manipulation Basics
const shoppingList = [];

function addItem(item) {
  shoppingList.push(item); //add the item to shoppingList array
  return shoppingList;
}

function removeLastItem() {
  shoppingList.pop(); //this removes the last items by default
  
}

removeLastItem();

function displayList() {
  for (let i = 0; i < shoppingList.length; i++) {
    console.log("Items in my shopping list " + (i + 1) + " " + shoppingList[i]);
  }
}

//Task 2: Filter and Search an Array
function addItemModified(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item); //add the item to shoppingList array if not existed
    console.log("Shopping lists after adding items modified: ", shoppingList);
  } else {
    alert("The item is already added");
  }
}

//filter Items
function filterItems() {
  //const searchInputElement = document.getElementById("search-input");
  const searchValue = searchInput.value;
  const mySearchedItem = shoppingList.filter(
    (item) => item.toLowerCase() === searchValue.toLowerCase() //what we see inside the filter() is another function written in short
  );

  console.log("filtered Item ", mySearchedItem);

  for (i = 0; i < mySearchedItem.length; i++) {
    //create a new element
    let li = document.createElement("li");

    //update the li element with text
    li.textContent = searchValue;

    //append the new element to the ul
    searchedList.appendChild(li);
    
  }

  console.log("My Searched item: ", searchValue);
}

//Task 3: Render the List in the Browser
//select or query elements for the UI part
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const itemsUl = document.getElementById("shopping-list");
const removeBtn = document.getElementById("remove-btn");
const searchBtn = document.getElementById("search-btn");
const searchedList = document.getElementById("searched-list");
const searchInput = document.getElementById("search-input");

function addAndDisplayItems() {
  //add the item to the array using the push() or the custom function addItem
  //shoppingList.push(input.value)
  addItem(input.value);

  //create a new element
  let li = document.createElement("li");

  //update the element with text
  li.textContent = input.value;

  //append the new element to the ul
  itemsUl.appendChild(li);
  console.log(shoppingList);
  displayList();
}

addButton.addEventListener("click", addAndDisplayItems);

searchBtn.addEventListener("click", filterItems);

function removLastItemAndUpdate() {
  //remove the last item in the array by using pop() or the custom function removeLastItem()
  //shoppingList.pop();
  removeLastItem();
  
  //remove the last item from the ul!!!!!!!!!!!!
  itemsUl.lastElementChild.remove();

  console.log(shoppingList);
}

removeBtn.addEventListener("click", removLastItemAndUpdate);
