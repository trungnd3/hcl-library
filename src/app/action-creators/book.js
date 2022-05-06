import { onReplace } from '../slices/book';
import borrowedBooks from '../../data/borrowedBooks.json';

export const selectBorrowing = (state) => state.book.borrowing;

export const selectBorrowed = (state) => state.book.borrowed;

export const fetchBorrowedBooks = (user) => {
  return (dispatch, getState) => {
    if (!getState().book.init) {
      const books = borrowedBooks[user];
      if (!!books.length) {
        let borrowing = [],
          borrowed = [];
        for (const book of books) {
          if (!book.returnDate) {
            borrowing.push(book);
          } else {
            borrowed.push(book);
          }
        }
        dispatch(onReplace({ borrowing, borrowed }));
      }
    }
  };
};

export const returnBook = (id) => {
  return (dispatch, getState) => {
    const { borrowing, borrowed } = getState().book;

    const bookIdx = borrowing.findIndex((book) => book.id === id);
    const toReturnBook = borrowing[bookIdx];

    const newBorrowing = borrowing.filter((book) => book.id !== id);
    const newBorrowed = [
      ...borrowed,
      {
        ...toReturnBook,
        returnDate: new Date(Date.now()).toISOString().split('T')[0],
      },
    ];

    dispatch(onReplace({ borrowing: newBorrowing, borrowed: newBorrowed }));
  };
};
