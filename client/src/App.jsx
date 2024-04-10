import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicLayout } from './layout/BasicLayout';
import { Vaikams } from './pages/vaikams/Vaikams';
import { Namams} from './pages/namams/Namams';
import { PageHome } from './pages/home/PageHome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={BasicLayout}>
          <Route index path='/' element={<PageHome />} />
          <Route path='/vaikams' element={<Vaikams />} />
          <Route path='/namams' element={<Namams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
