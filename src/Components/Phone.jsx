import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Phone = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <Box sx={{margin:"2.4rem 0.2rem 2.74rem 2.4rem"}}>
        <Box >
<img src="./mob.png" alt="error" />
        </Box>

        </Box>
     <Box sx={{display:"grid",gap:"3.19rem"}}>
        <Box sx={{display:"flex",alignItems:"center",gap:"0.69rem"}}>
            <img src="./Stary.png" alt="error" />
            <Typography sx={{fontWeight:"600",fontSize:"2.75rem" }}>Lightning Fast Process</Typography>
        </Box>
        <img src="./points.png" alt="error" />
        <Button sx={{width:"40%",margin:"auto",backgroundColor:"#8800EC"}} variant='contained'>Apply Now</Button>
     </Box>
    </Box>
  )
}

export default Phone