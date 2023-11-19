import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Intro = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"0px solid blue"}}>
        
<Box sx={{marginLeft:"3.55% ",marginRight:"5.5%",border:"0px solid green",width:"43.7%",}}>
    <Box sx={{}}>
    <Typography  sx={{fontSize:"3rem",lineHeight:"6rem",fontWeight:"700"}}>Turn Your Dreams Into Reality
      With <span style={{color:"rgb(255,0,150)"}}>Personal Loans</span> 
     </Typography>
    </Box>
    <Box sx={{display:"grid",justifyContent:"space-between",alignItems:"center",gridTemplateColumns:"repeat(2,1fr)",gridTemplateRows:"repeat(2,1fr)",gap:"2rem"}}>
   <Box sx={{display:"flex",gap:"1rem"}}>
<img src="./f4.png" alt="error" />
<Box >
    <Typography sx={{fontWeight:"700"}}>Avail Zero</Typography>
    <Typography>Processing Fee</Typography>
</Box>
   </Box>
   <Box sx={{display:"flex",gap:"1rem"}}>
<img src="./f3.png" alt="error" />
<Box>
    <Typography sx={{fontWeight:"700"}}>Quick </Typography>
    <Typography>Personal Loan</Typography>
</Box>
   </Box>
   <Box sx={{display:"flex",gap:"1rem"}}>
<img src="./f2.png" alt="error" />
<Box>
    <Typography sx={{fontWeight:"700"}}>Lowest</Typography>
    <Typography>Interest Rates</Typography>
</Box>
   </Box>
   <Box sx={{display:"flex",gap:"1rem"}}>
<img src="./f1.png" alt="error" />
<Box>
    <Typography sx={{fontWeight:"700"}}>Minimal </Typography>
    <Typography>Documentation</Typography>
</Box>
   </Box>
    </Box>
    <Box sx={{marginTop:"2rem",marginBottom:"2rem"}}>
        <Button variant='contained' sx={{color:"white" ,backgroundColor:"rgb(136,0,236)"}}>Apply Now</Button>
    </Box>
</Box>

<Box sx={{width:"49.4%",marginRight:"2rem"}} style={{flex:1}}>
    <img width={"80%"} src="./father.png" alt="error" />
</Box>
    </Box>
  )
}

export default Intro