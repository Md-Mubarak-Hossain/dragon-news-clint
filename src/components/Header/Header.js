import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Usercontext/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="navbar  bg-primary text-primary-content container mx-auto px-4">
            <div className='w-8/12'>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Dragon News Portal</Link>
            </div>
            <div className='w-4/12'>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>

                {
                    user?.email ?
                        <>
                            <button onClick={handleSignOut} className="btn btn-sm  ms-2">Log out</button>

                            <small className="btn btn-ghost normal-case ">{user?.email}</small>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt='logo' />
                                </div>
                            </label>


                        </>
                        :
                        <>
                            <Link className="btn btn-sm" to='/login'>Log in</Link>
                            <Link className="btn btn-ghost normal-case text-xl" to='/signup'>Sign Up</Link>
                        </>
                }
            </div>


        </div>
    );
};

export default Header;