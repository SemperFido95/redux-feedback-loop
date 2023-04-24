import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";
import EditIcon from '@mui/icons-material/Edit';
import{ IconButton, Grid } from "@mui/material";

function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feelingRating);
    const understanding = useSelector(store => store.contentRating);
    const support = useSelector(store => store.supportRating);
    const comments = useSelector(store => store.additionalComments);

    // Submit responses to database
    const submitFeedback = () => {
        // creating object of feeback responses
        const feedbackData = {
            feeling,
            understanding,
            support,
            comments
        }
        axios.post('/feedback', feedbackData).then(response => {
            console.log(response);
            history.push('/success');
            // clear responses after submission
            dispatch({ type: 'CLEAR_REDUCERS' });
        }).catch(error => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        <>
            <ProgressBar currentStep={4} />
            <h2>Review Your Feedback</h2>
            <Box id="review" sx={{ bgcolor: 'background.paper ', width: '50%', margin: '0 auto', border: '1px solid black', marginBottom: '20px' }}>
                <Grid container >
                    <Grid item md={4}>
                        <List>
                            <ListItem>
                                <IconButton onClick={() => history.push('/feeling')}>
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <ListItemText>Feeling: {feeling}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <IconButton onClick={() => history.push('/understanding')}>
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <ListItemText>Understanding: {understanding}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <IconButton onClick={() => history.push('/support')}>
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <ListItemText>Support: {support}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <IconButton onClick={() => history.push('/comments')}>
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <ListItemText>Comments: {comments}</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box >

            <Button
                size="large"
                variant="contained"
                color="success"
                onClick={submitFeedback}
                endIcon={<SendIcon />}
            >
                Submit
            </Button>
        </>
    )
}

export default Review;