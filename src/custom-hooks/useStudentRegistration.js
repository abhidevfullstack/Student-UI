import { useState } from "react";
import { save } from "../services/StudentService";
import { TOAST_TYPE } from "../constants";
import { notify } from "../utils/ToastNotification";
import { StatusCodes } from "http-status-codes";

export function useStudentRegistration(){
    const [formData,setFormData] = useState({id:'',name:'',phone:'',marks:''});

    const [loading,setLoading] = useState(false);

    const handleInputChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value});
    }

    const handleRegistration = async (event) => {
        try {
           setLoading(true);
           const response = await save(formData);
           setLoading(false);
           if (response.status === StatusCodes.OK) {
             notify("Student Registered !", TOAST_TYPE.SUCCESS);
           }
        } catch (error) {
            notify("Student registration error", TOAST_TYPE.ERROR);
        }
    }

    return {
        loading,
        handleInputChange,
        handleRegistration
    }
}