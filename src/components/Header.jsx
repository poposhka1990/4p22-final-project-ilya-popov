import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { Container } from "./Container";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    text-transform: capitalize;
`;

const Favourites = styled(Link).attrs({
    to: '/favourites',
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
`;

export const Header = () => {
    const [ theme, setTheme ] = useState('light');
    // const count = useSelector((state) => state.counter.value);

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
    <HeaderEl>
        <Container>
            <Wrapper>
                <Title>Countries of the World</Title>
                <ModeSwitcher onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <IoMoonOutline size="14px"/>
                    ) : (
                        <IoMoon size="14px"/> 
                    )} {' '}
                    <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                </ModeSwitcher>
                <Favourites>
                    {/* <span>{ count }</span> */}
                    {theme === 'light' ? (
                        <IoHeartOutline size="14px"/>
                    ) : (
                        <IoHeartSharp size="14px"/> 
                    )} {' '}
                    <span style={{marginLeft: '0.3rem'}}>Favourites</span>
                </Favourites> 
            </Wrapper>
        </Container>
    </HeaderEl>
    );
};