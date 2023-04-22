import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();

    const feelingRating = useSelector(store => store.feelingRating);

    const nextPage = () => {
        feelingRating > 0 ? history.push('/content') : alert('Please use the scale to select how you are feeling.');
    }

    const setFeeling = event => {
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    return (
        <div>
            <h2>How Are You Feeling?</h2>
            <p>Use the slider to select how you are feeling today, with 1 being the worst and 5 being the best:</p>
            <input onChange={setFeeling} type="range" defaultValue="1" id="feeling" min="1" max="5" list="markers" />
            <datalist id="markers">
                <option label="1" value="1"></option>
                <option label="2" value="2"></option>
                <option label="3" value="3"></option>
                <option label="4" value="4"></option>
                <option label="5" value="5"></option>
            </datalist>
            <p>{feelingRating}</p>
            <button className="next-btn" onClick={nextPage}>Next</button>
        </div>
    )
}

export default Feeling;