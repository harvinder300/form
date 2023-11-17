import React, { useState } from 'react'; import toast, { Toaster } from 'react-hot-toast';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Individual from './Individual';
import FirmTrust from './FirmTrust';

function ConsumerInfo() {
    const [formData, setFormData] = useState({
        consumerType: '',
    });

    const [consumerTypeValid, setConsumerTypeValid] = useState(true);
    const consumerTypeRegex = /^(Individual|Firm\/Trust\/Company)$/;

    const handleConsumerTypeChange = (event) => {
        const consumerTypeValue = event.target.value;
        setFormData({ consumerType: consumerTypeValue });
        setConsumerTypeValid(consumerTypeRegex.test(consumerTypeValue));
    };

    return (
        <>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className={`mb-3 ${!consumerTypeValid ? 'has-danger' : ''}`}>
                            <Form.Label>Consumer Type</Form.Label>
                            <Form.Select
                                name="consumerType"
                                value={formData.consumerType}
                                onChange={handleConsumerTypeChange}
                                required
                            >
                                <option value="">Choose...</option>
                                <option value="Individual">Individual</option>
                                <option value="Firm/Trust/Company">Firm/Trust/Company</option>
                            </Form.Select>
                            {!consumerTypeValid && <Form.Control.Feedback type="invalid">Please select a valid consumer type.</Form.Control.Feedback>}
                        </Form.Group>
                    </Col>
                </Row>
                {formData.consumerType === 'Individual' && <Individual consumerType={formData.consumerType} />}
                {formData.consumerType === 'Firm/Trust/Company' && <FirmTrust consumerType={formData.consumerType} />}
            </Form>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default ConsumerInfo;