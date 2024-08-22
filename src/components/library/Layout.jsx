import { Outlet, useLocation } from "react-router-dom";
import { SideNav } from "./SideNav";

export function Layout(props){
    const location = useLocation();

    const isLoginScreenActive = location.pathname === "/";

    return (
        <div>
            {!isLoginScreenActive && <SideNav/>} 
            <div>
                {props.children}
            </div>
        </div>
    )
}