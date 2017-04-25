// LIST ARRAY IS WHERE OUR DATA FOR THIS APPLICATION LIVES
var listArray = [
  { name: "Books to Read",
    items: [
      "Hitchhiker's Guide to Galaxy",
      "Walden",
      "The Elephant, the Tiger, and the Cell Phone"
    ]
  }
];
var selectedList = 0;
var listDiv = document.getElementById("lists");
var itemDiv = document.getElementById("list-items");
var addListButton = document.getElementById("add-list-button");
var addItemButton = document.getElementById("add-item-button");

// FUNCTIONS TO UPDATE THE HTML PAGE WITH RESPECT TO DATA
function updateLists() {
  while (listDiv.hasChildNodes()) {
    listDiv.removeChild(listDiv.lastChild);
  }

  listArray.forEach(function(list, i) {
    // Create an 'a' element
    var aElement = document.createElement("a");
    aElement.classList.add("list-group-item");
    aElement.classList.add("list-group-item-action");
    aElement.classList.add("list");

    aElement.setAttribute("data-index", i);

    var textNode = document.createTextNode(list.name);
    aElement.appendChild(textNode);

    listDiv.appendChild(aElement);
  });
}

function updateItemsForSelectedList() {
  while (itemDiv.hasChildNodes()) {
    itemDiv.removeChild(itemDiv.lastChild);
  }

  var listItemArray = listArray[selectedList].items;
  listItemArray.forEach(function(item, i) {
    // HOMEWORK
    // Populate the list-items div (the right div) wit respective list items
    // - make a new 'a' element
    // - add classes to its classList
    // - set value of 'data-index' attribute to i
    // - Create a textNode with item name
    // - append textNode to the 'a' element
    // - append 'a' element to the itemDiv
  });
}

updateLists();
updateItemsForSelectedList();

// ADDING TO LIST
addListButton.addEventListener("click", function(e) {
  e.preventDefault();
  var listName = document["add-list-form"]["list-name-input"].value;
  if (listName.length >= 3) {
    var newList = {
        name: listName,
        items: []
      };
    listArray.push(newList);
    updateLists();
  } else {
    alert("Please enter a valid list name: Atleast 3 characters");
  }
});

// ADDING TO LIST ITEMS


  // HOMEWORK
  // - get the input value in a variable
  // - check if the input value is more than 2 characters
  // - add it into listItemArray
  // - update listItem div
};

// POP-UP HANDLING CODE
var buttonsArray = document.querySelectorAll(".popup-button");
// querySelectorAll returns a DOMTokenList and not an Array (which includes methods like forEach)
buttonsArray = Array.from(buttonsArray); // Conevrting DOMTokenList to an Array

buttonsArray.forEach(function(button) {
  button.addEventListener("click", function() {
    var popup = document.getElementById(this.dataset.popupid);
    // The data attributes can be accessed by .dataset variable which is part of the DOMElement (check HTML for buttonsArray)
    popup.style.display = "flex";
  });
});

var closeButton = document.querySelectorAll(".close");
closeButton.forEach(function(button, i) {
  button.addEventListener("click", closePopups);
});

function closePopups() {
  var popupsArray = Array.from(document.querySelectorAll(".popup"));
  popupsArray.forEach(function(popup) {
    popup.style.display = "none";
  });
}
