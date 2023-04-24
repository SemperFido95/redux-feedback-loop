import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Slider, Box, Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProgressBar from "../ProgressBar/ProgressBar";

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

    // tick marks for slider
    const marks = [
        {
            value: 1,
            label: '1'
        },
        {
            value: 2,
            label: '2'
        },
        {
            value: 3,
            label: '3'
        },
        {
            value: 4,
            label: '4'
        },
        {
            value: 5,
            label: '5'
        }
    ];

    // labels for each tick mark
    const valueText = value => `${value}`

    return (
        <div>
            <ProgressBar currentStep={0}/>
            <h2>How Are You Feeling?</h2>
            <Box sx={{  width: '50%', margin: '0 auto', display: 'flex' }}>
                <p>Terrible</p>
                <Slider
                    onChange={setFeeling}
                    min={1}
                    max={5}
                    defaultValue={1}
                    aria-label="Custom marks"
                    getAriaValueText={valueText}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
                <p>Amazing</p>
            </Box>
            <p>Your selected rating: {feelingRating}</p>
            <Button sx={{position: 'absolute', bottom: 0, right: 0, margin: '20px'}} className="next-btn" onClick={nextPage} size="large" variant="contained" endIcon={<NavigateNextIcon />}>Next</Button>
        </div>
    )
}

export default Feeling;