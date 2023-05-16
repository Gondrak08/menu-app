
import { BiDrink } from 'react-icons/bi';
import { GiBarbecue, GiCakeSlice } from 'react-icons/gi';
import { CiPizza } from 'react-icons/ci';
import { FaHamburger } from 'react-icons/fa';

import bbqs from '../menuData/bbqs.json'
import burgers from '../menuData/burgers.json';
import desserts from '../menuData/desserts.json';
import drinks from '../menuData/drinks.json';
import pizza from '../menuData/pizzas.json';

import { ReactNode } from 'react';

interface IOptions{
    text:string,
    icon:ReactNode,
    path:Object[]
}

const options: IOptions[] = [
    {
        icon: <FaHamburger  />,
        path: burgers,
        text: `${"Burger's"}`
    },
    {
        icon: <GiBarbecue/>,
        path: bbqs,
        text: `${"Barbecue's"}`
    },
    {
        icon: <CiPizza/>,
        path: pizza,
        text: `${"Pizza's"}`
    },
    {
        icon: <GiCakeSlice/>,
        path:desserts,
        text:`${"Dessert's"}`
    },
    {

        icon: <BiDrink/>,
        path:drinks,
        text:`${"drink's"}`
    },
];

interface IPresentationDisplay{
    setFetchData: React.Dispatch<React.SetStateAction<object[] | null>>;
}
export default function PresentationDisplay({setFetchData}:IPresentationDisplay) {
    
    const handleNavigation=(path:Object[])=>{
        setFetchData(path);
    }

    return (
        <section className="presentation-display w-full h-full ">
            <div className="container h-full " >
                <h1 className="text-xl text-red-400">Welcome to our restaurant. Chose your flavour.</h1>
                <div className="w-full grid grid-cols-5 gap-5 p-2" >
                    {options.map((opt:IOptions,index:number)=>(
                        <div key={index} onClick={()=>handleNavigation(opt.path)} className='card text-xl flex justify-between cursor-pointer  items-center rounded px-5 py-2  border border-red-500 bg-white hover:bg-red-500 hover:text-white hover:border-white ' >
                            <span>{opt.text}</span>
                            <div className='icon text-red-500 hover:text-white' >
                                {opt.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};