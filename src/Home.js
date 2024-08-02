import React from 'react'
import { Link } from 'react-router-dom'

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Home() {
    return (
        <div className='p-20 grid grid-cols-[1fr_1fr] gap-24'>
            <div>
                <h1 className='font-bold text-[25px] text-green-500'>Hi. My name is Sanyam Jain</h1>

                <div>
                    <h2>Fullstack developer</h2>

                    <p className='pt-4 font-thin tracking-wide'>
                        Hi there ! My name is Sanyam Jain and i am a graduate of Chitkara University. I am a passionate developer and has experience in building both frontend and backend. Currently looking for Software developer roles (Frontend preferred)
                    </p>
                </div>

                <div className='py-10 text-[20px] flex flex-col gap-2'>
                <Link className='py-2'  to='https://www.linkedin.com/in/sanyam-jain-profile/' target="_blank" ><span><FaLinkedinIn /></span> <span className='text-blue-300'>LinkedIn</span></Link>
                <Link className='py-2' to="https://github.com/explorer-2002" target="_blank" ><span><FaGithub /></span> <span className='text-blue-300'>Github</span></Link>
                <Link className='py-2' to="https://leetcode.com/sanyam_jain1104" target="_blank" ><span><SiLeetcode /></span> <span className='text-blue-300'>Leetcode</span></Link>
                </div>
            </div>

            <div>
                <img src="/my-pic.jpg" alt="My_picture" className='rounded-full border-4 border-spacing-8' />
            </div>
        </div>
    )
}

export default Home
