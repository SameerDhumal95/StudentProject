const Table = ({ data }) => {
  return (
    <table className="table-container">
      <tr>
        <th>Name</th>
        <th>Roll No</th>
        <th>Marks</th>
      </tr>
      <tbody>
        {data?.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.rollNo}</td>
            <td>{user.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
