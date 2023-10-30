import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Individual from './Individual';
import FirmTrust from './FirmTrust';

function ConsumerInfo() {
    const [formData, setFormData] = useState({
        consumerType: '',
    });

    // const [submissionStatus, setSubmissionStatus] = useState('');

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (formData.consumerType) {
    //         setSubmissionStatus('Data submitted successfully');
    //         toast.success('Data submitted successfully');
    //     } else {
    //         setSubmissionStatus('Please fill out all required fields');
    //         toast.error('Please fill out all required fields');
    //     }
    // };

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
