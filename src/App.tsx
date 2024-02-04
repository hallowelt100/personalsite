import React from 'react';
import logo from './logo.svg';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Avatar, Paper } from '@mui/material';


function Header() {
  return (
      <div className="header">
        <a href='#home' className='header-button'>Home</a>
        <a href='#contact' className='header-button'>Contact</a>
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
          src="https://avatars.githubusercontent.com/u/62601323?v=4"
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
  return (
    <div className='main'>
      <div className='about-projects' id='slide'>
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
