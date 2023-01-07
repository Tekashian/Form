import React from "react";
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function InputForm() {
    return (
        <div>
            <Typography className = "login" variant="h6" component="div" sx={{ flexGrow: 1 }} >
                Sing Up
            </Typography>
            <form className="form">
                <Input className="input" placeholder="Name" />
                <Input className="input" placeholder="Surname" />
                <Input className="input" placeholder="Email@mail.com" />
                <Input className="input" placeholder="Password" type="password" />
                <Button variant="outlined" > Submit </Button>
            </form>


        </div>
    )
}

export default InputForm;