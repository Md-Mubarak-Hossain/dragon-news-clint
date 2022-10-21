import React, { useContext } from 'react';
import { AuthContext } from '../Usercontext/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Home...</h1>
            <h4>welcome  ..{user?.displayName}</h4>
        </div>
    );
};

export default Home;