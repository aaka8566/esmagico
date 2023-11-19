import { Box, Typography } from '@mui/material'
import React from 'react'

const Banks = () => {
  return (
    <Box sx={{padding:"4.5rem 5rem 4.5625rem 5rem",backgroundColor:"#F8F9FA"}}>
        <Box sx={{display:"flex",gap:"1.75rem",justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{width:"25%"}}>
                <Typography sx={{display:"inline-block",fontSize:"1.8rem",fontWeight:"600"}}>Our Partners</Typography>
            </Box>
            <Box sx={{width:"65%",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"3rem"}}>
             <Box>
                <img src="./b1.png" alt="error" />
                <Typography sx={{fontSize:"1rem",fontWeight:"600"}}>HDFC Bank</Typography>
             </Box>
             <Box>
                <Box><img src="./b2.png" alt="error" /></Box>
                <Typography sx={{fontSize:"1rem",fontWeight:"600"}}>ICICI Bank</Typography>
             </Box>
             <Box>
                <img src="./b3.png" alt="error" />
                <Typography sx={{fontSize:"1rem",fontWeight:"600"}}>ICICI Bank</Typography>
             </Box>
             <Box>
                <img src="./b4.png" alt="error" />
                <Typography sx={{fontSize:"1rem",fontWeight:"600"}}>Bank of Baroda</Typography>
             </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Banks