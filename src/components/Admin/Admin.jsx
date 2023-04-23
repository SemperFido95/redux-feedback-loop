import axios from "axios";
import { Container, TableContainer, Table } from "@mui/material";
import { TableCell, TableHead, TableBody, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";

function Admin() {
    const [submissions, setSubmissions] = useState([]);
    const [checked, setChecked] = useState(false);
    const [checkedState, setCheckedState] = useState(
        new Array(submissions.length).fill(false)
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setChecked(updatedCheckedState);
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
                                            checked={checked[i]}
                                            onChange={() => handleOnChange(i)}
                                        />
                                    </TableCell>
                                    <TableCell>{submission.flagged.toString()}</TableCell>
                                    <TableCell>{submission.date}</TableCell>
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