import React from 'react'

const CopyRight = () => {
    return (
        <div className='b-brown w-full py-4 text-white'>
            <div className="con border-t-2 border-slate-400 h-full">
                <div className="flex gap-1 sm:gap-0 flex-col sm:flex-row justify-between items-center py-4 w-full h-full">
                    <div className='sm:col-span-9 col-span-12 gap-5 h-full flex items-center'>
                        <h3>©2024 All Rights Reserved by Parsa Heidari</h3>
                    </div>
                    <div className='sm:col-span-3 col-span-12 gap-5 h-full flex items-center'>
                        <h3>made by Parsa Heidari</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CopyRight
