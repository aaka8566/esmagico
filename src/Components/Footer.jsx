import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"black",padding:"3.12rem 5rem 3.12rem 5rem",marginTop:"3rem"}}>
        <Box sx={{flexDirection:"row"}}>
<img src="./loga.png" alt="error" />
<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"0.5rem ",marginTop:"2rem"}}>
<img src="./s1.png" alt="error" />
<img src="./s2.png" alt="error" />
<img src="./s3.png" alt="error" />
<img src="./s4.png" alt="error" />
</Box>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"5rem"}}>
            <Stack direction="column" spacing={2}>
<Typography sx={{fontSize:"1.125rem",fontWeight:"600",color:"white"}}>Help & Support</Typography>
<Typography sx={{fontSize:"0.875rem",fontWeight:"400",color:"white"}}>Terms & Service</Typography> 
<Typography sx={{fontSize:"0.875rem",fontWeight:"400",color:"white"}}>Privacy Policy</Typography> 
<Typography sx={{fontSize:"0.875rem",fontWeight:"400",color:"white"}}>FAQ</Typography> 

            </Stack>
            <Stack direction="column" spacing={2}>
<Typography sx={{fontSize:"1.125rem",fontWeight:"600",color:"white"}}>Customer care</Typography> 
<Typography sx={{fontSize:"0.875rem",fontWeight:"400",color:"white"}}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Typography> 
<Typography sx={{fontSize:"0.875rem",fontWeight:"400",color:"white"}}>987654321</Typography> 
<Typography sx={{fontSize:"0.875rem",fontWeight:"400",color:"white"}}>Tataneu Email ID</Typography> 
            </Stack>
        </Box>
    </Box>
  )
}

export default Footer