import * as React from 'react';
import Radio from '@mui/material/Radio';
import { FormLabel } from 'react-bootstrap';
import Dot from './Dot.png'
import CheckListIcon from './CheckListIcon.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function DocumentCheckList() {
    const [selectedValue1, setSelectedValue1] = React.useState('a');
    const [selectedValue2, setSelectedValue2] = React.useState('a');
    const [selectedValue3, setSelectedValue3] = React.useState('a');
    const [selectedValue4, setSelectedValue4] = React.useState('a');

    const handleChange1 = (event) => {
        setSelectedValue1(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setSelectedValue3(event.target.value);
    };

    const handleChange4 = (event) => {
        setSelectedValue4(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Option 1 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '10px' }}>
                <div style={{ flex: '1' }}>
                    <Card style={{ marginTop: '10px',width:'900px'}}>
                        <FormLabel style={{ marginTop: '10px' }}><img src={CheckListIcon} alt="CheckListIcon" style={{ marginRight: '10px', marginLeft: '10px' }}></img><strong>DOCUMENTS CHECKLIST</strong></FormLabel></Card>
                    <br />
                    <FormLabel><img src={Dot} alt="Dot" style={{ marginRight: '10px' }}></img>
                        Internal Wiring at the premises has been tested by a Licensed Electrical Contractor/designated officer of the Government
                    </FormLabel>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginRight: '50px' }}>
                    <Radio
                        checked={selectedValue1 === 'a'}
                        onChange={handleChange1}
                        value="a"
                        name="radio-buttons1"
                        inputProps={{ 'aria-label': 'A' }}
                    />yes
                    <Radio
                        checked={selectedValue1 === 'b'}
                        onChange={handleChange1}
                        value="b"
                        name="radio-buttons1"
                        inputProps={{ 'aria-label': 'B' }}
                    />no
                </div>
            </div>

            {/* Option 2 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '10px' }}>
                <div style={{ flex: '1' }}>
                    <FormLabel><img src={Dot} alt="Dot" style={{ marginRight: '10px' }}></img>
                        Do you have lift installed?
                    </FormLabel>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginRight: '50px' }}>
                    <Radio
                        checked={selectedValue2 === 'a'}
                        onChange={handleChange2}
                        value="a"
                        name="radio-buttons2"
                        inputProps={{ 'aria-label': 'A' }}
                    />yes
                    <Radio
                        checked={selectedValue2 === 'b'}
                        onChange={handleChange2}
                        value="b"
                        name="radio-buttons2"
                        inputProps={{ 'aria-label': 'B' }}
                    />no
                </div>
            </div>

            {/* Option 3 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '10px' }}>
                <div style={{ flex: '1' }}>
                    <FormLabel><img src={Dot} alt="Dot" style={{ marginRight: '10px' }}></img>
                        Do you want to avail e-Bill Services(paperless) on email?
                    </FormLabel>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginRight: '50px' }}>
                    <Radio
                        checked={selectedValue3 === 'a'}
                        onChange={handleChange3}
                        value="a"
                        name="radio-buttons3"
                        inputProps={{ 'aria-label': 'A' }}
                    />yes
                    <Radio
                        checked={selectedValue3 === 'b'}
                        onChange={handleChange3}
                        value="b"
                        name="radio-buttons3"
                        inputProps={{ 'aria-label': 'B' }}
                    />no
                </div>
            </div>

            {/* Option 4 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '10px' }}>
                <div style={{ flex: '1' }}>
                    <FormLabel><img src={Dot} alt="Dot" style={{ marginRight: '10px' }}></img>
                        Do you want to purchase your own CEA approved meter having additional features as approved by Commission?
                    </FormLabel>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginRight: '50px' }}>
                    <Radio
                        checked={selectedValue4 === 'a'}
                        onChange={handleChange4}
                        value="a"
                        name="radio-buttons4"
                        inputProps={{ 'aria-label': 'A' }}
                    />yes
                    <Radio
                        checked={selectedValue4 === 'b'}
                        onChange={handleChange4}
                        value="b"
                        name="radio-buttons4"
                        inputProps={{ 'aria-label': 'B' }}
                    />no
                </div>
            </div>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label style={{marginLeft:'10px'}}><strong>Email address</strong></Form.Label>
                <Form.Control type="email" placeholder="Enter email" style={{width:'500px' ,marginLeft:'10px'}} />
            </Form.Group>
        </div>


    );
}
