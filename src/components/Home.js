import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

export const Home = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Box>
            {/* //Select Box */}
            <Box sx={{marginTop:"50px",display:"flex",flexDirection:"column",alignItems:"center",}}>
            <Typography variant="h6" component="div" gutterBottom sx={{marginTop:"0px"}}>
                Welcome to Students Course Management Using dNFT
            </Typography>
            <TextField id="outlined-basic" label="Wallet Address" variant="outlined" sx={{width:"300px",marginBottom:"20px"}} />
            <TextField id="outlined-basic" label="Student Name" variant="outlined" sx={{width:"300px",marginBottom:"20px"}} />
            <TextField
                id="outlined-select-currency-native"
                select
                label="Coureses"
                value="10"
                SelectProps={{
                native: true,
                }}
                helperText="Please select your course"
                variant="outlined"
                sx={{width:"300px",marginLeft:"10px",marginBottom:"20px"}}
            >
                <option value="10">Python Bootcamp</option>
                <option value="20">Java Bootcamp</option>
                <option value="30">React JS Bootcamp</option>
            </TextField>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Duration"
                value="10"
                SelectProps={{
                native: true,
                }}
                helperText="Please select Course Duration"
                variant="outlined"
                sx={{width:"300px",marginLeft:"10px",marginBottom:"20px"}}
            >
                <option value="10">6 Months</option>
                <option value="20">12 Months</option>
                <option value="30">3 Months</option>
            </TextField>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Phase"
                value="10"
                SelectProps={{
                native: true,
                }}
                helperText="Please select Course Phase"
                variant="outlined"
                sx={{width:"300px",marginLeft:"10px",marginBottom:"20px"}}
            >
                <option value="10">1</option>
                <option value="20">2</option>
                <option value="30">3</option>
                <option value="40">4</option>
                <option value="50">5</option>
                <option value="60">6</option>
                <option value="70">7</option>
                <option value="80">8</option>
                <option value="90">9</option>
                <option value="100">10</option>
            </TextField>
            {/* <TextField id="outlined-basic" label="Wallet Address" variant="outlined" sx={{width:"300px"}} /> */}
            <Button variant="contained" sx={{marginLeft:"10px" ,width:"100px",height:"50px" , marginTop:"50px"}}>Mint</Button>
            {/* <Button variant="contained" sx={{marginLeft:"10px"}}>Connect</Button>
            <Button variant="contained" sx={{marginLeft:"10px"}}>Mint</Button> */}
        </Box>

        </Box>
        {/* <Box sx={{marginTop:"30px"}}>
            <TextField id="outlined-basic" label="Wallet Address" variant="outlined" sx={{width:"300px"}} />
            <Button variant="contained" sx={{marginLeft:"10px" ,width:"100px",height:"50px"}}>Mint</Button>
        </Box> */}
    </Box>
    </>
  )
}
