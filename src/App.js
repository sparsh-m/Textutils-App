import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

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
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggle}/>
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter text to Analyze" mode={mode} changeAlert={changeAlert}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;