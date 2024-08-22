import { Alert, Box, Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useStudentsList } from "../../custom-hooks/useStudentsList";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ConfirmDialog } from "../library/ConfirmDialog";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SideNav } from "../library/SideNav";

export function StudentsList() {

    const { 
        students,
        openDialog,
        setOpenDialog,
        handleDialogClose,
        removeStudent,
        setSelectedStudentId,
        navigate
    } = useStudentsList();

    return (
        <>
        <Box sx={{paddingLeft:'15rem'}}>
                <Alert severity="success">
                    List of all the students
                </Alert>
                {
                    students.length === 0 ? 
                    <Grid container sx={{ marginTop: 2 }}>
                        <Grid item xs={3}>
                            <Alert severity="warning">No Student Found !</Alert>
                        </Grid>
                    </Grid> : <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Marks</TableCell>
                                    <TableCell>Options</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    students.map((student)=>{
                                        return (
                                            <TableRow key={student.id}>
                                                <TableCell>{student.id}</TableCell>
                                                <TableCell>{student.name}</TableCell>
                                                <TableCell>{student.phone}</TableCell>
                                                <TableCell>{student.marks}</TableCell>
                                                <TableCell>
                                                    <IconButton onClick={()=>{
                                                        navigate(`/edit-form/${student.id}`);
                                                    }}>
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                    <IconButton onClick={()=>{
                                                        setOpenDialog(true);
                                                        setSelectedStudentId(student.id);
                                                    }}>
                                                        <DeleteIcon sx={{color:'red'}} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                }

            <ConfirmDialog 
                open={openDialog} 
                text="Are you sure, you want to delete ?" 
                handleClose={handleDialogClose} 
                handleYes={removeStudent} 
            />
            <ToastContainer/>
            </Box>
        </>

    )
}
