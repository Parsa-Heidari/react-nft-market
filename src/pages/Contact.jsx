import React from 'react'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        <section className='contact'>
            <div className="con h-full">
                <div className='grid grid-cols-12 h-full w-full gap-8'>
                    <div className='col-span-12 lg:col-span-6 h-full text-white b-brown rounded-lg p-8 flex flex-col justify-between'>
                        <h2>get in touch</h2>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <h3 className='mb-1'>name</h3>
                                <input type="text" placeholder='Your Name...' className='w-full p-3 rounded-md text-black' />
                            </div>
                            <div>
                                <h3 className='mb-1'>Email</h3>
                                <input type="email" placeholder='Your Email...' className='w-full p-3 rounded-md text-black' />
                            </div>
                            <div>
                                <h3 className='mb-1'>message</h3>
                                <textarea placeholder='your message...' className='w-full p-3 rounded-md h-28 text-black'></textarea>
                            </div>
                        </div>
                        <button className='w-full b-purple rounded-md p-3 hover:brightness-150'>
                            Submit
                        </button>
                    </div>
                    <div className='col-span-12 lg:col-span-6 flex h-full flex-col justify-between'>
                        <p className='paragraph text-center'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis doloremque fugiat aliquid, doloribus maiores minus provident voluptas ipsum, reprehenderit ad unde veniam nemo assumenda facilis tempora quam excepturi. Veniam porro voluptatum labore natus debitis enim quia voluptas modi quos laboriosam?
                        </p>
                        <div className='grid grid-cols-12 w-full h-3/4'>
                            <div className='col-span-6 text-white flex flex-col items-center gap-4'>
                                <div>
                                    <LocalPhoneIcon style={{fontSize : "50px"}} />
                                </div>
                                <div className='text-center'>
                                    <h3>phone number</h3>
                                    <h4>+91983982983</h4>
                                </div>
                            </div>
                            <div className='col-span-6 text-white flex flex-col items-center gap-4'>
                                <div>
                                    <EmailIcon style={{fontSize : "50px"}} />
                                </div>
                                <div className='text-center'>
                                    <h3>email address</h3>
                                    <h4>heydarip16@gmail.com</h4>
                                </div>
                            </div>
                            <div className='col-span-6 text-white flex flex-col items-center gap-4'>
                                <div className='text-center'>
                                    <WhatsAppIcon style={{fontSize : "50px"}} />
                                </div>
                                <div>
                                    <h3>WhatsApp number</h3>
                                    <h4>+9128433233</h4>
                                </div>
                            </div>
                            <div className='col-span-6 text-white flex flex-col items-center gap-4'>
                                <div>
                                    <InstagramIcon style={{fontSize : "50px"}} />
                                </div>
                                <div className='text-center'>
                                    <h3>instagram</h3>
                                    <h4>@parsa</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
