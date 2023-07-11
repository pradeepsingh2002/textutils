// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Alert from './Component/Alert';
import TextForm from './Component/Textform';
import About from './Component/About';
import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 

function App() {

  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
 
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
 } )
 setTimeout(()=>{
  setAlert(null);
 },2000)
}
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-success');
}
const toggleMode=(cls,bgcolor)=>{
  if(cls===null){
     if(mode==="light"){
      removeBodyClasses();
    setMode("dark");
   
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode has been Enable","success")
    
  }
  else{removeBodyClasses();
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been Enable","success")
  }
  }
  else{
    removeBodyClasses();
  document.body.classList.add("bg-"+cls);
  showAlert(`${bgcolor} mode has been Enable`,"success")
  const colorPelates=document.querySelectorAll(".funbtn");
  colorPelates.forEach((element)=>{
    element.style.backgroundColor="black";
    element.style.color="white";
  })
 }
}
 return(
  <>
 <Router>

   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
   <Alert alert={alert}/>
  <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode}/>
          </Route>
        </Switch> 

  {/* <About/> */}
  {/* <TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode}/> */}
  </div>
  </Router>
</>
  );
}

export default App;



