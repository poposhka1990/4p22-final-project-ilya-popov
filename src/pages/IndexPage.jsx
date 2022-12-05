import { useState, useEffect } from 'react';
import { Main } from '../components/Main';
import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';


function IndexPage() {
  const [countries, setCountries] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
    .then(({data}) => setCountries(data))
  }, []);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
        data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
        data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase())
    );
}

    setCountries(data);
};

  return (
    <>
      <Main>
        <Controls onSearch={handleSearch}/>
        <List>
          {
            countries.map(c => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Capital',
                    description: c.capital
                    },
                  {
                  title: 'Population',
                  description: c.population.toLocaleString()
                  },
                  {
                  title: 'Region',
                  description: c.region
                  },
                ],
              };

              return (
                <Card key={c.name} {...countryInfo} />
              )
            })}
        </List>
      </Main>
    </>
  )
}

export default IndexPage;