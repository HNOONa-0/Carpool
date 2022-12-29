import { Button, FormControl, FormHelperText, Input, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { BiImageAdd } from 'react-icons/bi';
import { FaCar } from 'react-icons/fa';

import React from "react";
import AdminForm from "../Components/AdminForm";
let carForm=["car name","model","brand","fule","price","rating","stock"];
let updateForm=["car id","car name","model","brand","fule","price","rating","stock"];
let deleteForm=["car id"];

const Admin=({AdminData,userData})=>{
    // use map Admin data to newcard
    // const []
    return(
        <Container maxWidth="sm">
            <AdminForm form={carForm} disc={"Add car"}/>
            <AdminForm form={updateForm} disc={"Update car"}/>
            <AdminForm form={deleteForm} disc={"Delete car"} del={true}/>
        </Container>
    )
}
export default Admin;