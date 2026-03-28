import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';



function AvailableTimes(){
    // the "state" to store selected value
    const [selectedValue, setSelectedValue] = useState('');

    // array of objects for the drop down
    const options = [
  { label: 'Select a time', value: '' }, 
  { label: '1pm', value: '1pm' },
  { label: '2pm', value: '2pm' },
  { label: '3pm', value: '3pm' },
  { label: '4pm', value: '4pm' },
  { label: '5pm', value: '5pm' },
  { label: '6pm', value: '6pm' },
  { label: '7pm', value: '7pm' },
  { label: '8pm', value: '8pm' },
  { label: '9pm', value: '9pm' },
    ];

    // Handler for dropdown selection change
    const handleChange = (event) =>{
        setSelectedValue(event.target.value);
    }

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your booking time is: ' + selectedValue);
    // You can send the selectedValue to an API here   
    }


    return(
        <div>
            <p>{selectedValue}</p>
            <form onSubmit={handleSubmit}>
                <Input type="select" id="res-time" value={selectedValue} onChange={handleChange}>
                {options.map((option) => (
                    <option
                    key={option.value || 'default'}
                    value={option.value}
                    disabled={option.value === ''} 
                    >
                    {option.label}
                    </option>
                ))}
                </Input>
            <br/>
           {/* <button type="submit">Submit</button> */}
        </form>
        </div>
    )
}

export default AvailableTimes;