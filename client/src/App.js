
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Layout from './Layout';
import Advisor from './pages/AdvisorDetail/Advisor';
import Home from './pages/Home/Home';
import Init from './pages/Init/Init';

import data from "./data";
import Save from './pages/Save/Save';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginLocally } from './actions/Users';

function App() {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    dispatch(loginLocally(localUser));
  }, []);
  
  var user = useSelector((state) => state.user);
  console.log(user);
  
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (user.length == 0 && !user._id && !localUser) {
      if (location.pathname === "/home" || location.pathname === "/saves") {
        navigation("/");
      }
    }
    else if (user._id && location.pathname === "/login") {
      navigation("/home");
    }


  }, [user]);



  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Init />} />
        <Route path='/login' element={<Init />} />
        <Route path='/forget-my-password' element={<Init />} />
        <Route path='/register/user' element={<Init />} />
        {/* <Route path='/register/user/:user' element={<Init />} /> */}
        <Route path='/register/user/feed' element={<Init />} />
        <Route path='/register/advisor' element={<Init />} />
        {/* <Route path='/register/advisor/:user' element={<Init />} /> */}
        <Route path='/register/advisor/feed' element={<Init />} />
        <Route path='/new-password' element={<Init />} />
        <Route path='/new-password/:userLogin' element={<Init />} />

        <Route path='/home' element={<Home />} />
        <Route path='/home/:userId' element={<Home />} />
        <Route path='/home/advisor/:advisorId' element={<Home />} />

        <Route path='/advisor' element={<Advisor advisor={data[1]} />} />
        <Route path='/advisor/:advisor' element={<Advisor advisor={data[1]} />} />

        <Route path='/saves' element={<Save />} />
        
      </Route>
    </Routes>
  );
}

export default App;
