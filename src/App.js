import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
