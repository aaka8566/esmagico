import { Box, Typography } from '@mui/material'
import React from 'react'

const Customer = () => {
  return (
    <Box sx={{backgroundColor:"#F8F9FA",height:"29rem"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem",paddingTop:"3rem"}}>
            <img src="./hands.png" alt="error" />
            <Typography sx={{fontSize:"2.75rem",fontWeight:"600"}}>What Our Customer Says</Typography>
        </Box>
        <Box sx={{display:"flex",border:"0px solid black"}}>
        <Box>
        
        <Box sx={{backgroundColor:"#FFF",borderRadius:"20rem",width:"20rem",height:"20rem",position:"relative",top:"200px",left:"100px"}}></Box>
        <Box sx={{boxShadow: "0px 0px 60px 0px #DCF3FF",backgroundColor:"#FFF",borderRadius:"28rem",width:"28rem",height:"28rem",position:"relative",top:"-200px",left:"50px",opacity:"0.5"}}></Box>
        <img style={{position:"relative",top:"-700px",left:"100px",border:"0px solid green",width:"70%"}} src="./man1.png" alt="error" />
    </Box>
    <Box sx={{marginTop:"6rem",marginLeft:"5rem",marginRight:"5rem"}}>
   <Typography sx={{fontSize:"1.25rem",fontWeight:"600"}}>Sunil Gupta</Typography>
   <Typography sx={{fontSize:"1rem",fontWeight:"600"}}>Chartered Accountant</Typography>
   <Typography sx={{fontSize:"0.8rem",fontWeight:"400",lineHeight:"1.4rem",mt:"1rem"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortor, et convallis libero vehicula ut. or, et convallis libero vehicula ut. </Typography> 
    </Box>
        </Box>
    </Box>
  )
}

export default Customer