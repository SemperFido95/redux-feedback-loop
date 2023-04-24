import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Button, TextField } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";

function Comment() {
    const dispatch = useDispatch();
    const history = useHistory();

    const setComments = event => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    const nextPage = () => history.push('/review');

    const previousPage = () => history.push('/support');

    return (
        <div>
            <ProgressBar currentStep={3} />
            <h2>Additional Comments (optional)</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="comments"
                    multiline
                    maxRows={4}
                    onChange={setComments}
                />
            </Box>
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

export default Comment;