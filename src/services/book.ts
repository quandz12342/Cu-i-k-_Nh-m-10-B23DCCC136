const BOOKS_KEY = 'books';
const CATEGORIES_KEY = 'categories';
const BORROWED_KEY = 'borrowedBooks';

const defaultBooks = [
  { id: 1, title: 'Doraemon Tập 1', author: 'Fujiko', category: 'truyentranh', quantity: 3 },
  { id: 2, title: 'Chiếc thuyền ngoài xa', author: 'Nguyễn Minh Châu', category: 'tieuthuyet', quantity: 2 },
];

const defaultCategories: { [key: string]: number } = {
  truyentranh: 1,
  tieuthuyet: 1,
};

function getStored<T>(key: string, fallback: T): T {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

function setStored<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getBooks() {
  return getStored(BOOKS_KEY, defaultBooks);
}

export function getCategories() {
  const obj = getStored(CATEGORIES_KEY, defaultCategories);
  return Object.entries(obj).map(([key, count]) => ({
    key,
    name: key,
    count,
  }));
}

export function addBook(book: { title: string; author: string; category: string; quantity: number }) {
  const books = getBooks();
  const newBook = { ...book, id: Date.now() };
  const categories = getStored(CATEGORIES_KEY, defaultCategories);

  books.push(newBook);
  categories[book.category] = (categories[book.category] || 0) + 1;

  setStored(BOOKS_KEY, books);
  setStored(CATEGORIES_KEY, categories);

  return newBook;
}

export function updateBook(id: number, data: { title: string; author: string; category: string; quantity: number }) {
  const books = getBooks();
  const categories = getStored(CATEGORIES_KEY, defaultCategories);
  const index = books.findIndex((b) => b.id === id);

  if (index !== -1) {
    const oldCategory = books[index].category;
    books[index] = { ...books[index], ...data };

    if (oldCategory !== data.category) {
      categories[oldCategory] = Math.max(0, (categories[oldCategory] || 1) - 1);
      categories[data.category] = (categories[data.category] || 0) + 1;
    }

    setStored(BOOKS_KEY, books);
    setStored(CATEGORIES_KEY, categories);
  }

  return true;
}

export function deleteBook(id: number) {
  let books = getBooks();
  const categories = getStored(CATEGORIES_KEY, defaultCategories);
  const book = books.find((b) => b.id === id);

  if (book) {
    categories[book.category] = Math.max(0, (categories[book.category] || 1) - 1);
  }

  books = books.filter((b) => b.id !== id);
  setStored(BOOKS_KEY, books);
  setStored(CATEGORIES_KEY, categories);
  return true;
}

export function getBorrowedBooks(): any[] {
  return getStored<any[]>(BORROWED_KEY, []);
}

export function borrowBook(book: any) {
  const books = getBooks();
  const index = books.findIndex((b) => b.id === book.id);
  if (index === -1 || books[index].quantity <= 0) return false;

  books[index].quantity -= 1;
  const borrowed = getBorrowedBooks();
  borrowed.push(book);

  setStored(BOOKS_KEY, books);
  setStored(BORROWED_KEY, borrowed);
  return true;
}

export function returnBook(id: number) {
  const borrowed = getBorrowedBooks();
  const book = borrowed.find((b: any) => b.id === id);
  const books = getBooks();
  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex !== -1) {
    books[bookIndex].quantity += 1;
  }

  setStored(BORROWED_KEY, borrowed.filter((b: any) => b.id !== id));
  setStored(BOOKS_KEY, books);
}
