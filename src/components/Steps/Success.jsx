import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import NorthWestIcon from '@mui/icons-material/NorthWest';

function Success() {
    const history = useHistory();
    const home = () => history.push('/');

    return(
        <>
            <h2>Your response has been submitted!</h2>
            <p>If you would like to submit another response, click the button below.</p>
            <p>Otherwise, you may close this page.</p>
            <Button onClick={home} variant="contained" size="large" startIcon={<NorthWestIcon />}>Back to Start</Button>
            {/* <button onClick={home}>Submit Another Response</button> */}
        </>
    )
}

export default Success;