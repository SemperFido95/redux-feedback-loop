import axios from "axios";
import { Container, TableContainer, Table } from "@mui/material";
import { TableCell, TableHead, TableBody, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { IconButton }from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function Admin() {
    const [submissions, setSubmissions] = useState([]);

    const handleOnChange = (event, id) => {
        let checkedState = event.target.checked;
        axios.post(`/feedback/${id}`, { checked: checkedState }).then(response => {
            getFeedback();
            console.log(response);
        }).catch(error => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong.');
        })
    }

    const getFeedback = () => {
        axios.get('/feedback').then(response => {
            setSubmissions(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        })
    }

    const deleteSubmission = (id) => {
        axios.delete(`/feedback/${id}`).then(response => {
            console.log(response);
            getFeedback();
        }).catch(error => {
            console.log(`Error in DELETE ${error}`);
            alert('Something went wrong.');
        })
    }

    useEffect(() => {
        getFeedback();
    }, [])

    return (
        <Container>
            <h2>Admin</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Flag For Review</TableCell>
                            <TableCell>Flagged</TableCell>
                            <TableCell>Date Submitted</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            submissions.map((submission, i) => (
                                <TableRow key={submission.id}>
                                    <TableCell>{submission.id}</TableCell>
                                    <TableCell>{submission.feeling}</TableCell>
                                    <TableCell>{submission.understanding}</TableCell>
                                    <TableCell>{submission.support}</TableCell>
                                    <TableCell>{submission.comments}</TableCell>
                                    <TableCell>
                                        <Checkbox
                                            defaultChecked={submission.flagged}
                                            onChange={event => handleOnChange(event, submission.id)}
                                        />
                                    </TableCell>
                                    <TableCell>{submission.flagged.toString()}</TableCell>
                                    <TableCell>{submission.date}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => deleteSubmission(submission.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Admin;