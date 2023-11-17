import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function ConnectionDetailsTemporary() {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    return (
        <Form>
            {/* Date fields above the form, aligned to the right */}
            <Row className="mb-3 justify-content-end">
                <Col xs={3}>
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
                <Col xs={3}>
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

            {/* Connection Details label */}
            <Form.Label className="mb-3 d-block"><strong>Connection Details</strong></Form.Label>

            {/* Connection Details form fields */}
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Category of electricity usage</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Load (KW)</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Purpose of Supply</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

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
                </Col>
            </Row>

            {/* Submit button */}
            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
        </Form>
    );
}

export default ConnectionDetailsTemporary;
