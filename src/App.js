import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Routes,Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/sign" element={<Signup></Signup>}></Route>
        <Route path="/dash" element={<Dashboard></Dashboard>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
