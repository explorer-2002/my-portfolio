import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './ui/AppLayout';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
