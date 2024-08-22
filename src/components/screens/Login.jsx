import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { ToastContainer } from "react-toastify";
import '../../assets/styles/TextInputStyle.css';
import { useLogin } from "../../custom-hooks/useLogin";
import { MESSAGES } from "../../constants";
export function Login() {

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isValid,
        touched,
        dirty,
        errors
    } = useLogin();
    
    return (
        <Box>
            <Grid container>
                <Grid item xs={5}>
                    <Alert severity="success">{MESSAGES.LOGIN_HEADING}</Alert>
                </Grid>

            </Grid>
            
            <form onSubmit={handleSubmit}>
                <Grid container sx={{ marginTop: 5 }}>
                    <Grid item xs={5}>
                        <TextField 
                            className="custom-field"
                            fullWidth 
                            label="Username" 
                            id="username"
                            name="username" 
                            variant="outlined" 
                            placeholder={MESSAGES.USERNAME_FIELD_PLACEHOLDER}
                            value={values.username} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.username && Boolean(errors.username)}
                            helperText={touched.username && errors.username}
                            margin="normal"
                        />
                    </Grid>

                </Grid>
                <Grid container sx={{ marginTop: 3 }}>
                    <Grid item xs={5}>
                        <TextField 
                            className="custom-field"
                            fullWidth 
                            type="password" 
                            label="Password" 
                            name="password" 
                            variant="outlined" 
                            placeholder={MESSAGES.PASSWORD_FIELD_PLACEHOLDER}
                            value={values.password} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ marginTop: 3 }}
                    type="submit"
                    disabled={!(isValid && dirty)}
                >
                    {MESSAGES.LOGIN_BUTTON_TEXT}
                </Button>
            </form>

            <ToastContainer />
        </Box>
    )
}
