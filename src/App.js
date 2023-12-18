import { Routes,Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './page/Home';
import Basket from './page/Basket';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/basket' element={<Basket/>}/>
    </Routes>
    </div>
  );
}

export default App;
