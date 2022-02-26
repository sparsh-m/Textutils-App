import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const toggle = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      changeAlert("Dark mode Enabled", "success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      changeAlert("Dark mode Diabled", "success")
    }
  }


  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const changeAlert = (message, status)=>{
    setAlert({
      msg: message,
      status: status
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggle}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter text to Analyze" mode={mode} changeAlert={changeAlert}/>
      </div>
    </>
  );
}

export default App;