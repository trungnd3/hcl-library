import Table from 'react-bootstrap/Table';

const HistoryTable = ({ books }) => {
  const listBooks = books.map(
    ({ id, name, author, category, borrowDate, returnDate }, index) => (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{author}</td>
        <td>{category}</td>
        <td>{borrowDate}</td>
        <td>{returnDate}</td>
      </tr>
    )
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Author</th>
          <th>Category</th>
          <th>Borrowed Date</th>
          <th>Returned Date</th>
        </tr>
      </thead>
      <tbody>{listBooks}</tbody>
    </Table>
  );
};

export default HistoryTable;
