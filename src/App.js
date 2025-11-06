import './App.css';
import Add_data from './components/Add_Data';
import Button from './components/Button';
import Chat_AI from './components/Chat_AI';
import DisplayData from './components/DisplayData';
import Menu from './components/Menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <div style={{width: "100%", height: "95vh", margin: "1% auto", display: "flex", 
          justifyContent: "space-between"}}>
            <div style={{width: "20%", height: "100%", overflow: "auto", background: "#E5E7EB", padding: "5px"}}>
                <Menu/>
            </div>
            <div style={{width: "79%", height: "100%", overflow: "auto", background: "#E5E7EB", padding: "5px"}}>
              <Routes>
                <Route path='/' element={<Chat_AI/>} />
                <Route path='/displayData' element={<DisplayData/>} />
              </Routes>
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
