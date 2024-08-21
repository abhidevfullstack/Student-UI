import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../services/AdminService";
export function ApplicationBar(props) {
    const navigate = useNavigate();
    const handleLogout=()=>{
        removeToken();
        navigate('/');
    }
    return (
        <AppBar sx={{ width: 1306 }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                <IconButton color="inherit">
                    <SupportAgentIcon />
                </IconButton>
                <IconButton onClick={handleLogout} color="inherit">
                    <LogoutIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}