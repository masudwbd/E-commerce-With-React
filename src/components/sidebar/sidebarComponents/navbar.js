import HoverCategories from './hoverComponents/hoverCategories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



export function Navbar(){
    const [categories , setCategories] = useState(false)

    return(
        <div className="navbar" style={{marginTop:60}}>
            <nav className="">
                <div className='sidebar-menu'>
                    <ul>
                        <div onMouseEnter={() => setCategories(true)}> 
                            <li className='my-8 flex justify-between'>
                                <div><a href="#" className="text-black float-left" style={{fontSize:22}}>Home</a></div>
                                <div><FontAwesomeIcon icon={faChevronRight} /></div>
                            </li>
                            <div >
                                <ul className="list-disc" onMouseLeave={() => setCategories(false)}>
                                    {categories && <HoverCategories />}
                                </ul>
                            </div>
                        </div>
                        <li className='my-8 flex justify-between'>
                            <div><a href="#" className="text-black float-left" style={{fontSize:22}}>Shop</a></div>
                            <div>  <FontAwesomeIcon icon={faChevronRight} /></div>
                        </li>
                        <li className='my-8 flex justify-between'>
                            <div><a href="#" className="text-black float-left" style={{fontSize:22}}>Collection</a></div>
                            <div><FontAwesomeIcon icon={faChevronRight} /></div>
                        </li>
                        <li className='my-8 flex justify-between'>
                            <div><a href="#" className="text-black float-left" style={{fontSize:22}}>Pages</a></div>
                            <div><FontAwesomeIcon icon={faChevronRight} /></div>
                        </li>
                        <li className='my-8 flex justify-between'>
                            <div><a href="#" className="text-black float-left" style={{fontSize:22}}>Blog</a></div>
                            <div><FontAwesomeIcon icon={faChevronRight} /></div>
                        </li>
                        <li className='my-8 flex justify-between'>
                            <div><a href="#" className="text-black float-left" style={{fontSize:22}}>Contact</a></div>
                            <div><FontAwesomeIcon icon={faChevronRight} /></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}