const input = document.querySelector('input');
const bookList = document.querySelector('ul');
const addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
  let books = input.value;
  if (books == ""){
    return
  }
  else{
    input.value = "";
  }

  const listBooks = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listBooks.appendChild(listText);
  listText.textContent = books;
  listBooks.appendChild(listBtn);
  listBtn.textContent = "❌";
  bookList.appendChild(listBooks);

  listBtn.addEventListener('click', () => {
    bookList.removeChild(listBooks);
  });

  input.focus();
  
});