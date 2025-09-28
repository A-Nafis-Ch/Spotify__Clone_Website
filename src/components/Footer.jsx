import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="horline-bar border border-2-white width-[100px] mt-30"></div>
            <div className="middle-footer flex flex-row gap-5 mt-10 justify-between">
                <div className="company-links">
                    <h2 className='font-bold text-[15px]'>Company</h2>
                    <ul className='text-[14px] text-gray-400'>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>For the Record</li>
                    </ul>
                </div>

                <div className="community-links">
                    <h2 className='font-bold text-[15px]'>Communities</h2>
                    <ul className='text-[14px] text-gray-400'>
                        <li>For Artists</li>
                        <li>Developers</li>
                        <li>Advertising</li>
                        <li>Investors</li>
                        <li>Vendors</li>
                    </ul>
                </div>

                <div className="useful-links">
                    <h2 className='font-bold text-[15px]'>Useful links</h2>
                    <ul className='text-[14px] text-gray-400'>
                        <li>Support</li>
                        <li>Free Mobile App</li>
                        <li>Popular by Country</li>
                        <li>Import your Music</li>
                    </ul>
                </div>

                <div className="Spotify-links">
                    <h2 className='font-bold text-[15px]'>Spotify Plans</h2>
                    <ul className='text-[14px] text-gray-400'>
                        <li>Premium Individual</li>
                        <li>Premium Duo</li>
                        <li>Premium Family</li>
                        <li>Premium Student</li>
                        <li>Spotify Free</li>
                    </ul>
                </div>

                <div className="btn-links">
                    <ul className='flex flex-row gap-4'>
                        <li className='bg-[#1F1F1F] rounded-full h-10 w-10 flex justify-center items-center'>

                            < FaInstagram />

                        </li>

                        <li className='bg-[#1F1F1F] rounded-full h-10 w-10 flex justify-center items-center'>

                            <CiTwitter />

                        </li>

                        <li className='bg-[#1F1F1F] rounded-full h-10 w-10 flex justify-center items-center'>

                            <FaFacebook />

                        </li>
                    </ul>
                </div>
            </div>

            <div className="horline-bar border border-2-white width-[100px] mt-10"></div>

            <div className="developer-info">
                <p className='text-gray-400 text-[12px] mt-5'>Developed by <span className='text-white font-bold'>Abdullah Nafis Chowdhury</span></p>
            </div>

        </div>

    )
}

export default Footer
