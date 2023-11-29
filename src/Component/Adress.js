import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Landmark from './LandMark.png'
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { response } from 'express';
function Adress() {

    const [adressFormData, setAdressFormData] = useState({
        HouseNo: '',
        Floor: '',
        BuildingName: '',
        Stree: '',
        ColonyArea: '',
        Landmark: '',
        LandmarkDetail: '',
        CityPostalCode: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAdressFormData({ ...adressFormData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formDataToSend = new FormData();

            for (const key in adressFormData) {
                formDataToSend.append(key, adressFormData[key]);
            }
            const response = await fetch('http://localhost:5255/api/Address/PostUserAddressDetails', {
                method: 'POST',
                body: JSON.stringify(adressFormData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setSubmissionStatus('Data submitted successfully');
                
            } else {
                setSubmissionStatus('Data submission failed');
                
            }
        }
        catch (error) {
            setSubmissionStatus('Error submitting data');
           
            console.error('Error sending data to the server:', error);
        }
    };

    const [floorData, setfloorData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5255/api/Address/GetFloorDetails')
            .then((response) => response.json())
            .then((floorData) => {
                setfloorData(floorData);
            }).catch((error) => {
                console.error('Error fetching individual data:', error);
            });
    }, []);

    return (
        <Form className="mt-2" >
            <Card style={{ marginLeft: '10px', marginRight: '35px' }}>
                <Form.Label style={{ marginTop: '1px' }}><img src={Landmark} style={{ marginTop: '5px' }} alt="Landmark Image" /><strong> Address</strong></Form.Label></Card>
            <Row className="mb-3">\
                <div style={{ marginLeft: '9px', marginTop: '1px' }}>
                    <Form.Label className="mb-3"><strong> FOR COMMUNICATION</strong></Form.Label>
                </div>
                <div style={{ marginLeft: '10px', width: '1525px' }}>
                    <Form.Group as={Col} controlId="formHouse">
                        <Form.Label>House No./Property No.</Form.Label>
                        <Form.Control type="text"
                            onChange={handleInputChange}
                            placeholder="House No./Property No." />
                    </Form.Group>

                    <Form.Group style={{ width: '1425px' }} as={Col} controlId="formFloor">
                        <Form.Label>Floor</Form.Label>
                    </Form.Group>
                </div>
            </Row>
            <div style={{ marginLeft: '10px', width: '1475px' }}>
                <Form.Group className="mb-3" controlId="formBuildingName">
                    <Form.Label>Building Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='BuildingName'
                        value={adressFormData.BuildingName}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor"
                        onChange={handleInputChange}
                        type='text'
                        name='Street'
                        value={adressFormData.Stree}
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formColonyArea">
                        <Form.Label>Colony/Area</Form.Label>
                        <Form.Control
                            type='text'
                            name='ColonyArea'
                            value={adressFormData.ColonyArea}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLandMark">
                        <Form.Label>Landmark</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLandMarkDetails">
                        <Form.Label>Landmark Details</Form.Label>
                        <Form.Control
                            type='text'
                            name='LandMarkDetails'
                            value={adressFormData.LandmarkDetail}
                            onChange={handleInputChange}
                        />
                    </Form.Group>


                    <Form.Group style={{ marginRight: '30px' }} as={Col} controlId="formPostalCode">
                        <Form.Label>City Postal Code</Form.Label>
                        <Form.Control
                            type='text'
                            name='CityCode'
                            value={adressFormData.CityPostalCode}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
            </div>
            <br></br>
            <div style={{ marginLeft: '10px' }}>
                <Form.Label><strong>WHERE SUPPLY IS REQUIRED</strong></Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formNearbyLocality" className="mb-3">
                        <Form.Label>Nearby Locality </Form.Label>
                        <Form.Control style={{ width: '600px' }} type="text" placeholder="Type your locality here" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDivision" className="mb-3">
                        <Form.Label>Division</Form.Label>
                        <Form.Control style={{ width: '720px' }} placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Check
                        style={{ marginLeft: '14px' }}
                        type="radio"
                        label={<strong>Is supply address same as communication address?</strong>}
                        name="relationship" // Add a common name for the radio buttons
                        value="Son Of"
                        id="formHorizontalRadios1"
                    />
                </Row>
            </div>
            <div>
                <Row className="mb-3">

                    <div style={{ marginLeft: '10px', width: '1525px' }}>
                        <Form.Group as={Col} controlId="formHouse">
                            <Form.Label>House No./Property No.</Form.Label>
                            <Form.Control type="text" placeholder="House No./Property No." />
                        </Form.Group>

                        <Form.Group style={{ width: '1425px' }} as={Col} controlId="formFloor">
                            <Form.Label>Floor</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </Row>

                <div style={{ marginLeft: '10px', width: '1475px' }}>
                    <Form.Group className="mb-3" controlId="formBuildingName">
                        <Form.Label>Building Name</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formStreet">
                        <Form.Label>Street</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formColonyArea">
                            <Form.Label>Colony/Area</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLandMark">
                            <Form.Label>Landmark</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLandMarkDetails">
                            <Form.Label>Landmark Details</Form.Label>
                            <Form.Control />
                        </Form.Group>


                        <Form.Group style={{ marginRight: '30px' }} as={Col} controlId="formPostalCode">
                            <Form.Label>City Postal Code</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                </div>
            </div>

        </Form>
    );
}

export default Adress;