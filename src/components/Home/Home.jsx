import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const teshart = useLoaderData();
    return (
        <div>
            <h1>this is Home page : {teshart.length}</h1>
        </div>
    );
};

export default Home;