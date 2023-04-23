import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Box } from "@mui/material";
import ProgressBar from "../ProgressBar/ProgressBar";

function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feelingRating);
    const understanding = useSelector(store => store.contentRating);
    const support = useSelector(store => store.supportRating);
    const comments = useSelector(store => store.additionalComments);

    const submitFeedback = () => {
        const feedbackData = {
            feeling,
            understanding,
            support,
            comments
        }
        axios.post('/feedback', feedbackData).then(response => {
            console.log(response);
            history.push('/success');
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
            {/* <ul style={{listStyle: 'none', padding: 0}}>
                <li>Feeling: {feeling}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments}</li>
            </ul> */}
            <Box sx={{ bgcolor: 'background.paper ', width: '50%', margin: '0 auto', border: '1px solid black', marginBottom: '20px'}}>
                <List>
                    <ListItem>
                        <ListItemText>Feeling: {feeling}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Understanding: {understanding}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Support: {support}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Comments: {comments}</ListItemText>
                    </ListItem>
                </List>
            </Box>

            <Button
                size="large"
                variant="contained"
                color="success"
                onClick={submitFeedback}
                endIcon={<SendIcon />}
            >
                Submit
            </Button>
            {/* <button onClick={submitFeedback}>Submit</button> */}
        </>
    )
}

export default Review;