const API = "http://localhost:5000";

// ✅ Add Book
async function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  if (!title || !author || !year) {
    alert("Please fill all fields");
    return;
  }

  await fetch(`${API}/add-book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, author, year }),
  });

  alert("Book Added!");
  loadBooks();
}

// ✅ Load Books
async function loadBooks() {
  const res = await fetch(`${API}/books`);
  const data = await res.json();

  const tbody = document.querySelector("#bookTable tbody");
  tbody.innerHTML = "";

  data.forEach((book) => {
    const row = `
      <tr>
        <td>${book.book_id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Load data on page start
loadBooks();