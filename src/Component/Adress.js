import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Landmark from './LandMark.png' // Replace './path/to/your/image.png' with the actual path to your image

function Adress() {
    return (
        <Form className="mt-2" >
            <Form.Label><img src={Landmark} alt="Landmark Image" /><strong> Address</strong></Form.Label>
            <Row className="mb-3">\
                <div style={{marginLeft:'9px',marginTop:'15px'} }>
                    <Form.Label className="mb-3"><strong> FOR COMMUNICATION</strong></Form.Label></div>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>House No./Property No.</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Floor</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Building Name</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Street</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Colony/Area</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Landmark</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Landmark Details</Form.Label>
                    <Form.Control />
                </Form.Group>


                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>City Postal Code</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>
            <br></br>
            <Form.Label><strong>WHERE SUPPLY IS REQUIRED</strong></Form.Label>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formNearbyLocality" className="mb-3">
                    <Form.Label>Nearby Locality </Form.Label>
                    <Form.Control type="text" placeholder="Type your locality here" />
                </Form.Group>
                <Form.Group as={Col} controlId="formDivision" className="mb-3">
                    <Form.Label>Division</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Check
                    type="radio"
                    label={<strong>Is supply address same as communication address?</strong>}
                    name="relationship" // Add a common name for the radio buttons
                    value="Son Of"
                    id="formHorizontalRadios1"
                />
            </Row>

            <Row className="mb-3">\

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>House No./Property No.</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Floor</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Building Name</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Street</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Colony/Area</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Landmark</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Landmark Details</Form.Label>
                    <Form.Control />
                </Form.Group>


                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>City Postal Code</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

        </Form>
    );
}

export default Adress;