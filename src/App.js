import './App.css';
import { Routes, Route } from 'react-router-dom';


import DefaultLayout from './layouts/DefaultLayout';
import IndexPage from './pages/IndexPage/IndexPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ProductPage from './pages/ProductPage/ProductPage';


function App() {

  return (
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
            <Route index element={<IndexPage />} />
            <Route path={'contacts'} element={<ContactsPage />} />
            <Route path={'product'}>
              <Route path={':userId'} element={ProductPage} />
            </Route>
        </Route>
      </Routes>
  );
}

export default App;
