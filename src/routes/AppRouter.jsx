import { Route, Routes } from "react-router-dom";
import { Home } from "../components/screens/Home";
import { RegistrationForm } from "../components/screens/RegistrationForm";
import { StudentsList } from "../components/screens/StudentsList";
import { EditForm } from "../components/screens/EditForm";
import { Login } from "../components/screens/Login";
import { PrivateRoute } from "../components/library/PrivateRoute";

export function AppRouter() {
    return (
        <div style={{ flexGrow: 1, padding: 15, marginTop: 75 }}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<PrivateRoute/>}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/register-student" element={<RegistrationForm />} />
                    <Route path="/students-list" element={<StudentsList />} />
                    <Route path="/edit-form/:id" element={<EditForm/>} />
                </Route>
                
            </Routes>
        </div>

    )
}