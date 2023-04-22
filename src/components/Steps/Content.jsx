import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Content() {
    const dispatch = useDispatch();
    const history = useHistory();

    const contentRating = useSelector(store => store.contentRating);

    const nextPage = event => {
        event.preventDefault();
        contentRating > 0 ? history.push('/support') : alert('Please use the scale to select how well you feel you understand the content.');
    }

    const setContent = event => {
        dispatch({ type: 'SET_CONTENT', payload: event.target.value });
    }

    return (
        <>
            <h2>How Well Do You Understand The Content?</h2>
            <p>Use the slider to select how well you feel your understanding is of the content we have learned so far,</p>
            <p>with 1 being the worst understanding, and 5 being the best:</p>
            <form onSubmit={nextPage}>
                {/* <label htmlFor="feeling">Feeling</label>
                <br /> */}
                <input onChange={setContent} type="range" defaultValue="1" id="feeling" min="1" max="5" list="markers" />
                <datalist id="markers">
                    <option label="1" value="1"></option>
                    <option label="2" value="2"></option>
                    <option label="3" value="3"></option>
                    <option label="4" value="4"></option>
                    <option label="5" value="5"></option>
                </datalist>
                <input type="submit" value="next" />
            </form>
            <p>{contentRating}</p>
        </>
    )
}

export default Content;