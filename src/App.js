import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutpage from './page/Aboutpage';
import Detailpage from './page/Detailpage';
import Homepage from './page/Homepage';
import Loginpage from './page/Loginpage';
import Productpage from './page/Productpage';
import Userpage from './page/Userpage';

function App() {
  const [authenticate, setAuthenticate] = useState(false)   //true: userpage, false: loginpage
  const PrivateRoute = ()=>{  //첫글자 시작 대문자 -> 함수X, 컴포넌트 O
    return authenticate === true?<Userpage />:<Navigate to='/login' />

  }

  return (
    <div className="App">
      <Routes>    {/*Routes : 각각의 페이지를 스위치하는 역할*/}
        <Route path= "/" element={<Homepage />}></Route>   {/*path: 각페이지의 주소, element: 주소에 보여주고 싶은 페이지*/}
        <Route path= "/about" element={<Aboutpage />}></Route>  
        <Route path='/products' element={<Productpage />}></Route>
        <Route path='/products/:id' element={<Detailpage />}></Route>
        <Route page='/login' element={<Loginpage />}></Route>
        <Route page='/user' element={<PrivateRoute />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
