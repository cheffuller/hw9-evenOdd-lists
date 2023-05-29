let usersWord = "";
let oddList = document.getElementById("odd");
let evenList = document.getElementById("even");

// function that stores user input into "usersWord", adding each letter onkeyup
function updateWord(element) {
  usersWord = element.value;
}

// function that creates a new list item and writes the users input into the appropriate list
function handleSubmit() {
  let newListItem = document.createElement("li");
  newListItem.innerText = usersWord;

  // if statement that evaluates the number of characters in the word to determine even or odd
  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem);
  } else {
    oddList.appendChild(newListItem);
  }

  document.getElementById("even-odd-form").reset();
}
