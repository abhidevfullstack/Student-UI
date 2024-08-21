import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LinearProgress from '@mui/material/LinearProgress';
import { useStudentRegistration } from "../../custom-hooks/useStudentRegistration";
import { SideNav } from "../library/SideNav";

export function RegistrationForm() {

    const { loading, handleInputChange, handleRegistration } = useStudentRegistration();

    return (
        <>
            <SideNav />
            <Box sx={{ paddingLeft: '15rem' }}>
                <Box sx={{ width: '100%' }}>
                    {loading && <LinearProgress />}
                </Box>
                <Box>

                    <Alert severity="success">
                        Student Registration Form
                    </Alert>

                    <Grid spacing={2} container style={{ marginTop: 10 }}>
                        <Grid item xs={4}>
                            <TextField fullWidth label="Id" name="id" variant="outlined" placeholder="Enter Id" onChange={handleInputChange} />

                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="Name" name="name" variant="outlined" placeholder="Enter Name" onChange={handleInputChange} />

                        </Grid>
                    </Grid>
                    <Grid spacing={2} container style={{ marginTop: 10 }}>
                        <Grid item xs={4}>
                            <TextField fullWidth label="Phone" name="phone" variant="outlined" placeholder="Enter Phone" onChange={handleInputChange} />

                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="Marks" name="marks" variant="outlined" placeholder="Enter Marks" onChange={handleInputChange} />

                        </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: 30 }}>
                        <Button variant="contained" onClick={handleRegistration}>Register</Button>
                        <ToastContainer />
                    </Grid>

                </Box>
            </Box>

        </>

    )
}