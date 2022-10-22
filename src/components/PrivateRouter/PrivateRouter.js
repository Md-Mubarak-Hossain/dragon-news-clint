import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = () => {
    const location = useLocation();

    return (
        <Navigate to='/login'
            state={{ from: location }}
            replace></Navigate>
    );
};

export default PrivateRouter;