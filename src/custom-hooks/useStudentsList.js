import { useEffect, useState } from "react";
import { getAll, remove } from "../services/StudentService";
import { notify } from "../utils/ToastNotification";
import { TOAST_TYPE } from "../constants";
import { StatusCodes } from "http-status-codes";
import { useNavigate } from "react-router-dom";

export function useStudentsList() {
    const [students, setStudents] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(0);
    const navigate = useNavigate();

    const fetchStudents = async () => {
        try {
            const response = await getAll();
            if (response.status === StatusCodes.OK) {
                setStudents(response.data);
            }

        } catch (error) {
            notify("Something went wrong", TOAST_TYPE.ERROR);
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDialogClose = () => {
        setOpenDialog(false);
    }


    const removeStudent = async () => {
        try {
            const response = await remove(selectedStudentId);
            console.log(response);
            handleDialogClose();
            if (response.status === StatusCodes.OK) {
                await fetchStudents();
                notify("Student deleted successfully", TOAST_TYPE.SUCCESS);
            }
        } catch (error) {
            notify("Something went wrong", TOAST_TYPE.ERROR);
        }
    }

    return {
        students,
        openDialog,
        setOpenDialog,
        handleDialogClose,
        removeStudent,
        setSelectedStudentId,
        navigate
    };
}