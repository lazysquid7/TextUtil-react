import { useEffect, useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
 import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";




function App() {

  const [mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  
 const toggleMode = ()=>{
    
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor='black'
      showAlert("Dark mode enabled","success")
      document.title = " TextUtils - Dark mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
      document.title = " TextUtils - Light mode"
    }

 }

 const showAlert = (msg,type)=>{

  setAlert({
    msg:msg,
    type:type
  })

  setTimeout(()=>{
      setAlert(null)
  },1000)
 }


  return (
    
      
    <>
   
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />  
    <TextForm  showAlert={showAlert} mode={mode}/>

    </>
  );
}

export default App;
