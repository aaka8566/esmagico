import { Tabs, ThemeProvider, createTheme } from "@mui/material";
import Navbar1 from "./Components/Navbar1"
import Intro from "./Components/Intro";
import Middlesection from "./Components/Middlesection";
import Banks from "./Components/Banks";
import Phone from "./Components/Phone";
import Customer from "./Components/Customer";
import Refer from "./Components/Refer";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Emi from "./Components/Emi";
import Tabscp from "./Components/Tabscp";
import "./App.css"
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Montserrat', "sans-serif"].join(","),
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar1/>
    <Intro/>
    <Middlesection/>
    <Banks/>
    <Phone/>
    <Customer/>
    <Tabscp/>
    <Emi/>
    <Refer/>
    <Faq/>
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App
