import { CssBaseline, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ApplicationBar } from "./ApplicationBar";
import RoofingIcon from '@mui/icons-material/Roofing';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from "react-router-dom";

const drawerWidth = 230;
export function SideNav() {
    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <ApplicationBar title="Student ERP" />
            <Drawer variant="permanent" anchor="left" sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth } }}>
                <List>
                    <ListItemButton component={Link} to="/home">
                        <ListItemIcon>
                            <RoofingIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/register-student">
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Register Student" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/students-list">
                        <ListItemIcon>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Students List" />
                    </ListItemButton>
                </List>
            </Drawer>
        </div>
    )
}