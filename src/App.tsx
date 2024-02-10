import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Avatar, Paper, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo } from 'react';

import avatar from './img/avatar.jpeg';




// function Header() {
//   return (
//       <div className="header">
//         <a href='#home' className='header-button'>Home</a>
//         <a href='#contact' className='header-button'>Contact</a>
//       </div>
//   )
// }

function Top() {
  return (
    <div className='top'>
      <Paper elevation={12} style={{backgroundImage: 'url("./img/background.jpg")', height: '100%', borderRadius: '15px'}}>
        <div className='top-content'>
          <h1>Welcome!</h1>
          <h2>To my personal website!</h2>
        </div>
      </Paper>
    </div>
  )
}

function About() {
  return (
    <Paper elevation={12} style={{borderRadius: '15px', width: '30%'}}>

      <h1 style={{padding: '20px', paddingTop: '20px'}}>About me</h1>

      <div className='about'>

      <div className='about-avatar'>
        <Avatar
          alt="hallowelt100"
          src={avatar}
          sx={{ width: 200, height: 200, boxShadow: '0px 0px 20px' }}
        />
      </div>

      <div className='about-list'>
        <ul>
        <li>20 years old</li>
            <li>From Germany</li>
            <li>Currently Computer Science student at the University of Applied Sciences Karlsruhe (DHBW Karlsruhe)</li>
            <li>Playing around with Java, Python and JavaScript/TypeScript</li> 
            <li>Internet Name: hallowelt100 (HW100)</li>
        </ul>
      </div>
      </div>
      </Paper>
  )
}

function Projects() {
  return (
    <Paper elevation={12} style={{borderRadius: '15px', width: '30%'}}>

      <h1 style={{padding: '20px', paddingTop: '20px'}}>Projects</h1>

      <div className='projects'>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore commodi facilis sapiente voluptate quisquam suscipit, minima, soluta harum dolor blanditiis! Tempora a officiis quisquam nostrum ab magnam blanditiis sint!</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore commodi facilis sapiente voluptate quisquam suscipit, minima, soluta harum dolor blanditiis! Tempora a officiis quisquam nostrum ab magnam blanditiis sint!</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore commodi facilis sapiente voluptate quisquam suscipit, minima, soluta harum dolor blanditiis! Tempora a officiis quisquam nostrum ab magnam blanditiis sint!</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore commodi facilis sapiente voluptate quisquam suscipit, minima, soluta harum dolor blanditiis! Tempora a officiis quisquam nostrum ab magnam blanditiis sint!</li>
        </ul>
      </div>
      </Paper>
  )
}

function App() {

const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

const theme = useMemo(
  () =>
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    }),
    [prefersDarkMode],
);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='main' id='slide-top'>
        <Top />
        <div className='about-projects' id='slide'>
          <About />
          <Projects />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
