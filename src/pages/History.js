import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import HistoryTable from '../components/Book/HistoryTable';
import HistoryFilter from '../components/Book/HistoryFilter';
import Centered from '../components/UI/Centered';

import { selectBorrowed } from '../app/action-creators/book';

const History = () => {
  const borrowedBooks = useSelector(selectBorrowed);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(borrowedBooks);
  }, [borrowedBooks]);

  const filterHandler = (month, year) => {
    console.log(month, year);
    let filteredBorrowedBooks = [];
    if (!month.length && !year.length) {
      filteredBorrowedBooks = borrowedBooks;
    } else if (!!month && !year.length) {
      filteredBorrowedBooks = borrowedBooks.filter(
        (book) =>
          month === (new Date(book.borrowDate).getMonth() + 1).toString()
      );
    } else if (!!year && !month.length) {
      filteredBorrowedBooks = borrowedBooks.filter((book) => {
        return year === new Date(book.borrowDate).getFullYear().toString();
      });
    } else {
      filteredBorrowedBooks = borrowedBooks.filter((book) => {
        return (
          month === (new Date(book.borrowDate).getMonth() + 1).toString() &&
          year === new Date(book.borrowDate).getFullYear().toString()
        );
      });
    }

    setFilteredBooks(filteredBorrowedBooks);
  };

  return (
    <Fragment>
      <HistoryFilter onFilter={filterHandler} />
      {filteredBooks.length === 0 && (
        <Centered>
          <h3>No book found!</h3>
        </Centered>
      )}
      {filteredBooks.length > 0 && <HistoryTable books={filteredBooks} />}
    </Fragment>
  );
};

export default History;
