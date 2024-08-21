import { Alert, Box } from "@mui/material";
import { SideNav } from "../library/SideNav";
import { getToken } from "../../services/AdminService";
import { Navigate } from "react-router-dom";

export function Home(){
    return (
            <>
            <SideNav/>
            <Box sx={{paddingLeft:'15rem'}}>
                <Alert severity="success">
                    Welcome to Student CRUD Application.
                </Alert>
                <p>In this app, you can register a student, search students, delete the student and modify student data as well</p>
            </Box>
            </>
            
            
        )
}