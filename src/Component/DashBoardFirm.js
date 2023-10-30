import React, { useState, useEffect } from 'react';

function DashBoardFirm() {
  const [FirmData, setFirmData] = useState([]);

  // This useEffect fetches data from the provided URL for firms
  useEffect(() => {
    fetch('http://localhost:5255/GetFirmDetails')
      .then((response) => response.json())
      .then((data) => setFirmData(data))
      .catch((error) => console.error('Error fetching firm data:', error));
  }, []);

  if (FirmData.length === 0) {
    return <p>Loading...</p>;
  }

  // Define the table header
  const tableHeader = (
    <thead>
      <tr>
        <th style={{ border: '1px solid #000' }}>Signatory Name</th>
        <th style={{ border: '1px solid #000' }}>Signatory Designation</th>
        <th style={{ border: '1px solid #000' }}>Organization Type</th>
        <th style={{ border: '1px solid #000' }}>Incorporation Date</th>
        <th style={{ border: '1px solid #000' }}>GST Number</th>
        <th style={{ border: '1px solid #000' }}>PAN REQUIRED</th>
      </tr>
    </thead>
  );

  // Generate rows from the firm data
  const tableRows = FirmData.map((firm) => (
    <tr style={{ margin: '3px' }} key={firm.id}>
      <td style={{ border: '1px solid #000' }}>{firm.SignatoryName}</td>
      <td style={{ border: '1px solid #000' }}>{firm.SignatoryDesignation}</td>
      <td style={{ border: '1px solid #000' }}>{firm.OrganizationType}</td>
      <td style={{ border: '1px solid #000' }}>{firm.IncorporationDate}</td>
      <td style={{ border: '1px solid #000' }}>{firm.GSTNumber}</td>
      <td style={{ border: '1px solid #000' }}>{firm.PANREQUIRED}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Firm Dashboard</h1>
      <table style={{ border: '1px solid #000' }}>
        {tableHeader}
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default DashBoardFirm;
