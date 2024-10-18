import React from 'react'
import { Link } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <footer className='b-brown'>
            <div className="con h-full ">
                <div className="grid grid-cols-12 text-white text-lg gap-6">
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex flex-col gap-8">
                        <img src="https://netstorm-react.theme-land.com/img/logo.png" alt="logo" className='h-16 w-16 object-contain' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                        <div className="socials flex gap-2">
                            <a href='https://www.instagram.com' className='social w-10 h-10 rounded-md flex items-center justify-center '>
                                <InstagramIcon />
                            </a>
                            <a href='https://www.instagram.com' className='social w-10 h-10 rounded-md flex items-center justify-center '>
                                <XIcon />
                            </a>
                            <a href='https://www.instagram.com' className='social w-10 h-10 rounded-md flex items-center justify-center '>
                                <TelegramIcon />
                            </a>
                            <a href='https://www.instagram.com' className='social w-10 h-10 rounded-md flex items-center justify-center '>
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex flex-col gap-8">
                        <h2>usefull links</h2>
                        <ul className='flex flex-col gap-2'>
                            <li><Link to="/home">All NFTs</Link></li>
                            <li><Link to="/home">How It Works</Link></li>
                            <li><Link to="/home">Create</Link></li>
                            <li><Link to="/home">Explore</Link></li>
                            <li><Link to="/home">Privacy & Terms</Link></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex flex-col gap-8">
                        <h2>Community</h2>
                        <ul className='flex flex-col gap-2'>
                            <li><Link to="/home">Help Center</Link></li>
                            <li><Link to="/home">Partners</Link></li>
                            <li><Link to="/home">Suggestions</Link></li>
                            <li><Link to="/home">Blog</Link></li>
                            <li><Link to="/home">Newsletter</Link></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 flex flex-col gap-8">
                        <h2>get in touch</h2>
                        <ul className='flex flex-col gap-2'>
                            <li><Link to="/contact">contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
