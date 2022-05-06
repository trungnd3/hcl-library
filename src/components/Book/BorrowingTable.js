import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const BorrowingTable = ({ books, onReturnBook }) => {
  const listBooks = books.map(
    ({ id, name, author, category, borrowDate }, index) => {
      const borrowDatetime = new Date(borrowDate);
      const dueDatetime = new Date(borrowDatetime.getTime() + 12096e5);
      const dueDate = dueDatetime.toISOString().split('T')[0];

      const d = Date.now() - dueDatetime.getTime();
      const diffDays = Math.floor(d / (1000 * 60 * 60 * 24));

      let overdueFee = 'N/A';
      if (diffDays > 0) {
        overdueFee = 'Rs. ';
        if (diffDays <= 3) {
          overdueFee += 20 * diffDays;
        } else {
          overdueFee += 50 * diffDays;
        }
      }

      const displayDiffDays = diffDays > 0 ? ` / ${diffDays} days` : '';

      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{author}</td>
          <td>{category}</td>
          <td>{borrowDate}</td>
          <td>{dueDate}</td>
          <td>{`${overdueFee}${displayDiffDays}`}</td>
          <td>
            <Button
              variant='primary-library'
              onClick={() => {
                onReturnBook(id);
              }}
            >
              Return
            </Button>
          </td>
        </tr>
      );
    }
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Author</th>
          <th>Category</th>
          <th>Borrow date</th>
          <th>Due date</th>
          <th>Overdue fee</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{listBooks}</tbody>
    </Table>
  );
};

export default BorrowingTable;
