import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from './config';
import { Header } from './components/Header';
import { Main } from './components/Main';

import { CountryPage } from './pages/CountryPage';
import IndexPage from './pages/IndexPage';
import { Favourites } from './pages/Favourites';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES)
    .then(({data}) => setCountries(data))
  }, []);

  return (
    <>
      <Header/>
      <Main>
        <Routes>
          <Route index element={<IndexPage countries={countries} setCountries={setCountries}/>} />
          <Route path='/country/:name' element={<CountryPage/>} />
          <Route path='/favourites' element={<Favourites/>} />
        </Routes>
      </Main>
    </>
  )
}

export default App;