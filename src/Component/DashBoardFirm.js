import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function DashBoardFirm() {
  const [FirmData, setFirmData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // This useEffect fetches data from the provided URL for firms
  useEffect(() => {
    fetch('http://localhost:5255/GetFirmDetails')
      .then((response) => response.json())
      .then((data) => {
        setFirmData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error fetching firm data:', error);
      });
  }, []);

  const renderTable = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else if (FirmData.length === 0) {
      return <p>No data available.</p>;
    } else {
      // Define the table header
      const tableHeader = (
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Signatory Name</th>
            <th>Signatory Designation</th>
            <th>Organization Type</th>
            <th>Incorporation Date</th>
            <th>GST Number</th>
            <th>PAN REQUIRED</th>
          </tr>
        </thead>
      );

      // Generate rows from the firm data
      const tableRows = FirmData.map((firm, index) => (
        <tr key={index}>
          <td>{index + 1}</td> {/* Serial number column */}
          <td>{firm.signatoryName}</td>
          <td>{firm.signatoryDesignation}</td>
          <td>{firm.organizationType}</td>
          <td>{firm.incorporationDate}</td>
          <td>{firm.gstNumber}</td>
          <td>{firm.panrequired}</td>
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
      <h1 className="text-center mb-4 display-4 font-weight-bold">Firm Dashboard</h1>
      {renderTable()}
    </div>
  );
}

export default DashBoardFirm;
