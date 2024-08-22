import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, login, storeToken } from "../services/AdminService";
import { useFormik } from "formik";
import { adminLoginSchema } from "../validation-schema/AdminLoginSchema";
import { notify } from "../utils/ToastNotification";
import { StatusCodes } from "http-status-codes";
import { TOAST_TYPE } from "../constants";

export function useLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        if (getToken()) {
            navigate("/home");
        }
    }, []);

    const handleLogin = async (values) => {
        try {
            const response = await login(values);
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

    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: adminLoginSchema,
        onSubmit: handleLogin
    });

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isValid,
        touched,
        dirty,
        errors
    } = formik;

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        isValid,
        touched,
        dirty,
        errors
    }
}