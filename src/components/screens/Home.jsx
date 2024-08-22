import { Alert, Box } from "@mui/material";
import { SideNav } from "../library/SideNav";
import { getToken } from "../../services/AdminService";
import { Navigate } from "react-router-dom";
import { MESSAGES } from "../../constants";

export function Home(){
    return (
            <>
            <Box sx={{paddingLeft:'15rem'}}>
                <Alert severity="success">
                    {MESSAGES.HOME_WELCOME_TEXT}
                </Alert>
                <p>{MESSAGES.HOME_DESCRIPTION}</p>
            </Box>
            </>
            
            
        )
}
