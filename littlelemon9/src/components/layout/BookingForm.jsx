
import React, { useState } from 'react';
import AvailableTimes from "./AvailableTimes";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


function BookingForm({testField01, updateTestField01}){

 const [ocassionState, setOccassionState] = useState("Friends");
 const [resDate, setResDate]=useState("");
  const [guestsCount, setGuestsCount] = useState("2");
  
const onChange = (e) => updateTestField01(e.target.value);

    return (
        <div className="BookingFormContainer">
            <div>
                <p><strong>Test Field:</strong>&nbsp; {testField01}</p>
                <p><strong>Occassion:</strong>&nbsp; {ocassionState}</p>
                <p><strong>Guest Count:</strong>&nbsp;  {guestsCount}</p>
                <p><strong>Booking Date:</strong>&nbsp;  {resDate}</p>
            </div>
        <Form className="BookingForm">
            <FormGroup>
                <Label htmlFor="testField01">Test Field</Label>
                <Input 
                    type="text"
                    id="testField01"
                    value={testField01}
                    onChange={onChange}
                />
                {/*
            <button onClick={() => updateTestField01("TestField01 from BookingForm!")}>
                TestField01
            </button>
            */}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="res-date">Choose date</Label>
                <Input 
                type="date" 
                id="res-date"
                 onChange={e => setResDate(e.target.value)} 
                    value={resDate}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="res-time">Choose time</Label>
                <AvailableTimes />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="guests">Number of guests</Label>
                <Input 
                    type="number" 
                    placeholder={1} 
                    min={1} max={10} 
                    id="guests"
                    onChange={e =>setGuestsCount(e.target.value)} 
                    />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="occasion">Occasion</Label>
                <Input 
                type="select" 
                id="occasion" 
                onChange={e =>setOccassionState(e.target.value)}
                >
                    <option>Friends</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Work Party</option>
                    <option>Graduation</option>
                    <option>Romantic Date</option>
                </Input>
            </FormGroup>
            <Button type="submit">Make Your reservation</Button>
        </Form>
        </div>
    )
}

export default BookingForm;