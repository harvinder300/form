import React, { useState, useEffect } from 'react';

function DashBoardTable() {
  const [DashBoards, setDashBoards] = useState([]);

  // This useEffect fetches data from the provided URL
  useEffect(() => {
    fetch('http://localhost:5255/api/Individual/GetUserDetails')
      .then((response) => response.json())
      .then((data) => setDashBoards(data)) // No need to access 'DashBoards' property
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  if (DashBoards.length === 0) {
    return <p>Loading...</p>;
  }

  // Define the table header
  const tableHeader = (
    <thead>
      <tr>

        <th style={{ border: '1px solid #000' }}>Consumer Type</th>
        <th style={{ border: '1px solid #000' }}>Title</th>
        <th style={{ border: '1px solid #000' }}>First Name</th>
        <th style={{ border: '1px solid #000' }}>Middle Name</th>
        <th style={{ border: '1px solid #000' }}>Last Name</th>
        <th style={{ border: '1px solid #000' }}>RelationShip</th>
        <th style={{ border: '1px solid #000' }}>Father/Husband</th>
      </tr>
    </thead>
  );
  if (DashBoards.length === 0) {
    return <p>Loading...</p>;
  }
  // Generate rows from the product data
  const tableRows = DashBoards.map((DashBoard) => (
    <tr style={{ margin: '3px' }} key={DashBoard.id}>
      <td style={{ border: '1px solid #000' }}>{DashBoard.consumerType}</td>
      <td style={{ border: '1px solid #000' }}>{DashBoard.title}</td>
      <td style={{ border: '1px solid #000' }}>{DashBoard.firstName}</td>
      <td style={{ border: '1px solid #000' }}>{DashBoard.middleName}</td>
      <td style={{ border: '1px solid #000' }}>{DashBoard.lastName}</td>
      <td style={{ border: '1px solid #000' }}>{DashBoard.relationship}</td>
      <td style={{ border: '1px solid #000' }}>{DashBoard.fathersName}</td>
    </tr>
  ));

  return (
    <div>
      <h1>DashBoard</h1>
      <table style={{ border: '1px solid #000' }}>
        {tableHeader}
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default DashBoardTable;
