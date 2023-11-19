import { Box, Button, ThemeProvider, Typography,  createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import "../App.css"


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
   
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
    border: `0px solid ${theme.palette.divider}`,
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
    {...props}
      expandIcon={<AddIcon sx={{ fontSize: '0.9rem' }} />}
      
    />
  ))(({ theme }) => ({
    justifyContent:"space-between",
    display:"flex",
   
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'white'
        : 'white',
    
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(0),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
    paddingLeft:theme.spacing(5),
    borderTop: '0px solid rgba(0, 0, 0, .125)',
  }));
const Faq = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  

  return (
    
    
    <Box sx={{border:"0px solid pink",backgroundColor:"#FFF",position:"relative",padding:"3rem 5rem 0rem 5rem"}}>
        <Box sx={{flexDirection:"row"}}>
       <Box sx={{flexDirection:"row",alignItems:"center",border:"0px solid red"}}>
       <Box sx={{display:"flex",marginBottom:"3.75rem"}}>
            <img src="./qq.png" alt="error" />
<Typography sx={{fontSize:"2.75rem",fontWeight:"600"}}>FAQ’S</Typography>
        </Box>
        <Box  sx={{border:"0px solid green"}}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
       
       </Box>
       <Box sx={{backgroundColor:"rgb(249,242,254)",padding:"2.5rem 3.12rem 3.9rem 3.12rem",border:"0px solid brown",marginTop:"3.15rem"}}>
        <Typography sx={{fontSize:"1.5rem",fontWeight:"700"}}>Anything Not Clear</Typography>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"}}>
         <Typography sx={{fontSize:"1.125rem",fontWeight:"400"}}>You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...</Typography>
         <Button sx={{backgroundColor:"#8800EC",color:"white",padding: "0.5rem 1rem 0.5rem 1rem",width:"20%"}}>Contact US</Button>
        </Box>
       </Box>
       </Box>
       
    </Box>
   
  )
}

export default Faq