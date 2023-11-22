// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ConsumerInfo from './Component/ConsumerInfo';
import TopNavBar from './Component/TopNavBar';
import BackgroundImage from './Component/Background';
import backgroundImage from './background.png';
import DashBoardTable from './Component/DashBoardTable';
import DashBoardFirm from './Component/DashBoardFirm';
import './App.css';
import Logo from './Bses.png';
import axios from 'axios';
import Adress from './Component/Adress';
import ConnectionDetailsPermanent from './Component/ConnectionDetailsPermanent';
import AppointmentSchedule from './Component/Appointment';
import SelfDeclaration from './Component/SelfDeclaration'
import ImportantDocument from './Component/ImportantDocument';
import DocumentCheckList from './Component/DocumentCheckList'
import ConnectionDetailsTemporary from './Component/ConnectionDetailsTemporary';
import Dropdown from 'react-bootstrap/Dropdown'; // Add this import for the Dropdown component
import { useState } from 'react';
function App() {
  const handleApplyButtonClick = async () => {
    try {
      await axios.post('http://localhost:5255/api/RequestNo/CreateRequestNo', {}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('New connection record inserted successfully');
    } catch (error) {
      console.error('Error inserting new connection record', error);
    }
  };
  return (
    <div style={{ backgroundColor: '#FDE5D4' ,height: '200vh',overflow:'none' }}>
      <Router>
        <Container fluid>
          <div>
            <Card>

            </Card>
            <image>
              <img src={Logo} style={{ marginLeft: '27px', width: '1000px', height: '100px' }} />
            </image>
          </div>
          <Card>
          <div  style={{backgroundColor:'#001524'}} className="App">
            <div style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
              <Card className="shadow-lg" style={{ width: '1500px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <TopNavBar />

                  <Button
                    variant="dark"
                    as={Link}
                    to="/dashboard-table"
                    size="sm"
                    style={{
                      height: '30px',
                      width: '200px',
                      marginTop: '13px',
                      marginRight: '10px',
                    }}
                  >
                    Dashboard Individual
                  </Button>
                  <Button
                    variant="dark"
                    as={Link}
                    to="/dashboard-firm"
                    size="sm"
                    style={{
                      height: '30px',
                      width: '200px',
                      marginTop: '13px',
                      marginRight: '10px',
                    }}
                  >
                    Dashboard Firm
                  </Button>
                </div>
              </Card>
            </div>
            <div className="App" style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
              <Card className="shadow-lg" style={{ width: '1500px' }}>
                <Card.Header>Apply Online / / Request No: R201020230305</Card.Header>
                <Card.Body>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Card.Title>New Connection Form</Card.Title>
                    <Button onClick={handleApplyButtonClick}>Apply For New Connection</Button>
                  </div>

                  <Routes>
                    <Route path="/consumer-info" element={<ConsumerInfo />} />
                    <Route path="/dashboard-table" element={<DashBoardTable />} />
                    <Route path="/dashboard-firm" element={<DashBoardFirm />} />
                    <Route path="/adress" element={<Adress />} />
                    <Route path="/connection-details-permanent" element={<ConnectionDetailsPermanent />} />
                    <Route path="/document-checklist" element={<DocumentCheckList />} />
                    <Route path="/selfdeclaration" element={<SelfDeclaration />} />
                    <Route path="/importantdocuments" element={<ImportantDocument />} />
                    <Route element={<ConsumerInfo />} />
                  </Routes>
                </Card.Body>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', marginRight: '15px', marginBottom: '5px' }}>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Other Section
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/adress">Adress</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/connection-details-permanent">ConnectionDetails Permanent</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/selfdeclaration">Self Declaration</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/importantdocuments">Important Document</Dropdown.Item>
                      <Dropdown.Item as={Link} to="/document-checklist">Document CheckList</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card>

            </div>
            {/* <Card><Adress/></Card> */}
            {/* <Card > <ConnectionDetailsPermanent/></Card> */}
          </div>
          </Card>
        </Container>


      </Router>
    </div>
  );
}

export default App;
