import { useDispatch, useSelector } from 'react-redux';

import BorrowingTable from '../components/Book/BorrowingTable';
import Centered from '../components/UI/Centered';

import { selectBorrowing, returnBook } from '../app/action-creators/book';

const Borrowing = () => {
  const borrowingBooks = useSelector(selectBorrowing);
  const dispatch = useDispatch();

  const returnBookHandler = (id) => {
    dispatch(returnBook(id));
  };

  if (!borrowingBooks.length) {
    return (
      <Centered>
        <h3>You are currently not borrowing any book.</h3>
      </Centered>
    );
  }

  return (
    <BorrowingTable books={borrowingBooks} onReturnBook={returnBookHandler} />
  );
};

export default Borrowing;
