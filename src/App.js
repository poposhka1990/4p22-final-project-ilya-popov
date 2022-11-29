import './App.css';
import { Routes, Route } from 'react-router-dom';

import IndexPage from './pages/IndexPage/IndexPage';


function App() {

  return (
      <Routes>
        <Route index path={'/'} element={<IndexPage></IndexPage>}></Route>
      </Routes>
  );
}

export default App;
