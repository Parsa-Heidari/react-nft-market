import React from 'react'
import { Link } from 'react-router-dom'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <header className='b-brown py-4 h-20 w-full'>
            <div className="mx-auto h-full con">
                <div className="grid grid-cols-12 h-full gap-6 w-full">
                    <div className='lg:col-span-3 sm:col-span-8 col-span-9 h-full'>
                        <Link to={"/home"}>
                            <img src="https://netstorm-react.theme-land.com/img/logo.png" alt="logo" className='object-contain h-full' />
                        </Link>
                    </div>
                    <div className='lg:col-span-6 sm:col-span- h-full lg:block hidden'>
                        <nav className='h-full w-full'>
                            <ul className='h-full w-full flex items-center gap-5 text-white text-lg'>
                                <li> <Link to="/home" className='text-xl text-white'>home</Link></li>
                                <li> <Link to="/explore" className='text-xl text-white'>explore</Link></li>
                                <li> <Link to="/contact" className='text-xl text-white'>contact us</Link></li>
                                <li className='pages cursor-pointer'> pages<KeyboardArrowDownIcon />
                                    <div className='space'></div>
                                    <ul className='drop-down flex flex-col gap-2 rounded-md'>
                                        <li> <Link to="/home" className='text-lg text-black'>home</Link></li>
                                        <li> <Link to="/explore" className='text-lg text-black'>explore</Link></li>
                                        <li> <Link to="/contact" className='text-lg text-black'>contact us</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='lg:col-span-3 sm:col-span-4 col-span-3  h-full flex items-center justify-between'>
                        <div className='block lg:hidden'>
                            <MenuIcon className='text-white' style={{ fontSize: "30px" }} />
                        </div>
                        <div className='text-white text-xl'>
                            <Link to={"/explore"} title='Search'><SearchIcon style={{fontSize : "30px"}} /></Link>
                        </div>
                        <Link to="/login" className='text-white border-2 border-white py-2 md:px-16 sm:px-12 px-4 rounded-full sm:block hidden login '>
                            login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
