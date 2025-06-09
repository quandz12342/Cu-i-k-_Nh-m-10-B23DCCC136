interface Book {
  title: string;
  borrowedDate: string;
}

export function getBorrowedList(): Book[] {
  return JSON.parse(localStorage.getItem('borrowedBooks') || '[]');
}

export function borrowBook(book: Book) {
  const list = getBorrowedList();
  list.push(book);
  localStorage.setItem('borrowedBooks', JSON.stringify(list));
}

export function returnBook(title: string) {
  const list = getBorrowedList();
  const updated = list.filter((b) => b.title !== title);
  localStorage.setItem('borrowedBooks', JSON.stringify(updated));
}
