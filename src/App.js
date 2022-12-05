// import { useEffect, useState } from 'react';
import './App.css';
// import Button from './components/Button/Button';
// import Input from './components/Input/Input';
// import Pagination from './components/Pagination/Pagination';

import { Routes, Route } from 'react-router-dom';

import IndexPage from './assets/pages/IndexPage';
import ContactsPage from './assets/pages/ContactsPage';
import DefaultLayout from './layouts/DefaultLayout';
import { CountryPage } from './assets/pages/CountryPage';
import FavouritesPage from './assets/pages/FavouritesPage';

function App() {

  return (
      <Routes>
        <Route path={'/'} element={<DefaultLayout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path={'contacts'} element={<ContactsPage/>}/>
          <Route path={'name'}>
            <Route path={':userId'} element={<CountryPage/>} />
          </Route>
          <Route path={'favourites'} element={<FavouritesPage />} />
        </Route>
      </Routes>
  )
}



//     <div className="Container mt-5">
//       <div className='App-container'>
//         <h1 className="text-primary">All {countries.length} countries of the World</h1>
//         <h2>{ `There are ${lastCountryIndex - firstCountryIndex} countries listed` }</h2>
//         <IndexPage />
//         {/* <CountryCard countries={ currentCountry } loading={ loading }/> */}
//         <Pagination 
//         countriesPerPage={countriesPerPage} 
//         totalCountries={ countries.length }
//         paginate={paginate} 
//         />
//       </div>
//     </div>
//   );
// }

export default App;
