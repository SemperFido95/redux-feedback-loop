import axios from "axios";
import { Container, TableContainer, Table } from "@mui/material";
import { TableCell, TableHead, TableBody, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { IconButton, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Snackbar }from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Fragment } from "react";

function Admin() {
    const [submissions, setSubmissions] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [id, setId] = useState(0);

    const handleDialogOpen = (id) => {
        setId(id);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleSnackOpen = () => {
        setSnackOpen(true);
    };

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackOpen(false);
    };

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

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

    const deleteSubmission = () => {
        axios.delete(`/feedback/${id}`).then(response => {
            console.log(response);
            getFeedback();
            handleDialogClose();
            handleSnackOpen();
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
                                        <IconButton onClick={() => handleDialogOpen(submission.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you Sure You Want to Delete This Submission?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action cannot be undone. If you wish to proceed,
                        select 'Delete' below. Otherwise, select 'cancel' to
                        go back to the admin center.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="success" variant="contained" onClick={handleDialogClose}>Cancel</Button>
                    <Button color="error" variant="contained" onClick={deleteSubmission} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackOpen}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message="Record deleted"
                action={action}
            />
        </Container>
    )
}

export default Admin;