
import React, { useState } from 'react';
import AvailableTimes from "./AvailableTimes";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const BookingForm = ({updateTestField01}) => {

 const [ocassionState, setOccassionState] = useState("Friends");
 const [resDate, setResDate]=useState("");
  const [guestsCount, setGuestsCount] = useState("2");


    return (
        <div className="BookingFormContainer">
            <div>
                <p><strong>Occassion:</strong>&nbsp; {ocassionState}</p>
                <p><strong>Guest Count:</strong>&nbsp;  {guestsCount}</p>
                <p><strong>Booking Date:</strong>&nbsp;  {resDate}</p>
            </div>
        <Form className="BookingForm">
            <FormGroup>
                <Label htmlFor="testField01">Test Field</Label>
                {/*
                <Input 
                    type="text"
                    id="testField01"
                />*/}
            <button onClick={() => updateTestField01("TestField01 from BookingForm!")}>
                TestField01
            </button>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="res-date">Choose date</Label>
                <Input 
                type="date" 
                id="res-date"
                 onChange={e =>setResDate(e.target.value)}  
                />
            </FormGroup>
{/*
            <FormGroup>
                <Label htmlFor="res-time">Choose time</Label>
                <Input type="select" id="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </Input>
            </FormGroup>
*/}
            <FormGroup>
                <Label htmlFor="res-time">Choose time</Label>
                <AvailableTimes/>
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