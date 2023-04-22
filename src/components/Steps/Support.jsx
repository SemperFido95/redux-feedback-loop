import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();

    const supportRating = useSelector(store => store.supportRating);

    const nextPage = event => {
        event.preventDefault();
        supportRating > 0 ? history.push('/comment') : alert('Please use the slider below.');
    }

    const setSupport = event => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    return (
        <>
            <h2>How Well Are You Being Supported?</h2>
            <p>Use the slider to select how well you feel you are being supported,</p>
            <p>with 1 being no support, and 5 being the most support:</p>
            <form onSubmit={nextPage}>
                {/* <label htmlFor="feeling">Feeling</label>
                <br /> */}
                <input onChange={setSupport} type="range" defaultValue="1" id="feeling" min="1" max="5" list="markers" />
                <datalist id="markers">
                    <option label="1" value="1"></option>
                    <option label="2" value="2"></option>
                    <option label="3" value="3"></option>
                    <option label="4" value="4"></option>
                    <option label="5" value="5"></option>
                </datalist>
                <input type="submit" value="next" />
            </form>
            <p>{supportRating}</p>
        </>
    )
}

export default Support;