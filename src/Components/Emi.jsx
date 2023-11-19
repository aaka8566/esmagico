import styled from '@emotion/styled';
import { Box, Button, Slider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
const PrettoSlider = styled(Slider)({
  color: '#8800EC',
  height: 8,
  
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#FF0096',
    border: '0px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'green',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const Emi = () => {
  return (
    <Stack spacing={2.5} sx={{border:"0px solid red",position:"relative",backgroundColor:"white",padding:"4.62rem 5rem 4.5rem 5rem"}}>
<Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
<img src="./star2.png" alt="error" />
<Typography sx={{fontSize:"2.75rem",fontWeight:"600"}}>EMI CALCULATOR</Typography>
</Box>
<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"3rem",border:"0px solid green",}}>
<Stack direction={'column'} spacing={2} sx={{width:"30%",border:"0px solid brown",height:"29.4rem",padding:"1rem 1rem 1rem 1rem",boxShadow:"0px 5px 44px -5px rgba(0, 0, 0, 0.08)",borderRadius:"0.875rem"}}>
  <Stack direction={'column'} spacing={2}>
<Typography sx={{fontSize:"1.25rem",fontWeight:"500",color:"rgba(42, 42, 42, 0.50)"}}>Loan Amount</Typography>
<Box  sx={{border:"1px solid #E3E7EF",borderRadius:"0rem 0.4375rem 0.4375rem 0rem",display:"grid",gridTemplateColumns:"repeat(2,20% 80%)",gap:"0.62rem",alignItems:"center"}} >
  <Box sx={{backgroundColor:"#E3E7EF",height:"100%",borderRadius:"0.4375rem 0rem 0rem 0.4375rem",}}><Typography sx={{fontSize:"1.5rem",fontWeight:"500",textAlign:"center",padding:"0.56rem 0rem 0.56rem 0rem"}}>₹</Typography></Box>
 <Box><TextField id="standard-basic" placeholder='EMI AMOUNT' variant="standard" InputProps={{ disableUnderline: true }}/></Box>
 
</Box>
<PrettoSlider valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}/>
  </Stack>

  <Stack direction={'column'} spacing={2}>
<Typography sx={{fontSize:"1.25rem",fontWeight:"500",color:"rgba(42, 42, 42, 0.50)"}}>Interest Rate (%)</Typography>
<Box  sx={{border:"1px solid #E3E7EF",borderRadius:"0rem 0.4375rem 0.4375rem 0rem",display:"grid",gridTemplateColumns:"repeat(2,20% 80%)",gap:"0.62rem",alignItems:"center"}} >
  <Box sx={{backgroundColor:"#E3E7EF",height:"100%",borderRadius:"0.4375rem 0rem 0rem 0.4375rem",}}><Typography sx={{fontSize:"1.5rem",fontWeight:"500",textAlign:"center",padding:"0.56rem 0rem 0.56rem 0rem"}}>%</Typography></Box>
 <Box><TextField id="standard-basic" placeholder='Percentage' variant="standard" InputProps={{ disableUnderline: true }}/></Box>
 
</Box>
<PrettoSlider valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}/>
  </Stack>

  <Stack direction={'column'} spacing={2}>
<Typography sx={{fontSize:"1.25rem",fontWeight:"500",color:"rgba(42, 42, 42, 0.50)"}}>Loan Amount</Typography>
<Box  sx={{border:"1px solid #E3E7EF",borderRadius:"0rem 0.4375rem 0.4375rem 0rem",display:"grid",gridTemplateColumns:"repeat(2,auto)",gap:"0.62rem",alignItems:"center"}} >
  <Box sx={{backgroundColor:"#E3E7EF",height:"100%",borderRadius:"0.4375rem 0rem 0rem 0.4375rem",}}><Typography sx={{fontSize:"1.5rem",fontWeight:"500",textAlign:"center",padding:"0.56rem 0.56rem 0.56rem 0.56rem"}}>Months</Typography></Box>
 <Box><TextField id="standard-basic" placeholder='MONTHS' variant="standard" InputProps={{ disableUnderline: true }}/></Box>
 
</Box>
<PrettoSlider valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}/>
  </Stack>
</Stack>
<Stack direction={'row'} justifyContent={'space-between'} spacing={2} sx={{width:"70%",border:"0px solid green",marginTop:"0%",height:"29.4rem",padding:"1rem 3.75rem 1rem 3rem",borderRadius:"0.875rem",backgroundColor:"#FFF",boxShadow:"0px 5px 44px -5px rgba(0, 0, 0, 0.08)"}}>
<Stack direction={'column'} spacing={5} sx={{width:"50%",border:"0px solid green",display:"grid",alignContent:'center'}}>
  <Box sx={{border:"0px solid pink",display:"grid",justifyContent:'center'}}><img src="./elp.png" alt="error" /></Box>
  <Stack direction={'row'} spacing={2}>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
  <Stack direction={'row'}><img src="./rec.png" alt="error" /> <Typography>Principal Amount</Typography></Stack>
    <Typography>₹ 3,00,000</Typography>
  </Box>
  </Stack>
  <Stack direction={'row'} spacing={2}>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
   <Stack direction={'row'}><img src="./rec1.png" alt="error" /> <Typography>Interest Amount</Typography></Stack>
    <Typography>₹ 59,454</Typography>
  </Box>
  </Stack>
  <Stack direction={'row'} spacing={2}>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
    <Typography>Toatl Principal Amount</Typography>
    <Typography>₹ 3,59,454</Typography>
  </Box>
  </Stack>
</Stack>



<Stack direction={'column'}  spacing={2} sx={{width:"40%",gridTemplateRows:'repeat(2,60% 20%)',height:"80%",border:"0px solid green",paddingTop:"3rem",}}>
  <Box sx={{height:"60%",border:"0px solid green",paddingTop:"20%",borderRadius:"1rem",backgroundColor:"#FCF8FF"}}>
    <Typography sx={{textAlign:"center",fontSize:"1.275rem",fontWeight:"600"}}>Equated Monthly Instalments (EMI)</Typography>
    <Typography sx={{textAlign:"center",fontSize:"2.5rem",fontWeight:"700"}}>₹14,977</Typography>
  </Box>
  <Button variant='contained' sx={{width:"100%",backgroundColor:"#8800EC",padding:"0.5rem 1rem"}}>Apply Now</Button>
</Stack>
</Stack>
</Box>
    </Stack>
  )
}

export default Emi