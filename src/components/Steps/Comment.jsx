import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Button, TextField } from "@mui/material";

function Comment() {
    const dispatch = useDispatch();
    const history = useHistory();

    const setComments = event => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    const nextPage = () => history.push('/review');

    const previousPage = () => history.push('/support');

    return (
        //     <>
        //         
        //         <p>Please leave any additonal comments below:</p>
        //         <textarea id="comment" rows="4" cols="50" onChange={setComments} />

        //         <button className="back-btn" onClick={previousPage}>Back</button>
        //         <button className="next-btn" onClick={nextPage}>Review</button>
        //     </>
        <div>
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
                sx={{ position: 'absolute', bottom: '10vh', left: 0, margin: '20px' }}
                onClick={previousPage}
                size="large"
                variant="contained"
                startIcon={<NavigateBeforeIcon />}
            >
                Back
            </Button>
            <Button
                sx={{ position: 'absolute', bottom: '10vh', right: 0, margin: '20px' }}
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