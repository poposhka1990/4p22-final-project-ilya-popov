import styled from "styled-components";
<<<<<<< HEAD
import { Button } from "./Button";
import { Link } from 'react-router-dom';
=======
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488

const Wrapper = styled.article`
    border-radius: var(--radii);
    background-color: var(---colors-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
`;

const CardBody = styled.div`
    padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
`;

const CardListItem = styled.li`
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold);
    }
`;

<<<<<<< HEAD
const LinkButton = styled(Link).attrs({
    to: 'favourites',
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

=======
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488

export const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={`${name}'s flag`}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.title}>
                            <b>{el.title}: </b>{el.description}
                        </CardListItem>
                    ))}
                </CardList>
<<<<<<< HEAD
                <LinkButton>
                    <Button>Favourite</Button>
                </LinkButton>
=======
>>>>>>> 8dd84c2e092a9847d708ed1007a82ccb580f8488
            </CardBody>
        </Wrapper>
    )
}