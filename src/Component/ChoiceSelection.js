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

  // Import the new components
  import SignUp from './Component/SignUp';
  import SignIn from './Component/SignIn';
  import { CardHeader } from 'react-bootstrap';

  function ChoiceSelection() {

    const [requestno, setrequestno] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5255/api/RequestNo/GetRequestNo')
        .then((response) => response.json())
        .then((data) => {
          setrequestno(data);
        })
        .catch((error) => {
          console.error('Error fetching firm data:', error);
        });
    }, []);


    return (
      <Router>
        <BackgroundImage imageUrl={backgroundImage} style={{ backgroundImage: 'cover' }}>
          <Container fluid>
            <div>
              <Card>

              </Card>
              <image>
                <img src={Logo} style={{ marginLeft: '27px', width: '1000px', height: '100px' }} />
              </image>
            </div>
            <div className="App">
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
                  <Card.Header>Apply Online / New Connection / Request No:{requestno.map((request) => (
                    <div key={request.Request_no}>
                      <p>Request No: {request.Request_no}</p>
                    </div>
                  ))}</Card.Header>
                  <Card.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Card.Title>CONSUMER INFORMATION</Card.Title>
                      
                    </div>
                    <Routes>
                      <Route path="/consumer-info" element={<ConsumerInfo />} />
                      <Route path="/dashboard-table" element={<DashBoardTable />} />
                      <Route path="/dashboard-firm" element={<DashBoardFirm />} />
                      {/* Add the following default route */}
                      <Route element={<ConsumerInfo />} />
                      {/* Add routes for Sign Up and Sign In */}
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/signin" element={<SignIn />} />
                    </Routes>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
        </BackgroundImage>
      </Router>
    );
  }

  export default ChoiceSelection;
