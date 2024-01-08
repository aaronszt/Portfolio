import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HomeTrue from './components/HomeTrue/HomeTrue';
import Proyects from './components/Proyects/Proyects';

function App() {
  const location = useLocation()

  return (
    <div>
      <Routes>
        <Route path = '/' element = {<HomeTrue/>}/>
        <Route path='/proyects' element = {<Proyects/>}/>
      </Routes>
    </div>
  );
}
export default App;