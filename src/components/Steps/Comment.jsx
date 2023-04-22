import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Comment() {
    const dispatch = useDispatch();
    const history = useHistory();


    const setComments = event => {
        dispatch({ type:'SET_COMMENTS', payload: event.target.value });
    }

    const nextPage = event => {
        event.preventDefault();
        history.push('/review');
    }

    return (
        <>
            <h2>Additional Comments (optional)</h2>
            <p>Please leave any additonal comments below:</p>
            <form onSubmit={nextPage}>
                <textarea id="comment" rows="4" cols="50" onChange={setComments} />
                <br />
                <input type="submit" value="Review"/>
            </form>
        </>
    )
}

export default Comment;