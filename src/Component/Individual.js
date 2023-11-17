import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Import the Button component
import toast, { Toaster } from 'react-hot-toast';

//import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
function Indvidual({ consumerType }) {
    const [formData, setFormData] = useState({
        consumerType,
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        relationship: '',
        FathersName: '',

    });

    const [submissionStatus, setSubmissionStatus] = useState('');
    const [titleTypeValid, setTitleTypeValid] = useState(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log('Input Name:', name);
        console.log('Input Value:', value);
        if (name === 'firstName' || name === 'middleName' || name === 'lastName' || name === 'FathersName') {
            if (!/^[a-zA-Z\s.]*$/.test(value)) {
                toast.error('Only alphabetic characters and spaces are allowed in this field.');
                return;
            }
        }
        setFormData({ ...formData, [name]: value });
    };


    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setFormData({ ...formData, userImage: file });
    // };

    const handleConsumerTypeChange = (event) => {

        const consumerTypeValue = event.target.value;
        console.log('Selected consumer type:', consumerTypeValue); // Add this line
        setFormData({ ...formData, consumerType: consumerTypeValue });
    };


    const handleTitleTypeChange = (event) => {

        const titleValue = event.target.value;
        setFormData({ ...formData, title: titleValue });
        setTitleTypeValid(true); // Reset title validation state
    };
    const handleSubmit = async (event) => {

        event.preventDefault();

        const isFormValid = () => {

            const isvalid =
                formData.consumerType !== '' &&
                formData.title !== '' &&
                formData.firstName !== '' &&
                formData.lastName !== '' &&
                formData.relationship !== '' &&
                formData.FathersName !== ''

            if (!formData.consumerType) console.log('Consumer Type is empty');
            if (!formData.title) console.log('Title is empty');
            if (!formData.firstName) console.log('First Name is empty');
            if (!formData.lastName) console.log('Last Name is empty');
            if (!formData.relationship) console.log('Relationship is empty');
            if (!formData.FathersName) console.log('Father/Husband is empty');
            // if (formData.userImage === null) console.log('User Image is empty');

            return isvalid;
        };
        if (isFormValid()) {
            // debugger;
            try {
                const formDataToSend = new FormData();
                for (const key in formData) {
                    formDataToSend.append(key, formData[key]);
                }

                const response = await fetch('http://localhost:5255/api/Individual/PostUserDetails', {
                    method: 'POST',
                    body: JSON.stringify(formData), // Serialize formData as JSON
                    headers: {
                        'Content-Type': 'application/json', // Set content-type to JSON
                    },
                });
                if (response.ok) {
                    setSubmissionStatus('Data submitted successfully');
                    toast.success('Data submitted successfully');
                } else {
                    setSubmissionStatus('Data submission failed');
                    toast.error('Data submission failed');
                }
            } catch (error) {
                setSubmissionStatus('Error submitting data');
                toast.error('Error submitting data');
                console.error('Error sending data to the server:', error);
            }
        } else {
            setSubmissionStatus('Please fill out all required fields');
            toast.error('Please fill out all required fields');
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        {/* <Form.Group className={`mb-3 `}>
                            <Form.Label>Consumer Type</Form.Label>
                            <Form.Select
                                name="consumerType"
                                value={formData.consumerType}
                                onChange={handleConsumerTypeChange}
                                required
                            > */}
                        {/* <option value="">Choose...</option>
                                <option value="Individual">Individual</option>
                                <option value="Firm/Trust/Company">Firm/Trust/Company</option>
                            </Form.Select> */}
                        {/* {!consumerTypeValid && <Form.Control.Feedback type="invalid">Please select a valid consumer type.</Form.Control.Feedback>} */}
                        {/* </Form.Group> */}
                        {/* Upload   */}
                        {/* <Form.Group className="mb-3" style={{ display: 'grid', alignItems: 'flex-end' }}> */}
                        {/* <div style={{ marginLeft: '1000px' }}>
                                <img src={uploadIcon} alt="Upload Icon" width="300" height="100" />
                            </div> */}
                        {/* <Form.Control type="file" name="userImage"  style={{ width: '300px', height: '30px', marginLeft: '1000px', marginTop: '10px' }} />
                        </Form.Group> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group as={Col} className={`mb-3 ${!titleTypeValid ? 'has-danger' : ''}`} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Title
                            </Form.Label>
                            <Form.Select
                                name="title"
                                value={formData.title}
                                onChange={handleTitleTypeChange}
                                required
                            >
                                <option value="">--Select--</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Other">Others</option>
                            </Form.Select>
                            {!titleTypeValid && <Form.Control.Feedback type="invalid">Please select a valid title.</Form.Control.Feedback>}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        {/* Upload Image */}
                        {/* <Form.Group className="mb-3" style={{ display: 'grid', alignItems: 'flex-end' }}> */}
                        {/* <div style={{ marginLeft: '250px' }}>
                                <img src={Signature} alt="Upload Icon" width="300" height="100" />
                            </div> */}
                        {/* <Form.Control type="file" name="userImage" style={{ width: '300px', height: '30px', marginLeft: '250px', marginTop: '10px' }} /> */}
                        {/* </Form.Group> */}
                    </Col>
                </Row>
                {/*Consumer Type and Title */}

                {/* First Name*/}
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="middleName" // Add the name attribute
                            value={formData.middleName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName" // Add the name attribute
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                {/*Last Name*/}

                {/*RelationShips*/}
                <Form.Group as={Col} className="mb-3">
                    <Col sm={10}>
                        <Row>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
                                <Form.Check
                                    type="radio"
                                    label="Son Of"
                                    name="relationship" // Add a common name for the radio buttons
                                    value="Son Of"
                                    id="formHorizontalRadios1"
                                    onChange={handleInputChange}
                                />

                                <Form.Check
                                    type="radio"
                                    label="Daughter Of"
                                    name="relationship" // Add a common name for the radio buttons
                                    value="Daughter Of"
                                    id="formHorizontalRadios2"
                                    onChange={handleInputChange}
                                />

                                <Form.Check
                                    type="radio"
                                    label="Wife Of"
                                    name="relationship" // Add a common name for the radio buttons
                                    value="Wife Of"
                                    id="formHorizontalRadios3"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </Row>
                    </Col>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Father/Husband`s Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="FathersName" // Add the name attribute
                            value={formData.FathersName}
                            onChange={handleInputChange}

                        />
                    </Form.Group>
                </Row>
                {/*Fathers and husbands name */}
                <div className="d-grid" style={{ width: '100px' }}>
                    <Button variant="dark" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
                <div>
                    {submissionStatus && (
                        <div className={`alert ${submissionStatus === 'Data submitted successfully' ? 'alert-success' : 'alert-danger'}`}>
                            {submissionStatus}
                        </div>
                    )}
                </div>
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
export default Indvidual;