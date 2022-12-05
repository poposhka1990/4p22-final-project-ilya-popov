import { useState, useEffect } from 'react';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import styled from 'styled-components';

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
        
        // eslint-disable-next-line
    }, [search, region]);
    
    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
<<<<<<< HEAD
            <CustomSelect options={options}
=======
            <CustomSelect 
                options={options} 
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488
                placeholder="Filter by Region" 
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    )
}