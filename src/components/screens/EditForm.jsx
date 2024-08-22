import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { notify } from "../../utils/ToastNotification";
import { TOAST_TYPE } from "../../constants";
import { getById, update } from "../../services/StudentService";
import { useEffect, useState } from "react";
import { StatusCodes } from "http-status-codes";
import { SideNav } from "../library/SideNav";

export function EditForm() {

    const {id} =  useParams();
    const navigate = useNavigate();

    const [studentData, setStudentData] = useState({id:'',name:'',phone:'',marks:''});

    const handleUpdate = async ()=>{
        try {
            const response = await update(id, studentData);  
            if(response.status === StatusCodes.OK){
                navigate("/students-list");
            }
        } catch (error) {
            notify("Something went wrong",TOAST_TYPE.ERROR);
        }
        
    }

    const handleInputChange = (event)=>{
        setStudentData({...studentData,[event.target.name]:event.target.value});
    }

    const fetchStudentById = async ()=>{
        try {
           const response = await getById(id);
           console.log(response);
           if (response.status === StatusCodes.OK) {
            setStudentData(response.data);
           }
        } catch (error) {
            notify("Something went wrong", TOAST_TYPE.ERROR)
        }
    }

    useEffect(()=>{
        fetchStudentById();
    },[]);

    return (
        <>
        <Box sx={{paddingLeft:'15rem'}}>

            <Alert severity="success">
                Edit Student
            </Alert>

            <Grid spacing={2} container style={{ marginTop: 10 }}>
                <Grid item xs={4}>
                    <TextField fullWidth label="Id" name="id" variant="outlined" placeholder="Enter Id" onChange={handleInputChange} value={studentData.id} inputProps={{readOnly:true}} />

                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth label="Name" name="name" variant="outlined" placeholder="Enter Name" onChange={handleInputChange} value={studentData.name} />

                </Grid>
            </Grid>
            <Grid spacing={2} container style={{ marginTop: 10 }}>
                <Grid item xs={4}>
                    <TextField fullWidth label="Phone" name="phone" variant="outlined" placeholder="Enter Phone" onChange={handleInputChange} value={studentData.phone} />

                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth label="Marks" name="marks" variant="outlined" placeholder="Enter Marks" onChange={handleInputChange} value={studentData.marks} />

                </Grid>
            </Grid>
            <Grid container style={{ marginTop: 30 }}>
                <Button variant="contained" onClick={handleUpdate}>Update</Button>
            </Grid>

        </Box>
        </>
    )
}
