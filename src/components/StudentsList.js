import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, TextField, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'walletaddress', headerName: 'Wallet Address', width: 130 },
  {
    field: 'phase',
    headerName: 'Phase',
    type: 'number',
    width: 90,
  },{
    field: 'duration',
    headerName: 'Duration',
    width: 180,

  },
    {
    field: 'course',
    headerName: 'Course',
    width: 180,
    }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', phase: 5,course:"Python Bootcamp",duration:"6 Months" ,walletaddress:"0x1234567890"},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', phase: 2 ,course:"Python Bootcamp",duration:"6 Months",walletaddress:"0x1234567890"},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', phase: 5 ,course:"Python Bootcamp",duration:"6 Months",walletaddress:"0x1234567890"},
  { id: 4, lastName: 'Stark', firstName: 'Arya', phase: 16,course:"Python Bootcamp",duration:"6 Months",walletaddress:"0x1234567890" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', phase:5,course:"Python Bootcamp",duration:"6 Months",walletaddress:"0x1234567890" },
  { id: 6, lastName: 'Melisandre', firstName: "Amit", phase: 15 ,course:"Python Bootcamp",duration:"6 Months",walletaddress:"0x1234567890"},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', phase: 4,course:"Python Bootcamp" ,duration:"6 Months",walletaddress:"0x1234567890"},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', phase: 6 ,course:"Python Bootcamp",   duration:"6 Months",walletaddress:"0x1234567890"},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', phase: 5 ,course:"Python Bootcamp",  duration:"6 Months",walletaddress:"0x1234567890"},
];

export default function DataTable() {
  return (
    <Box sx={{height:"80vh",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",}}>
    
    <Box  sx={{height:"80vh",width:"70%",marginTop:"100px"}}>
            
        <DataGrid
            rows={rows}
            columns={columns}
            pphaseSize={5}
            rowsPerPphaseOptions={[5]}
            checkboxSelection
        />
    </Box>
    <Box sx={{height:"80vh",width:"100%",display:"flex",alignItems:"center",}}> 
        <Box sx={{marginTop:"50px",display:"flex",flexDirection:"column",alignItems:"center",marginLeft:"10%"}}>
            <Typography variant="h6" component="div" gutterBottom sx={{marginTop:"0px"}}>
                Welcome to Students Course Management Using dNFT
            </Typography>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Level"
                value="10"
                SelectProps={{
                native: true,
                }}
                helperText="Please select your course"
                variant="outlined"
                sx={{width:"300px",marginLeft:"10px",marginBottom:"20px"}}
            >
                <option value="10">1</option>
                <option value="20">2</option>
                <option value="30">3</option>
            </TextField>
            <TextField
                id="outlined-select-currency-native"
                select
                label="Achievement"
                value="10"
                SelectProps={{
                native: true,
                }}
                helperText="Please select Course Duration"
                variant="outlined"
                sx={{width:"300px",marginLeft:"10px",marginBottom:"20px"}}
            >
                <option value="10">1</option>
                <option value="20">2</option>
                <option value="30">3</option>
                <option value="40">4</option>
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
            <Button variant="contained" sx={{marginLeft:"10px" ,width:"100px",height:"50px" , marginTop:"50px"}}>Update</Button>
            {/* <Button variant="contained" sx={{marginLeft:"10px"}}>Connect</Button>
            <Button variant="contained" sx={{marginLeft:"10px"}}>Mint</Button> */}
        </Box>
    </Box>

    </Box>
  );
}
