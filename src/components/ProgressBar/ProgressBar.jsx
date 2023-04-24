import { Stepper, Step, StepLabel } from "@mui/material";

function ProgressBar({ currentStep }) {

    const steps = [
        'Feeling',
        'Understanding',
        'Support',
        'Comments',
        'Review'
    ]

    return (
        <>
            <Stepper sx={{ margin: '50px 20px' }} activeStep={currentStep}>
                {
                    steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </>
    )
}

export default ProgressBar;