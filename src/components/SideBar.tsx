import { useState } from 'react';

import { MdRestaurantMenu } from 'react-icons/md';
import { BiDrink } from 'react-icons/bi';
import { GiBarbecue, GiCakeSlice } from 'react-icons/gi';
import { CiPizza } from 'react-icons/ci';
import { FaHamburger } from 'react-icons/fa';

import bbqs from '../menuData/bbqs.json'
import burgers from '../menuData/burgers.json';
import desserts from '../menuData/desserts.json';
import drinks from '../menuData/drinks.json';
import pizza from '../menuData/pizzas.json';

interface ISideBar {
    fetchData: Object[] | null,
    setFetchData: React.Dispatch<React.SetStateAction<object[] | null>>;
};

export default function SideBar({ fetchData, setFetchData }: ISideBar) {
    const [isExpanded, setIsExpanded] = useState<Boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null); 

    const handleMouseEnter = () => {
        if(selectedItem === null)
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        if(selectedItem === null)
        setIsExpanded(false);
    };
    
    function handleNavigation(type: string) {
        console.log(type);
        setSelectedItem(type);
        switch(type){
            case'hamburger':
            return setFetchData(burgers);
            break
            case'barbecue':
            return setFetchData(bbqs);
            break;
            case 'pizza':
                return setFetchData(pizza);
            break;
            case 'dessert':
                return setFetchData(desserts);
            break;
            case 'drink':
                return setFetchData(drinks)
            default:
            return null
            break;
        }
    };

    return (
        <section
            className={`h-screen bg-red-500 px-2 py-3 
            ${isExpanded && selectedItem === null ? 
                "w-48 fixed md:relative top-0 left-0 z-50 " 
                : "w-12"
                } transition-all duration-500 
                ${ typeof selectedItem === "string" ? "w-48":''} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <span className="text-white flex items-center justify-center">
                <MdRestaurantMenu
                    className={`text-4xl `}
                />
                <span className={`ml-2 transition-opacity duration-500 ease-in-out ${isExpanded ? "inline-block opacity-100 " : "hidden opacity-0"}`} style={{ transition: 'opacity 0.5s' }} >
                    Menu
                </span>
            </span>



            <nav className="flex justify-center my-2">
                <ul className="flex flex-col gap-2 text-2xl text-white">

                    <li className={`hover:cursor-pointer ${selectedItem === "hamburger" ? "selected-item" : ""}`}>
                        <FaHamburger onClick={() => handleNavigation("hamburger")} />
                        <span onClick={() => handleNavigation("hamburger")}  className={`ml-2 transition-opacity duration-500 ease-in-out ${isExpanded ? "inline-block opacity-100 " : "hidden opacity-0"}`} style={{ transition: 'opacity 0.5s' }} >
                            Hamburgers
                        </span>
                    </li>

                    <li className={`hover:cursor-pointer ${selectedItem === "barbecue" ? "selected-item" : ""}`}>
                        <GiBarbecue onClick={() => handleNavigation("barbecue")} />
                        <span onClick={() => handleNavigation("barbecue")} className={`ml-2 transition-opacity duration-500 ease-in-out ${isExpanded ? "inline-block opacity-100 " : "hidden opacity-0"}`} style={{ transition: 'opacity 0.5s' }} >
                            Barbecue
                        </span>
                    </li>

                    <li className={`hover:cursor-pointer ${selectedItem === "pizza" ? "selected-item" : ""}`}>
                        <CiPizza onClick={() => handleNavigation("pizza")} />
                        <span onClick={() => handleNavigation("pizza")} className={`ml-2 transition-opacity duration-500 ease-in-out ${isExpanded ? "inline-block opacity-100 " : "hidden opacity-0"}`} style={{ transition: 'opacity 0.5s' }} >
                            Pizzas
                        </span>
                    </li>

                    <li className={`hover:cursor-pointer ${selectedItem === "dessert" ? "selected-item" : ""}`}>
                        <GiCakeSlice onClick={() => handleNavigation("dessert")} />
                        <span onClick={() => handleNavigation("dessert")} className={`ml-2 transition-opacity duration-500 ease-in-out ${isExpanded ? "inline-block opacity-100 " : "hidden opacity-0"}`} style={{ transition: 'opacity 0.5s' }} >
                            Desserts
                        </span>
                    </li>

                    <li className={`hover:cursor-pointer ${selectedItem === "drink" ? "selected-item" : ""}`} >
                        <BiDrink onClick={() => handleNavigation("drink")} />
                        <span onClick={() => handleNavigation("drink")} className={`ml-2 transition-opacity duration-500 ease-in-out ${isExpanded ? "inline-block opacity-100 " : "hidden opacity-0"}`} style={{ transition: 'opacity 0.5s' }} >
                            Drinks
                        </span>
                    </li>
                </ul>
            </nav>
        </section>
    )
}