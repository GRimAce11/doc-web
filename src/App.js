
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar  from './components/Navbar';
import Research from './components/Research';
import Publication from './components/Publication';
import News from './components/News';
import Upload from './components/Upload';
import Contactus from './components/Contactus';

function App() {
  return (
    <>

      {/* <Home /> */}
      <BrowserRouter>
<div>
<Navbar />
</div>
        
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/research" element={<Research/>}/>
            <Route exact path="/publications" element={<Publication/>}/>
            <Route exact path="/news" element={<News/>}/>
            <Route exact path="/upload" element={<Upload/>}/>
            <Route exact path="/contactus" element={<Contactus/>}/> 
            
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
