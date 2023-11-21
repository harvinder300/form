import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import ConnectionLogo from './ConnectionLogo.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function ConnectionDetailsPermanent() {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const [upicAvailable, setUpicAvailable] = useState('no');
    const [connectionType, setConnectionType] = useState(null);

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };
    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const onHandleConnectionTypeChange = (e) => {
        setConnectionType(e.target.value);
    }
    const handleUPICChange = (e) => {
        setUpicAvailable(e.target.value);
    };

    return (
        <Card style={{ margin: '20px', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: '#64CCC5        ' }}>
            <Form>
                <h5 style={{ marginBottom: '20px', marginTop: '10px', color: '#333' }}>
                    <img src={ConnectionLogo} alt="Connection Logo" style={{ marginRight: '2px', marginLeft: '5px' }} />
                    Connection Details For Permanent
                </h5>

                <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
                    <FormLabel component="legend"><strong>Connection Type</strong></FormLabel>
                    <RadioGroup
                        row
                        aria-label="connection-type"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value='permanet' control={<Radio />} label='Permanet' checked={connectionType === 'permanet'} onChange={onHandleConnectionTypeChange} />
                        <FormControlLabel value='temporary' control={<Radio />} label='Temporary' checked={connectionType === 'temporary'} onChange={onHandleConnectionTypeChange} />
                        {
                            connectionType === 'temporary' && (
                                <div  style={{display:'flex',justifyContent:'space-around'}}> 
                                   
                                        <Row className="mb-3">
                                            <Col>
                                                <Form.Group controlId="formFromDate">
                                                    <Form.Label>From Date</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        value={fromDate}
                                                        onChange={handleFromDateChange}
                                                        size="sm"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formToDate">
                                                    <Form.Label>To Date</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        value={toDate}
                                                        onChange={handleToDateChange}
                                                        size="sm"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                  

                                </div>
                            )
                        }

                    </RadioGroup>
                </FormControl>

                <Card style={{ padding: '20px', marginBottom: '20px', boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Category of electricity usage</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Load (KVA) (1 KVA = 0.93 KW)</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Load (KW)</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Purpose of Supply</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Type of Area</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Type of Premises</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Type of Use/Building</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <h6 s>Unique Property Identification Code (UPIC) available? (A 15 digit alphanumeric code issued by MCD)</h6>

                        <div style={{ display: 'flex' }}>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="upicAvailable"
                                value="yes"
                                checked={upicAvailable === 'yes'}
                                onChange={handleUPICChange}
                                style={{ display: 'inline-block', marginRight: '50px' }}
                            />
                            <Form.Check
                                style={{ marginLeft: '0px' }}
                                type="radio"
                                label="No"
                                name="upicAvailable"
                                value="no"
                                checked={upicAvailable === 'no'}
                                onChange={handleUPICChange}
                            />
                        </div>
                    </Row>
                </Card>
            </Form>
        </Card>
    );
}

export default ConnectionDetailsPermanent;
