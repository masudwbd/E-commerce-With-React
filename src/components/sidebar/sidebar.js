import logo from '../../assets/images/logo.png';
import expand from '../../assets/images/expand.png';
import { useState } from 'react';
import { IconBar } from './sidebarComponents/iconBars';
import { Navbar } from './sidebarComponents/navbar';
import {MySlider} from './bodyComponents/slider'
import Categories from './bodyComponents/categories'
import { DailyDeals } from './bodyComponents/dailyDeals/dailyDeals';
import  {Newsletter}  from './bodyComponents/newsletter/newsletter';
import { Footer } from './bodyComponents/footer/footer';

export function Sidebar(){
    const [open, setOpen ] = useState(false)
    const [show, setshow ] = useState(false)
    const handleClick = () => {
    setshow(!show)
    setOpen(!open);
    }

    const style = {
        display: show ? "block" : "none"
    }
    return(
        <div>
            <div className='sidebar flex h-screen'>
                <div className={ `${ open ? "w-80" : "w-20"} duration-300  sticky top-0`}>
                    {/* <img src={logo}  className='cursor-pointer' alt=""/> */}
                    <img src={expand} style={{height:50, width:50}} className={`absolute cursor-pointer -right-5 top-12 w-7 border-2 rounded-full ${!open && "rotate-180"}`} alt=""
                    onClick={handleClick}
                    />
                    <div style={style}>
                        <div className='text-4xl mt-12'>E-Commerce</div>
                        <IconBar/> 
                        <Navbar/> 
                    </div>

                </div>
                <div className="text-2x1 font-semibold bg-neutral-100 flex-1 overflow-auto">
                    <MySlider/>
                    <Categories />
                    <DailyDeals />
                    <Newsletter />
                    <Footer />
                </div>
            </div>
        </div>
    )
  
}

