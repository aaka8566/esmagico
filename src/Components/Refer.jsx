import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Refer = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",border:"0px solid red",backgroundColor:"white",position:"relative",width:"100%",height:"31rem",paddingTop:"2rem"}}>
        <Box sx={{border:"0px solid green",display:"grid",gap:"1rem"}}>
<Typography sx={{fontSize:"2.75rem",fontWeight:"600"}}>Refer & Earn Now</Typography>
<Typography sx={{fontSize:"1.3rem",fontWeight:"400"}}>Get a ₹500 Big Basket gift card</Typography>
<Button variant='contained' sx={{padding:"0.5rem 2rem 0.5rem 2rem",width:"60%",backgroundColor:"#8800EC"}}>Refer And Earn</Button>
<Typography sx={{fontSize:"0.7rem",fontWeight:"400"}}>Terms and Conditions apply</Typography>
        </Box>
    <Box>
        <Box sx={{backgroundColor:"#FFF",borderRadius:"26rem",width:"26rem",height:"26rem",position:"relative",top:"600px",left:"100px",boxShadow: "0px 0px 60px 0px #DCF3FF",}}></Box>
        <Box sx={{border: "1px dashed #CECECF",borderRadius:"40rem",width:"40rem",height:"40rem",position:"relative",top:"50px",left:"10px",opacity:"0.8"}}></Box>
        <img style={{position:"relative",top:"-450px",left:"60px",border:"0px solid green",width:"85%"}} src="./young.png" alt="error" />
        {/* <img style={{position:"relative",top:"-390px",left:"110px",border:"1px solid green",width:"70%"}} src="./young.png" alt="error" /> */}
    </Box>
    </Box>
  )
}

export default Refer