// get stored data
const getStoredBook = () => {
  const data = localStorage.getItem("readList");
  return data ? JSON.parse(data) : [];
};

// add new id
const addToStoredDB = (id) => {
  const books = getStoredBook();

  if (books.includes(id)) {
    alert("Already added!");
    return;
  }

  const updatedBooks = [...books, id];
  localStorage.setItem("readList", JSON.stringify(updatedBooks));
};

export { addToStoredDB };