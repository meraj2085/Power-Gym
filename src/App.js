import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
