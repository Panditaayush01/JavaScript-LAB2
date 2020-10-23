import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../shared/Header/index';
import { Link } from 'react-router-dom';

// You need to import your shared header...

const Home = () => {
    return (
        <>
            {<Header title="Welcome Shaun to Aayush website" />}
            {/* You need a link to your about page as a call to action */
                <Button variant="dark" >
                    <Link to="/about" style={{ color: "white" }}>About</Link>
                </Button>
            }
        </>
    );
}

export default Home;