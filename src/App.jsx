import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Resume from './components/Resume';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;