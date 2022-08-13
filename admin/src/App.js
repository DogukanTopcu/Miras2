import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} >
          <Route />
        </Route>
      </Routes>      
    </div>
  );
}

export default App;
