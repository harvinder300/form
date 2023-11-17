import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function AppointmentSchedule() {
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
            <Form.Label className="mb-3 d-block"><strong>APPOINTMENT SCHEDULE</strong></Form.Label>

            <Row className="mb-2 justify-content-start">
                <Col xs={3}>
                    <Form.Group controlId="formFromDate">
                        <Form.Label>Appointment Date </Form.Label>
                        <Form.Control
                            type="date"
                            value={fromDate}
                            onChange={handleFromDateChange}
                            size="sm"
                        />
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Appointment Division</Form.Label>
                        <Form.Control placeholder="1234 Main St" />

                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Form.Group className="mb-3" controlId="formGridState">
                        <Form.Label>Appointment Time </Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default AppointmentSchedule;
;
