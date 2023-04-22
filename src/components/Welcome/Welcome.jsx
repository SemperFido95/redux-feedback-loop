import { useHistory } from "react-router-dom";

function Welcome() {
    const history = useHistory();

    const nextPage = () => {
        history.push('/feeling');
    }

    return (
        <>
            <h1>Welcome</h1>
            <p>This is a feedback survery for how your day went today. This survey is 5 questions and should take less than 5 minutes to complete.</p>
            <p>You may submit as many surveys as you would like! Click the button below to begin.</p>
            <button onClick={nextPage}>Begin Survey</button>
        </>
    )
}

export default Welcome;