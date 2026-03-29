
import BookingForm from "./BookingForm";

const BookingPage = ({updateTestField01}) => {
    return(
        <BookingForm onFieldChange={updateTestField01}/>
    )
}

export default BookingPage;