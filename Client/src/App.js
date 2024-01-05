import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const location = useLocation()

  return (
    <div>
      <Routes>
      <Route path = '/' element = {<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;