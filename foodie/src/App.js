import {Routes, Route} from 'react-router-dom';
import Homepage from './Component/Homepage';
import Mainpage from './Component/Mainpage';


function App() {
  return (
    <>
    <div className="">
    
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    
    </div>
    </>
  );
}

export default App;
