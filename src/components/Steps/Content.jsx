import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Slider, Box, Button } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";

function Content() {
    const dispatch = useDispatch();
    const history = useHistory();

    const contentRating = useSelector(store => store.contentRating);

    const nextPage = () => {
        contentRating > 0 ? history.push('/support') : alert('Please use the scale to select how well you feel you understand the content.');
    }

    const previousPage = () => history.push('/feeling');

    const setContent = event => {
        dispatch({ type: 'SET_CONTENT', payload: event.target.value });
    }

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

    const valueText = value => `${value}`;

    return (

        <div>
            <ProgressBar currentStep={1}/>
            <h2>How Well Do You Understand The Content?</h2>
            <Box sx={{ width: '50%', margin: '0 auto', display: 'flex' }}>
                <p>No understanding</p>
                <Slider
                    onChange={setContent}
                    min={1}
                    max={5}
                    defaultValue={1}
                    aria-label="Custom marks"
                    getAriaValueText={valueText}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
                <p>Perfect Understanding</p>
            </Box>
            <p>Your selected rating: {contentRating}</p>
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

export default Content;