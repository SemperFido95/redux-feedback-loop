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
        const feedbackData = {
            feeling,
            understanding,
            support,
            comments
        }
        axios.post('/feedback', feedbackData).then(response => {
            console.log(response);
            history.push('/success');
            dispatch({ type: 'CLEAR_REDUCERS' });
        }).catch(error => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong.');
        })
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