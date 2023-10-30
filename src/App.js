import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ConsumerInfo from './Component/ConsumerInfo';
import TopNavBar from './Component/TopNavBar';
import BackgroundImage from './Component/Background';
import backgroundImage from './background.png';
import DashBoardTable from './Component/DashBoardTable';
import './App.css';
import Logo from './Bses.png'

function App() {
  const [currentView, setCurrentView] = useState('consumerInfo');

  const toggleView = () => {
    if (currentView === 'consumerInfo') {
      setCurrentView('dashboard');
    } else {
      setCurrentView('consumerInfo');
    }
  };

  return (
    <BackgroundImage imageUrl={backgroundImage} style={{backgroundImage:'cover'}} >
      <Container fluid>
        <div>
          <Card>
          </Card>
          <image>
            <img src={Logo} style={{ marginLeft:"27px", width: "1000px", height: "100px" }} />
          </image>
        </div>
        <div className="App">
          <div style={{ display: "flex", justifyContent: "center", margin: "15px" }}>
            <Card className="shadow-lg" style={{ width: "1500px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TopNavBar />
                <Button variant="primary" onClick={toggleView} size="sm" style={{
                  height: "30px", width: "100px",
                  marginTop: "13px", marginRight: "10px",
                }}>
                  {currentView === 'consumerInfo' ? 'Dashboard' : 'Consumer Info'}
                </Button>
              </div>
            </Card>
          </div>
          <div className="App" style={{ display: "flex", justifyContent: "center", margin: "15px" }}>
            <Card className="shadow-lg" style={{ width: "1500px" }}>
              <Card.Header>Apply Online / New Connection / Request No: R201020230305</Card.Header>
              <Card.Body>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Card.Title>{currentView === 'consumerInfo' ? 'CONSUMER INFORMATION' : 'Dashboard'}</Card.Title>
                </div>
                {currentView === 'consumerInfo' ? <ConsumerInfo /> : <DashBoardTable />}
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </BackgroundImage>
  );
}

export default App;
