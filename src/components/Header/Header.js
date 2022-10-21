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
        <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Dragon News Portal</Link>
            <div className='mx-auto'>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>

                {
                    user?.email ?
                        <div className="flex content-end">
                            <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl">Log out</button>

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" alt='logo' />
                                </div>
                            </label>
                            <small className="btn btn-ghost normal-case text-xl">{user?.displayName}</small>
                        </div>
                        :
                        <>
                            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                            <Link className="btn btn-ghost normal-case text-xl" to='/signup'>Sign Up</Link>
                        </>
                }
            </div>


        </div>
    );
};

export default Header;