import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setDarkMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
    }
  
  return (
    <>
   <Router>
   <Navbar title=" Textutils " aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
<Route exact path="/about" element={<About/>} />
<Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}/>
  </Routes>
          
  
  </div>
   </Router>



{/*<About/>*/}



    
    </>
    
   

    
  );
}

export default App;
