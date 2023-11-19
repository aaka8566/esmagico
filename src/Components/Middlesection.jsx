import { Box, Typography } from '@mui/material'
import React from 'react'

const Middlesection = () => {
  return (
    <Box sx={{padding:" 4.375rem 5rem 0rem 2.3125rem"}}>
      <Box sx={{border:"0px solid red"}}>
      <Box sx={{display:"flex",gap:"0.69rem"}}>
            <img src="./Star.png" alt="error" />
            <Typography sx={{fontWeight:"600",fontSize:"2.75rem"}}>Personal Loan Highlights</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
            <img src="./man.png" alt="error" />
        </Box>
        <Box sx={{backgroundColor:"#FCF8FF",height:"400px",borderRadius:"1.25rem",marginTop:"2rem"}}>
        <Box sx={{margin:"2.5rem 3.5rem 2.5rem 3.5rem"}}>
        <Box sx={{display:"grid",gridTemplateRows:"repeat(4,1fr)",gap:"2.5rem"}}>
        <Box >
            <Box sx={{display:"inline-flex",gap:"0.56rem"}}>
            <img src="./star1.png" alt="error" />
            <Typography sx={{fontWeight:"600",fontSize:"1rem" }}>Interest Rate</Typography>
            </Box>
            
             <Typography sx={{marginLeft:"2.06rem",fontSize:"0.9rem",fontWeight:"500"}}>Usually 10.49% p.a. onwards: some PSUs may offer lower rates</Typography>
            
        </Box>
       <Box>
       <Box sx={{display:"inline-flex",gap:"0.56rem"}}>
            <img src="./star1.png" alt="error" />
            <Typography sx={{fontWeight:"600",fontSize:"1rem" }}>Loan Amount</Typography>
          </Box>
          <Typography sx={{marginLeft:"2.06rem",fontSize:"0.9rem",fontWeight:"500"}}>Can go up to RS 40 lakh: some lenders may offer higher loan amount</Typography>
       </Box>
        <Box>
        <Box sx={{display:"inline-flex",gap:"0.56rem"}}>
            <img src="./star1.png" alt="error" />
            <Typography sx={{fontWeight:"600",fontSize:"1rem" }}>Processing Fee</Typography>
            </Box>
        <Typography sx={{marginLeft:"2.06rem",fontSize:"0.9rem",fontWeight:"500"}}>0.5% to 4% of loan amount (may vary across lenders)</Typography>
            
        
        </Box>
       <Box>
       <Box sx={{display:"inline-flex",gap:"0.56rem"}}>
            <img src="./star1.png" alt="error" />
            <Typography sx={{fontWeight:"600",fontSize:"1rem" }}>Tenure</Typography>
            </Box>
        <Typography sx={{marginLeft:"2.06rem",fontSize:"0.9rem",fontWeight:"500"}}>Up to 5 years (some lenders offer repayment period till 8 year)</Typography>
        
    
       </Box>
        </Box>
         </Box>
        </Box>
        </Box>
      </Box>
    </Box>




  )
}

export default Middlesection