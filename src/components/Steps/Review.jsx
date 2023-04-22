import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feelingRating);
    const understanding = useSelector(store => store.contentRating);
    const support = useSelector(store => store.supportRating);
    const comments = useSelector(store => store.additionalComments);

    const submitFeedback = () => {

    }
    
    return (
        <>
            <h2>Review Your Feedback</h2>
            <ul style={{listStyle: 'none', padding: 0}}>
                <li>Feeling: {feeling}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments}</li>
            </ul>
            <button onClick={submitFeedback}>Submit</button>
        </>
    )
}

export default Review;