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

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

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
            setIsMenu(!isMenu);
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

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
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
                    <div className="relative flex items-center justify-center" onClick={showCart}>
                        <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
                        {cartItems && cartItems.length > 0 && (
                            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                            </div>
                        )}
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
                        {isMenu && (
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
                                            onClick={() => setIsMenu(false)}
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
                <div className="relative flex items-center justify-center" onClick={showCart}>
                    <MdShoppingCart className="text-textColor text-2xl  cursor-pointer" />
                    {cartItems && cartItems.length > 0 && (
                        <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                        </div>
                    )}
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
                    {isMenu && (
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
                                        onClick={() => setIsMenu(false)}
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
                                    onClick={() => setIsMenu(false)}
                                >
                                    Home
                                </li>
                                <li
                                    className="px-3 py-2 items-center gap-2
                                     hover:bg-slate-100 transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex"
                                    onClick={() => setIsMenu(false)}
                                >
                                    Menu
                                </li>
                                <li
                                    className="px-3 py-2 items-center gap-2
                                     hover:bg-slate-100 transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex"
                                    onClick={() => setIsMenu(false)}
                                >
                                    About Us
                                </li>
                                <li
                                    className="px-3 py-2 items-center gap-2
                                     hover:bg-slate-100 transition-all duration-100 ease-in-out
                                     text-textColor text-base cursor-pointer flex"
                                    onClick={() => setIsMenu(false)}
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
