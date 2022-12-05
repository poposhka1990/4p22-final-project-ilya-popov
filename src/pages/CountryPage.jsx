import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { searchByCountry } from "../config";
// import { Info } from "../components/Info";
// import { Button } from "../components/Button";

export const CountryPage = () => {
    const { name } = useParams();
    // const { push, goBack } = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(() => {
            axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]));
    }, [name]);

    return (
            <div>
                <Link to='/'>
                {/* <Button >
                    <IoArrowBack /> Back
                </Button> */}
                </Link>
                {/* {country && <Info push={push} {...country} />} */}
            </div>
    )
}

