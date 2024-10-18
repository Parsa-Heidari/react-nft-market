import React from 'react'

import WalletIcon from '@mui/icons-material/Wallet';
import WindowIcon from '@mui/icons-material/Window';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const HowItWorks = () => {
    return (
         <section className='how-it-works text-white'>
            <div className="con h-full flex flex-col gap-10">
                <h2>create and sell your NFTs</h2>
                <div className="grid grid-cols-12 gap-6 h-3/4">
                    <div className='col-span-12 md:col-span-6  xl:col-span-3 flex flex-col gap-5 h-full'>
                        <WalletIcon className='t-purple' style={{ fontSize: "70px" }} />
                        <h3 className='text-2xl font-bold'>Set up your wallet</h3>
                        <p className='paragraph'>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.</p>
                    </div>
                    <div className='col-span-12 md:col-span-6  xl:col-span-3 flex flex-col gap-5 h-full'>
                        <WindowIcon className='t-purple' style={{ fontSize: "70px" }} />
                        <h3 className='text-2xl font-bold'>Create your collection</h3>
                        <p className='paragraph'>
                            Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
                        </p>
                    </div>
                    <div className='col-span-12 md:col-span-6  xl:col-span-3 flex flex-col gap-5 h-full'>
                        <OpenInBrowserIcon className='t-purple' style={{ fontSize: "70px" }} />
                        <h3 className='text-2xl font-bold'>Add your NFTs</h3>
                        <p className='paragraph'>
                            Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.
                        </p>
                    </div>
                    <div className='col-span-12 md:col-span-6  xl:col-span-3 flex flex-col gap-5 h-full'>
                        <ShoppingBagIcon className='t-purple' style={{ fontSize: "70px" }} />
                        <h3 className='text-2xl font-bold'>List them for sale</h3>
                        <p className='paragraph'>
                            Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
