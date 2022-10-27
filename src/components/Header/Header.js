import React from 'react';
// import './Header.scss';

import Logo from '../../assets/img/logo.png';
import { MdShoppingCart } from 'react-icons/md';
const Header = () => {
    return (
        <header className="fixed w-full z-50 bg-slate-300 p-6 px-16">
            {/* table & pc */}
            <div className="hidden md:flex w-full items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                    <img alt="logo" src={Logo} className="w-10 object-cover" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </div>
                <div className="flex gap-8">
                    <ul className="flex  items-center gap-8 ml-auto">
                        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out">
                            Home
                        </li>
                        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out">
                            Menu
                        </li>
                        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out">
                            About Us
                        </li>
                        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 ease-in-out">
                            Service
                        </li>
                    </ul>
                    <div className="relative flex items-center justify-center">
                        <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
                        <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg items-center justify-center flex ">
                            <div className="text-xs text-white font-semibold">2</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Moblie */}
            <div className="flex md:hidden w-full "></div>
        </header>
    );
};

export default Header;
