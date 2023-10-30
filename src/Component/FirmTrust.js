import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

function FirmTrust({ consumerType }) {
    const [formData, setFormData] = useState({
        consumerType,
        authorizedSignatoryName: '',
        designationOfSignatory: '',
        typeOfOrganization: '',
        dateOfIncorporation: '',
        gstNumber: '',

        panRequired: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState('');
    const [inputErrors, setInputErrors] = useState({
        authorizedSignatoryName: '',
        designationOfSignatory: '',
        typeOfOrganization: '',
        dateOfIncorporation: '',
        gstNumber: '',
        panRequired: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'authorizedSignatoryName' || name === 'designationOfSignatory' || name === 'typeOfOrganization') {
            if (/[^a-zA-Z\s]/.test(value)) {
                setInputErrors({ ...inputErrors, [name]: 'Only text characters are allowed.' });
            } else {
                setInputErrors({ ...inputErrors, [name]: '' }); 
            }
        } else if (name === 'gstNumber') {
            if (/[^0-9]/.test(value)) {
                setInputErrors({ ...inputErrors, [name]: 'Only numbers are allowed.' });
            } else {
                setInputErrors({ ...inputErrors, [name]: '' });
            }
        } else if (name === 'panRequired') {
            if (!/^[0-9a-zA-Z]+$/.test(value)) {
                setInputErrors({ ...inputErrors, [name]: 'Only alphanumeric characters are allowed.' });
            } else {
                setInputErrors({ ...inputErrors, [name]: '' });
            }
        }

        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const isFormValid = () => {
            return (
                formData.consumerType !== '' &&
                formData.SignatoryName !== '' &&
                formData.SignatoryDesignation !== '' &&
                formData.OrganizationType !== '' &&
                formData.IncorporationDate !== '' &&
                formData.gstNumber !== '' &&
                formData.panRequired !== ''
            );
        };

        if (isFormValid()) {
            try {
                // Log the data being sent to the server
                console.log('Data being sent to the server:', formData);

                const response = await fetch('http://localhost:5255/PostFirmDetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Data was successfully inserted into the database
                    setSubmissionStatus('Data submitted successfully');
                    toast.success('Data submitted successfully');
                    // You can reset the form or perform other actions here
                } else {
                    // Handle errors, e.g., validation errors
                    setSubmissionStatus('Data submission failed');
                    toast.error('Data submission failed');
                }
            } catch (error) {
                setSubmissionStatus('Error submitting data');
                toast.error('Error submitting data');
                console.error('Error sending data to the server:', error);
            }
        } else {
            // Form is not valid, display an error message or take appropriate action
            setSubmissionStatus('Please fill out all required fields');
            toast.error('Please fill out all required fields');
        }
    };


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Name of Authorized Signatory</Form.Label>
                        <Form.Control
                            type="text"
                            name="SignatoryName"
                            value={formData.SignatoryName}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Designation of Signatory</Form.Label>
                        <Form.Control
                            type="text"
                            name="SignatoryDesignation"
                            value={formData.SignatoryDesignation}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Type of Organization</Form.Label>
                        <Form.Control
                            type="text"
                            name="OrganizationType"
                            value={formData.OrganizationType}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Date of Incorporation</Form.Label>
                        <Form.Control
                            type="date" // Change the type to "date"
                            name="IncorporationDate"
                            value={formData.IncorporationDate}
                            onChange={handleInputChange}
                        />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>GST No.</Form.Label>
                        <Form.Control
                            type="text"
                            name="gstNumber"
                            value={formData.gstNumber}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>PAN No. Required</Form.Label>
                        <Form.Control
                            type="text"
                            name="panRequired"
                            value={formData.panRequired}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <div className="d-grid" style={{ width: '100px' }}>
                    <Button variant="dark" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
}

export default FirmTrust;
