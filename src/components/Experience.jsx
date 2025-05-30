import React from 'react'
import {FaCss3, FaHtml5, FaNodeJs, FaFigma, FaJs, FaReact} from 'react-icons/fa'
// import {SiRadis} from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">
            Experience
        </h1>

         <h1 className="text-xl md:text-2xl text-blue-400 font-semibold rounded-3xl justify-center mx-20 md:mx-27">
            Tech Stacks : 
        </h1>
        <div className="flex flex-wrap items-center justify-around">
            <h1></h1>
            <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            <span className=' flex items-center rounded-2xl'>
                <FaHtml5 color="#E34F26" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color="#1572b6" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaFigma color="#F24E1E" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color="#61DAFB" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs color="#F7DF1E" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaNodeJs color="#F7DF1E" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiTailwindcss color="#F7DF1E" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiExpress color="#F7DF1E" size={50} />
            </span>

            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiMongodb color="#47A248" size={50} />
            </span>

            {/* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiRadis color="#FF4438" size={50} />
            </span> */}
            </div>
            <div className="flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
             <span className="text-white">
                <h2 className="leading-tight">Web Developer Intern, TechMihir Naik Group</h2>
                <p className="text-sm leading-tight font-thin">June'23 - Aug'23</p>
                <ul className="text-sm p-2">
                    <li>-enhanced communication, networking</li>
                    <li>- delivered end to end website</li>
                </ul>
             </span>
            </div>


             <div className="flex  gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
             <span className="text-white">
                <h2 className="leading-tight">Web Developer Intern, TechMihir Naik Group</h2>
                <p className="text-sm leading-tight font-thin">June'23 - Aug'23</p>
                <ul className="text-sm p-2">
                    <li>-enhanced communication, networking</li>
                    <li>- delivered end to end website</li>
                </ul>
             </span>
            </div>

        </div>
      
    </div>
  )
}

export default Experience
