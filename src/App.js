// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './componentes/About';
import Navbar from './componentes/Navbar';
import Textform from './componentes/Textform';
import Alert from './componentes/Alert';


//  java script vaperaychi asel tar {}   braket vaparychee
    // <>=== </>  ========= this is useto html vaperne
  //// propes=========== manje imformation barne  ani te js varibal {}  madya vaparayche  propes.name vaperne
    ///  state========  avasta  


// let name="sham";

function App() {
  useState[mode,setmode]=useState('light');//   whether dark ode inbale or not
  useState[Alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
setAlert({
  msg:message,
  type:type
}) 
}
const togglemode=()=>{
  setAlert("dark mode has been enabled")
}

  return (
    <>
     
 
    
<Navbar/>
{/* <Alert Alert={Alert}/> */}
<Textform heading="Enter your text"/>
{/* <About/> */}

    

{/* 
<Textform heading="THIS IS YOUR FORM"/>  */}
 {/* <Navbar/>  ==///  default print hoil  */}

 
    </>
  
);
}

export default App;
