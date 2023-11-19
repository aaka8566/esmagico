import React from 'react'
import { Box, TextField, Typography } from '@mui/material'


const Navbar1 = () => {
  return (
    <Box sx={{width:"100%"}}>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"1.7% 2.32% 1.7% 2.32%"}}>
        <Box sx={{width:"30%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"4.83%",
    }}>
           <Box sx={{width:"15%"}}>
           <img src="./Logo.png" alt="error" />
           </Box>
           <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8.99%", width:"83%"}}>
           <Typography sx={{fontSize:"0.875rem",fontWeight: "600",lineHeight: "1.25rem",}}>Offers</Typography>
           <Typography sx={{fontSize:"0.875rem",fontWeight: "600",lineHeight: "1.25rem",}}>Stories</Typography>
           <Typography sx={{fontSize:"0.875rem",fontWeight: "600",lineHeight: "1.25rem",textAlign:"center"}}>Tata Pay</Typography>
           <Typography sx={{fontSize:"0.875rem",fontWeight: "600",lineHeight: "1.25rem",}}>New Pass</Typography>
           </Box>
        </Box>
        <Box sx={{width:"36%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"4.83%"}}>
          <Box sx={{border:"0px solid black",heigth:"4px",borderRadius:"0.25rem",backgroundColor:"#2121211F",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"3%",padding:"3.125% 4.68% 3.125% 4.68%"}}>
          <img width={'20px'}  src="./icon.png" alt="error"/>
          <TextField sx={{backgroundColor:"none",outline:"none",border:"0px solid pink"}}  InputProps={{ disableUnderline: true }} variant='standard' id="filled-basic" placeholder="Search Tata Neu" />
          </Box>
          
<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
<Typography>121158</Typography>
<img width={'20px'}  src="./location.png" alt="error"/>
</Box>
<img width={'20px'}  src="./t1.png" alt="error"/>
<img width={'20px'}  src="./t2.png" alt="error"/>
<img width={'20px'}  src="./t3.png" alt="error"/>
         
        </Box>
    </Box>
    </Box>
  )
}

export default Navbar1