
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
    console.log(localUser);
    dispatch(loginLocally(localUser));
  }, []);
  
  const user = useSelector((state) => state.user);
  console.log(user);

  console.log(location.pathname);
  // console.log(location.search);
  console.log(location.search ? location.search : "Nope");
  console.log(`${location.pathname}${location.search ? location.search : ""}`);
  
  useEffect(() => {
    if (user._id) {
      // navigation(`${location.pathname}${location.search ? location.search : ""}`);
      navigation("/home");
    } else {
      navigation("/");
    }
  }, [user]);




  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Init />} />
        <Route path='/login' element={<Init />} />
        <Route path='/forget-my-password' element={<Init />} />
        <Route path='/register/user' element={<Init />} />
        <Route path='/register/user/:user' element={<Init />} />
        <Route path='/register/advisor' element={<Init />} />
        <Route path='/register/advisor/:user' element={<Init />} />
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