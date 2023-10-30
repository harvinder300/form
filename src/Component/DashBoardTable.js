import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function DashBoardTable() {
  const [DashBoards, setDashBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // This useEffect fetches data from the provided URL
  useEffect(() => {
    fetch('http://localhost:5255/api/Individual/GetUserDetails')
      .then((response) => response.json())
      .then((data) => {
        setDashBoards(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderTable = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (DashBoards.length === 0) {
      return <p>No data available.</p>;
    } else {
      // Define the table header
      const tableHeader = (
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Consumer Type</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Relationship</th>
            <th>Father/Husband</th>
          </tr>
        </thead>
      );

      // Generate rows from the data with serial numbers
      const tableRows = DashBoards.map((DashBoard, index) => (
        <tr key={DashBoard.id}>
          <td>{index + 1}</td> {/* Serial Number */}
          <td>{DashBoard.consumerType}</td>
          <td>{DashBoard.title}</td>
          <td>{DashBoard.firstName}</td>
          <td>{DashBoard.middleName}</td>
          <td>{DashBoard.lastName}</td>
          <td>{DashBoard.relationship}</td>
          <td>{DashBoard.fathersName}</td>
        </tr>
      ));

      return (
        <Table responsive striped bordered hover>
          {tableHeader}
          <tbody>{tableRows}</tbody>
        </Table>
      );
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 display-4 font-weight-bold">Individual Dashboard</h1>
      {renderTable()}
    </div>
  );
}

export default DashBoardTable;
