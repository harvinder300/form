import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
function ImportantDocument() {
    return (
        <>
            <Card style={{marginTop:'10px',marginLeft:'10px',marginRight:'10px',height:'60px',paddingBottom:'10px'}}>
             <div  style={{ padding: '20px',fontSize: '20px' }}> <b>Important Documents</b></div>
             </Card>
            <div style={{ padding: '20px', paddingTop: '1px' }} >
                <Form style={{ padding: '10px', borderRadius: '20px' }}>
                    {/* div 1 contains instructions*/}
                    <div style={{ padding: '10px', borderRadius: '20px', color: 'red' }}>
                        <h6 className="font-weight-bold">Important Note :</h6>
                        <ul>
                            <li className="note-point">
                                For ownership proof - Sale Deed/Conveyance Deed/Allotment Letter/Valid
                                Lease agreement/Mutation certificate issued by Govt authority/sub division
                                agreement/GPA.
                            </li>
                            <li className="note-point">
                                Ensure all pages (front and back side) of the relevant document are
                                uploaded.
                            </li>
                            <li className="note-point">
                                All uploaded documents should be self-attested by applicants(s) on
                                photocopy of original documents.
                            </li>
                            <li className="note-point">
                                All uploaded documents should be clear &amp; readable.
                            </li>
                            <li className="note-point">
                                Uploaded documents should be in Pdf format . Ownership proof document
                                within size limit of 25 MB &amp; other documents within size limit of 5 MB
                                .
                            </li>
                        </ul>
                    </div>
                    {/* div 2 contains row 1 */}
                    <div style={{ padding: '20px' }}><b>Identifiaction Proof (Self Attested) (Anyone in Pdf Format)</b>
                        <Row style={{ width: '70%' }}>
                            <Form.Group as={Col}>
                                <Form.Label>ID Proof No.</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>--select--</option>
                                    <option>Drving License</option>
                                    <option>Voters ID</option>
                                    <option>Aadhar Card</option>
                                    <option>Ration Card</option>
                                    <option>Pan Card</option>
                                    <option>PassPort</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>ID Proof Doc No.</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as ={Col}>
                                <Form.Label>Upload Selected ID</Form.Label>
                                <input type='file' />
                            </Form.Group>
                        </Row>
                    </div>
                    {/* div 3 contains row 2 */}
                    <div style={{ padding: '20px' }}><b>Ownership Proof (Self Attested) (Anyone in PDF Format)</b>
                        <Row style={{ width: '93%' }}>
                            <Form.Group as={Col}>
                                <Form.Select defaultValue="Choose...">
                                    <option>--select--</option>
                                    <option>Sales Deed</option>
                                    <option>Conyeance Deed</option>
                                    <option>Allotment Letter</option>
                                    <option>Valid Lease Aggrement</option>
                                    <option>Mutation Certficate issued by govt.</option>
                                    <option>GPA (Last 5 year Chain)</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as ={Col}>
                                <input type='file' />
                            </Form.Group>
                        </Row>
                    </div>
                </Form>

            </div>
        </>
    )
}

export default ImportantDocument;
