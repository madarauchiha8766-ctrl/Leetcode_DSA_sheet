document.addEventListener('DOMContentLoaded', () => {
    const addBookForm = document.getElementById('add-book-form');
    const booksTbody = document.getElementById('books-tbody');
    const formMessage = document.getElementById('form-message');

    // Fetch and display books on load
    fetchBooks();

    // Handle form submission
    addBookForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;

        try {
            const response = await fetch('/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author, year: parseInt(year) })
            });

            const data = await response.json();

            if (response.ok) {
                showMessage('Book added successfully!', 'success');
                addBookForm.reset();
                fetchBooks(); // Refresh the list
            } else {
                showMessage(data.error || 'Failed to add book', 'error');
            }
        } catch (error) {
            console.error('Error adding book:', error);
            showMessage('An error occurred while adding the book.', 'error');
        }
    });

    // Function to fetch books from API
    async function fetchBooks() {
        try {
            const response = await fetch('/api/books');
            const data = await response.json();

            if (response.ok) {
                renderBooks(data.books);
            } else {
                console.error('Failed to fetch books:', data.error);
            }
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    // Function to render books in the table
    function renderBooks(books) {
        booksTbody.innerHTML = ''; // Clear current rows

        if (books.length === 0) {
            booksTbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">No books available in the library yet.</td></tr>';
            return;
        }

        books.forEach(book => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${book.book_id}</td>
                <td><strong>${book.title}</strong></td>
                <td>${book.author}</td>
                <td>${book.year || 'N/A'}</td>
            `;
            booksTbody.appendChild(tr);
        });
    }

    // Function to show form messages
    function showMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = `message ${type}`;
        
        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 3000);
    }
});
