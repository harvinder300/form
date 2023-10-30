import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Import the Button component
import toast, { Toaster } from 'react-hot-toast';

//import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function FirmTrust() {
    const [formData, setFormData] = useState({
        consumerType: '',
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        relationship: '',
        father: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isFormValid = () => {
            return (
                formData.consumerType &&
                formData.title &&
                formData.firstName &&
                formData.lastName &&
                formData.relationship &&
                formData.father
            );
        };

        if (isFormValid()) {
            try {
                // Send the form data to the server
                const response = await fetch('http://localhost:5105/api/UserInfo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // Data was successfully inserted into the database
                    setSubmissionStatus('Data submitted successfully');
                    toast.success('Data submitted successfully')// Show success toast
                    // You can reset the form or perform other actions here
                } else {
                    // Handle errors, e.g., validation errors
                    setSubmissionStatus('Data submission failed');
                    toast.error("Data submission failed") // Show error toast
                }
            } catch (error) {
                setSubmissionStatus('Error submitting data');
                toast.error("Error submitting data") // Show error toast
                console.error('Error sending data to the server:', error);
            }
        } else {
            // Form is not valid, display an error message or take appropriate action
            setSubmissionStatus('Please fill out all required fields');
            toast.error("Please fill out all required fields."); // Show error toast
        }
    };


    const [consumerType, setConsumerType] = useState('');
    const [consumerTypeValid, setConsumerTypeValid] = useState(true);
    const consumerTypeRegex = /^(Individual|Firm\/Trust\/Company)$/;

    const [titleType, setTitleType] = useState('');
    const [titleTypeValid, setTitleTypeValid] = useState(true);
    const titleTypeRegex = /^(Mr\.|Mrs\.|Other)$/;

    const handleConsumerTypeChange = (event) => {
        const consumerTypeValue = event.target.value;
        setConsumerType(consumerTypeValue);
        setConsumerTypeValid(consumerTypeRegex.test(consumerTypeValue));
        handleInputChange(event); // Update form data
    };

    const handleTitleTypeChange = (event) => {
        const titleValue = event.target.value;
        setTitleType(titleValue);
        setTitleTypeValid(titleTypeRegex.test(titleValue));
        handleInputChange(event); // Update form data
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                
                {/*Consumer Type and Title */}

                {/* First Name*/}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Name of Authorized Signatory </Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Designation of Signatory </Form.Label>
                        <Form.Control
                            type="text"
                            name="middleName" // Add the name attribute
                            value={formData.middleName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Type of Organization</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName" // Add the name attribute
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Date of Incorporation </Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>GST No.</Form.Label>
                        <Form.Control
                            type="text"
                            name="middleName" // Add the name attribute
                            value={formData.middleName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>PAN No. Required</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName" // Add the name attribute
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                {/*Fathers and husbands name */}
               
            </Form>
            {/* Toast notifications */}
            {/* React Hot Toast */}
            <Toaster
                position="top-right"
                reverseOrder={false}
            /> {/* Container for toast notifications */}
        </>
    );
}
export default FirmTrust;

    