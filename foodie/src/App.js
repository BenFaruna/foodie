import {Routes, Route} from 'react-router-dom';
import Landingpage from './Component/Landingpage';
import Homepage from './Component/Homepage';
import Signup from './Component/Signup';
import Login from './Component/Login';


function App() {
  return (
    <>
    <div className="">
    
      <Routes>
      <Route path="/landingpage" element={<Landingpage/>} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    
    </div>
    </>
  );
}

export default App;
