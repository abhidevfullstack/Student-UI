import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { notify } from "../../utils/ToastNotification";
import { TOAST_TYPE } from "../../constants";
import { getToken, login, storeToken } from "../../services/AdminService";
import { StatusCodes } from "http-status-codes";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export function Login() {

    const navigate = useNavigate();

    useEffect(()=>{
        if(getToken()){
            navigate("/home");
        }
    },[]);

    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleInputChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    const handleLogin = async () => {
        try {
            const response = await login(credentials);
            if (response.status === StatusCodes.OK) {
                storeToken(response.data.token);
                navigate("/home");
            }
        } catch (error) {
            if (error.response.status === StatusCodes.BAD_REQUEST) {
                notify(error.response.data.message, TOAST_TYPE.ERROR)
            }
            else {
                notify("Something went wrong", TOAST_TYPE.ERROR);
            }


        }
    }

    return (
        <Box>
            <Grid container>
                <Grid item xs={5}>
                    <Alert severity="success">LOGIN</Alert>
                </Grid>

            </Grid>
            <Grid container sx={{ marginTop: 5 }}>
                <Grid item xs={5}>
                    <TextField fullWidth label="Username" name="username" variant="outlined" placeholder="Enter Username" onChange={handleInputChange} />
                </Grid>

            </Grid>
            <Grid container sx={{ marginTop: 3 }}>
                <Grid item xs={5}>
                    <TextField fullWidth type="password" label="Password" name="password" variant="outlined" placeholder="Enter Password" onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" sx={{ marginTop: 3 }} onClick={handleLogin}>
                Login
            </Button>
            <ToastContainer/>
        </Box>
    )
}