import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function ii(a,b){
  return(
    <Stack sx={{border:"0px solid red",margin:"auto"}} direction={'row'}>
      <img src={b} alt="error" />
      <Typography>{a}</Typography>

    </Stack>
  )

}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const sameall=()=>{
  return(
    <Box sx={{backgroundColor:"#FFF",borderRadius:"1.25rem",}}>
        <Box sx={{margin:"4.5rem 3.5rem 2.5rem 3.5rem"}}>
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
  )
}

const Tabscp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{position:"relative",backgroundColor:"#FFF",padding:"5.88rem 5rem 3.19rem 3rem"}}>
      <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'pink' ,border:"0px solid green",display:"flex",justifyContent:"space-between", }}>
        <Tabs sx={{ "& .MuiTab-root.Mui-selected": { border: "1px solid grey",borderBottom:"none",borderRadius:"1rem 1rem 0rem 0rem",color:"#8800EC" },}}  value={value} onChange={handleChange} aria-label="basic tabs example" style={{width:"100%"}}>
        <Tab  icon={ii('Eligibility','./t11.png')}  {...a11yProps(0)}style={{width:"25% "}} />
          <Tab icon={ii('How To Apply','./t22.png')} {...a11yProps(1)} style={{width:"25% "}}/>
          <Tab icon={ii('Documentation','./t33.png')} {...a11yProps(2)} style={{width:"25% "}}/>
          <Tab icon={ii('Fess & Charges','./t44.png')} {...a11yProps(3)} style={{width:"25% "}}/>
        </Tabs>
      </Box>
<Box sx={{border:"1px solid grey",borderRadius:"0rem 0rem 1rem 1rem"}}>
<CustomTabPanel value={value} index={0}>
   <Box sx={{display:'flex',}}>
   {sameall()}
   <img src="./tman.png" alt="error" />
   </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box sx={{display:'flex',}}>
   {sameall()}
   <img src="./tman2.png" alt="error" />
   </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box sx={{display:'flex',}}>
   {sameall()}
   <img src="./tman.png" alt="error" />
   </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Box sx={{display:'flex',}}>
   {sameall()}
   <img src="./tman2.png" alt="error" />
   </Box>
      </CustomTabPanel>
</Box>
    </Box>
    </Box>
  )
}

export default Tabscp