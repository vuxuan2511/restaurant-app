import React from 'react';
import Delivery from '../assets/img/delivery.png';
import HeroBg from '../assets/img/heroBg.png';
import { heroData } from '../utils/Data';

const HomeContainer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full " id="home">
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />
                    </div>
                </div>

                <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
                    The Fastest Delivery in
                    <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">Your City</span>
                </p>

                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit eaque fugit distinctio est
                    nam voluptatum architecto, porro iusto deserunt recusandae ipsa minus eos sunt, dolores illo
                    repellat facere suscipit!
                </p>

                <button
                    type="button"
                    className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                >
                    Order Now
                </button>
            </div>

            <div className="py-2 flex-1 flex items-center relative ">
                <img src={HeroBg} className=" ml-auto h-420 w-full lg:w-auto lg:h-600 " alt="hero-bg" />
                <div className=" absolute top-0 left-0 lg:-left-40 xl:-left-10 md:-left-16 flex items-center justify-center  lg:px-24 md:px-10 py-8 gap-4 g flex-wrap">
                    {heroData &&
                        heroData.map((item) => (
                            <div
                                key={item.id}
                                className=" min-w-[160px] lg:w-[170px] md:min-w-[140px] xl:min-w-[190px] mt-8  lg:p-3 p-1 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img
                                    src={item.imageSrc}
                                    className="w-20 lg:w-30 xl:w-40 -mt-10 lg:-mt-16 "
                                    alt={item.name}
                                />
                                <p className="text-base font-semibold text-textColor mt-2 lg:mt-4">{item.name}</p>

                                <p className="text-[12px]  text-lighttextGray font-semibold my-1 lg:my-3">
                                    {item.description}
                                </p>

                                <p className="text-sm font-semibold text-headingColor">
                                    <span className="text-xs text-red-600">$</span> {item.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;
