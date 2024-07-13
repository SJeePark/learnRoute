import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutpage from './page/Aboutpage';
import Detailpage from './page/Detailpage';
import Homepage from './page/Homepage';
import Productpage from './page/Productpage';


function App() {
  return (
    <div className="App">
      <Routes>    {/*Routes : 각각의 페이지를 스위치하는 역할*/}
        <Route path= "/" element={<Homepage />}></Route>   {/*path: 각페이지의 주소, element: 주소에 보여주고 싶은 페이지*/}
        <Route path= "/about" element={<Aboutpage />}></Route>  
        <Route path='/products' element={<Productpage />}></Route>
        <Route path='/products/:id' element={<Detailpage />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
