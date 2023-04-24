# Prime Feedback Survey
This is a simple survey for gauging students and their progress while attending Prime Digital Academy.

## Features
- Use the sliding scale to select a rating response for each question
- Optional textarea to input comments
- Navigate back to a previous question after answering
- Rewiew page which allows you to view and edit your responses before submitting
- Option to return to start after submitting responses

## Technologies Used
This web application was built using the folowing technologies:

- HTML
- CSS
- JavaScript
- Axios
- React
- React Router
- Redux
- Material UI
- Node.js
- Express.js
- PostgreSQL

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine
2. Navigate to the project directory in your terminal
3. Run `npm install` to install the required dependencies
4. Start the server by running `npm run server`
5. start the client by running `npm run client`
6. Open a web browser and go to http://localhost:3000

## Usage
___

### User

From the welcome page, select `Start` to begin the survey. For questions 1-3, use the slider to answer each question as accurately as you can. After selecting your reponse, use the `Next` button to navigate to the next question. If you wish to change an answer, you may use the `Back` button to change a previous answer.

Question 3 is an optional comment field. You may leave this blank if you have no additonal comments to add. 

After answering all of the questions, you will have the oppurtunity to review your responses and edit them if desired. To edit a response, select the edit icon next to the desired response you wish to change. If you are satisfied with your responses, select the `Submit` button to submit your response details. If successful, you will be directed to the success page, at which point you may close the browser tab or navigate back to the start of the survey if you wish to submit another response.

### Admin

For the survey administrator, an additional page is provided which displays all survey responses. You may access the admin center by naviagting to `/admin`. You will see a table of all submitted responses. If you see a response that requires further attention, select the checkbox for that particular response to flag it for review. If you wish to delete a response, select the delete icon for that response. A warning message will appear asking you to confimrm the deletion. 