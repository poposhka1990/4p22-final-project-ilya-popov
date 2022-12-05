import styled from "styled-components";

import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
<<<<<<< HEAD
    placeholder: 'Type a country...',
=======
    placeholder: 'Enter a country...',
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488
})`
    margin-left: 2rem;
    border: none;
    outline: none;
<<<<<<< HEAD
    color: var(--colors-text);
=======
    color: var(--color-text);
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488
    background-color: var(--colors-ui-base);
`;

export const Search = ({search, setSearch}) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
        </InputContainer>
    )
}