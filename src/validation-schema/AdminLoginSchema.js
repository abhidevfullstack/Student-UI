import { object, string } from "yup";

export const adminLoginSchema = object({
    username: string().required("Username is required"),
    password: string().required("Password is required")
});