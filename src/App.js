import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Home></Home>
        
      </BrowserRouter>
    </>

  );
}

export default App;
