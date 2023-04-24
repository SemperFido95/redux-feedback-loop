import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Slider, Box, Button } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();

    const supportRating = useSelector(store => store.supportRating);

    const nextPage = () => {
        supportRating > 0 ? history.push('/comments') : alert('Please use the slider below.');
    }

    const previousPage = () => history.push('/content');

    const setSupport = event => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
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

    // labels for tick marks
    const valueText = value => `${value}`;

    return (
        <div>
            <ProgressBar currentStep={2}/>
            <h2>How Well Are You Being Supported?</h2>
            <Box sx={{ width: '50%', margin: '0 auto', display: 'flex' }}>
                <p>Terrible Support</p>
                <Slider
                    onChange={setSupport}
                    min={1}
                    max={5}
                    defaultValue={1}
                    aria-label="Custom marks"
                    getAriaValueText={valueText}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
                <p>Excellent Support</p>
            </Box>
            <p>Your selected rating: {supportRating}</p>
            <Button
                sx={{ position: 'absolute', bottom: 0, left: 0, margin: '20px' }}
                onClick={previousPage}
                size="large"
                variant="contained"
                startIcon={<NavigateBeforeIcon />}
            >
                Back
            </Button>
            <Button
                sx={{ position: 'absolute', bottom: 0, right: 0, margin: '20px' }}
                className="next-btn"
                onClick={nextPage}
                size="large"
                variant="contained"
                endIcon={<NavigateNextIcon />}
            >
                Next
            </Button>
        </div>
    )
}

export default Support;