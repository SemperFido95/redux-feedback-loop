import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comment() {
    const dispatch = useDispatch();
    const history = useHistory();

    const setComments = event => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    const nextPage = () => history.push('/review');

    const previousPage = () => history.push('/support');

    return (
        <>
            <h2>Additional Comments (optional)</h2>
            <p>Please leave any additonal comments below:</p>
            <textarea id="comment" rows="4" cols="50" onChange={setComments} />

            <button className="back-btn" onClick={previousPage}>Back</button>
            <button className="next-btn" onClick={nextPage}>Review</button>
        </>
    )
}

export default Comment;