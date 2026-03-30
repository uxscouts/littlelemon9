import {useState} from 'react';

import BookingForm from "./BookingForm";

function BookingPage({testField01, onFieldChange}){
    return(
        <BookingForm testField01={testField01} updateTestField01={onFieldChange}/>
    )
}

export default BookingPage;