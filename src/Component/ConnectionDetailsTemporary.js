import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ConnectionLogo from './ConnectionLogo.png';
import { Card } from 'react-bootstrap';

function ConnectionDetailsTemporary() {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [connectionType, setConnectionType] = useState('temporary');
    const [upicAvailable, setUpicAvailable] = useState('no');

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const handleConnectionTypeChange = (e) => {
        setConnectionType(e.target.value);
    };
    const handleUPICChange = (e) => {
        setUpicAvailable(e.target.value);
    };
    return (
        <Form style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h5 style={{ marginBottom: '20px' }}>
                <img src={ConnectionLogo} alt="Connection Logo" style={{ marginRight: '2px' }} />
                Connection Details For Temporary
            </h5>

            <Card style={{ padding: '10px' }} className="shadow-lg p-3 mb-5 bg-white rounded">
                <Row className="mb-3">
                    <Col sm={6}>
                        <Form.Label as="legend">Connection Type</Form.Label>
                        <div style={{ display: 'flex ' }}>
                            <Form.Check

                                type="radio"
                                label="Permanent"
                                name="connectionType"
                                value="permanent"
                                checked={connectionType === 'permanent'}
                                onChange={handleConnectionTypeChange}
                            />
                            <Form.Check
                                style={{ marginLeft: '8px' }}
                                type="radio"
                                label="Temporary"
                                name="connectionType"
                                value="temporary"
                                checked={connectionType === 'temporary'}
                                onChange={handleConnectionTypeChange}
                            /></div>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={6}>
                        <Col>
                            <Form.Group controlId="formGridState">
                                <Form.Label>Category of electricity usage</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Load (KW)</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                        </Col>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Purpose of Supply</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="formGridState">
                            <Form.Label>Type of Use/Building</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
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
                        <Row className="mb-3">
                            <Form.Group controlId="formGridCity">
                                <Form.Label>Type of Area</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group controlId="formGridZip">
                                <Form.Label>Type of Premises</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>
                    </Col>
                </Row>
                <div>
                    <Row className="mb-3">
                        <h6>Unique Property Identification Code (UPIC) available? (A 15 digit alphanumeric code issued by MCD)</h6>

                        <div style={{ display: 'flex' }}>

                            <Row sm={6}>
                                {/* Yes radio button */}
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="upicAvailable"
                                    value="yes"
                                    checked={upicAvailable === 'yes'}
                                    onChange={handleUPICChange}
                                    style={{ display: 'inline-block', marginRight: '20px' }}
                                />
                            </Row>
                            <Row sm={6}>
                                {/* No radio button */}
                                <Form.Check
                                    style={{ marginLeft: '0px' }}
                                    type="radio"
                                    label="No"
                                    name="upicAvailable"
                                    value="no"
                                    checked={upicAvailable === 'no'}
                                    onChange={handleUPICChange}
                                />
                            </Row>
                        </div>
                    </Row>
                </div>
            </Card>
        </Form>
    );
}

export default ConnectionDetailsTemporary;
