import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import actionType from '../context/actionType';

import Logo from '../assets/img/logo.png';
import Avartar from '../assets/img/avatar.png';
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';

//

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //
    const [ismenu, setIsMenu] = useState(false);
    const [{ user }, dispatch] = useStateValue();
    const login = async () => {
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!ismenu);
        }
    };
    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };
    return (
        <header className="fixed w-full z-50 bg-slate-300 p-3 px-4 md:p-3 md:px-16">
            {/* table & pc */}
            <div className="hidden md:flex w-full items-center justify-between">
                <Link to={'/'} className="flex gap-2 items-center cursor-pointer">
                    <img alt="logo" src={Logo} className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <div className="flex gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex  items-center gap-8 ml-auto"
                    >
                        <li
                            className="text-base text-textColor cursor-pointer
                         hover:text-headingColor duration-100 ease-in-out"
                        >
                            Home
                        </li>
                        <li
                            className="text-base text-textColor cursor-pointer
                         hover:text-headingColor duration-100 ease-in-out"
                        >
                            Menu
                        </li>
                        <li
                            className="text-base text-textColor cursor-pointer
                             hover:text-headingColor duration-100 ease-in-out"
                        >
                            About Us
                        </li>
                        <li
                            className="text-base text-textColor cursor-pointer
                             hover:text-headingColor duration-100 ease-in-out"
                        >
                            Service
                        </li>
                    </motion.ul>
                    <div className="relative flex items-center justify-center">
                        <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
                        <div
                            className="absolute -top-1 -right-2 w-5 h-5 rounded-full
                             bg-cartNumBg items-center justify-center flex "
                        >
                            <div className="text-xs text-white font-semibold">2</div>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avartar}
                            alt="avatar"
                            className="w-8 min-w-[30px] h-8 min-h-[30px] 
                                object-cover rounded-full cursor-pointer"
                            onClick={login}
                        />
                        {ismenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow-xl  rounded-lg flex flex-col 
                                    absolute top-10 -right-2 "
                            >
                                {user && user.email === 'vuxuan183@gmail.com' && (
                                    <Link to={'/createItem'}>
                                        <p
                                            className="px-3 py-2 items-center gap-2
                                             hover:bg-slate-100 transition-all duration-100 ease-in-out
                                             text-textColor text-base cursor-pointer flex hover:rounded-lg"
                                        >
                                            New Item <MdAdd />
                                        </p>
                                    </Link>
                                )}
                                <p
                                    className="px-3 py-2 items-center gap-2 bg-gray-200
                                     hover:bg-gray-300 rounded-b-lg justify-center transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex "
                                    onClick={logout}
                                >
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            {/* Moblie */}
            <div className="flex md:hidden w-full items-center justify-between ">
                <div className="relative flex items-center justify-center">
                    <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
                    <div
                        className="absolute -top-3 -right-2 w-5 h-5 rounded-full
                             bg-cartNumBg items-center justify-center flex "
                    >
                        <div className="text-xs text-white font-semibold">2</div>
                    </div>
                </div>
                <Link to={'/'} className="flex gap-2 items-center cursor-pointer">
                    <img alt="logo" src={Logo} className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avartar}
                        alt="avatar"
                        className="w-8 min-w-[30px] h-8 min-h-[30px] 
                            object-cover rounded-full cursor-pointer"
                        onClick={login}
                    />
                    {ismenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-gray-50 shadow-xl  
                                rounded-lg flex flex-col absolute top-10 -right-2 "
                        >
                            {user && user.email === 'vuxuan183@gmail.com' && (
                                <Link to={'/createItem'}>
                                    <p
                                        className="px-3 py-2 items-center gap-2
                                         hover:bg-slate-100 transition-all duration-100 ease-in-out
                                         text-textColor text-base cursor-pointer flex "
                                    >
                                        New Item <MdAdd />
                                    </p>
                                </Link>
                            )}
                            <ul className="flex flex-col ">
                                <li
                                    className="px-3 py-2 items-center gap-2
                                     hover:bg-slate-100 transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex"
                                >
                                    Home
                                </li>
                                <li
                                    className="px-3 py-2 items-center gap-2
                                     hover:bg-slate-100 transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex"
                                >
                                    Menu
                                </li>
                                <li
                                    className="px-3 py-2 items-center gap-2
                                     hover:bg-slate-100 transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex"
                                >
                                    About Us
                                </li>
                                <li
                                    className="px-3 py-2 items-center gap-2
                                     hover:bg-slate-100 transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex"
                                >
                                    Service
                                </li>
                            </ul>
                            <p
                                className="px-3 py-2 items-center m-2 p-2 shadow-md rounded-md
                                justify-center gap-3 bg-gray-200 hover:bg-slate-300 
                                transition-all duration-100 ease-in-out text-textColor text-base 
                                cursor-pointer flex "
                                onClick={logout}
                            >
                                Logout <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
