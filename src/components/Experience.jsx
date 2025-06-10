
// import { motion } from "framer-motion";
// import { FaCss3, FaHtml5, FaNodeJs, FaFigma, FaJs, FaReact } from 'react-icons/fa'
// // import {SiRadis} from 'react-icons/si';
// import { SiMongodb } from 'react-icons/si';
// import { SiTailwindcss } from 'react-icons/si';
// import { SiExpress } from 'react-icons/si';

// const Experience = () => {

//   const scrollVariant1 = {
//   animate: {
//     x: [0, -1500], // You can adjust -1500 to change how far it scrolls
//     transition: {
//       x: {
//         repeat: Infinity,
//         repeatType: 'loop',
//         duration: 20,
//         ease: 'linear',
//       },
//     },
//   },
// };
//   return (
//     <div id="Experience" className="p-10 md:p-24">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">
//         Experience
//       </h1>

//       <h1 className="text-xl md:text-2xl text-blue-400 font-semibold justify-center mx-20 md:mx-27">
//         Tech Stacks:
//       </h1>
//       <div className="flex flex-row mt-0 md:ml-54 mt-4 gap-0">
//         <h1></h1>
//         {/* <div className="flex flex-row md:w-2/5 md:gap-8 md:p-0"> */}
//           <motion.div
//             className="flex gap-8 md:p-12 py-10"
//             variants={scrollVariant1}
//             animate="animate"
//           >

//             <span className=' flex items-center rounded-2xl'>
//               <FaHtml5 color="#E34F26" size={50} />
//             </span>

//             <span className='p-3  flex items-center rounded-2xl'>
//               <FaCss3 color="#1572b6" size={50} />
//             </span>

//             <span className='p-3  flex items-center rounded-2xl'>
//               <FaFigma color="#F24E1E" size={50} />
//             </span>

//             <span className='p-3  flex items-center rounded-2xl'>
//               <FaReact color="#61DAFB" size={50} />
//             </span>

//             <span className='p-3  flex items-center rounded-2xl'>
//               <FaJs color="#F7DF1E" size={50} />
//             </span>

//             <span className='p-3 flex items-center rounded-2xl'>
//               <FaNodeJs color="#F7DF1E" size={50} />
//             </span>

//             <span className='p-3  flex items-center rounded-2xl'>
//               <SiTailwindcss color="#F7DF1E" size={50} />
//             </span>

//             <span className='p-3 flex items-center rounded-2xl'>
//               <SiExpress color="#F7DF1E" size={50} />
//             </span>

//             <span className='p-3  flex items-center rounded-2xl'>
//               <SiMongodb color="#47A248" size={50} />
//             </span>

//             {/* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <SiRadis color="#FF4438" size={50} />
//             </span> */}
//         </div>
//       </div>

//       <div className="flex md:flex-row flex-col gap-20 ">
//         <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
//           <span className="text-white">
//             <h2 className="leading-tight">Web Developer Intern, TechMihir Naik Group</h2>
//             <p className="text-sm leading-tight font-thin">June'23 - Aug'23</p>
//             <ul className="text-sm p-2 list-disc list-inside">
//               <li>Redesigned and developed the company website using HTML, CSS, and JavaScript.</li>
//               <li>Participated in regular progress meetings and collaborated closely with the team.</li>
//               <li>Improved communication and problem-solving skills through real-time discussions and feedback sessions.</li>
//               <li>Delivered a fully responsive and functional website reflecting the company’s brand and goals.</li>
//             </ul>
//           </span>
//         </div>

//         <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
//           <span className="text-white">
//             <h2 className="leading-tight md:mt-10">FrontEnd Developer</h2>
//             <p className="text-sm leading-tight font-thin">June'24 - Dec'24</p>
//             <ul className="text-sm p-2 list-disc list-inside">
//               <li>Contributed to live projects, gaining real-world development experience at Purat Technologies.</li>
//               <li>Developed and maintained client and user profile sections with responsive UI.</li>
//               <li>Built key modules like File Manager, Support Ticket system, and URL Shortener.</li>
//               <li>Integrated RESTful APIs for dynamic data interaction and functionality.</li>
//               <li>Designed and implemented intuitive dashboard UI for efficient user workflows.</li>
//               <li>Collaborated with teams to meet project goals and deliver quality software solutions.</li>
//             </ul>
//           </span>
//         </motion.div>
   


//     </div>
//   )
// }

// export default Experience







import { motion } from 'framer-motion';
import { FaCss3, FaHtml5, FaNodeJs, FaFigma, FaJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';



const isMobile = window.innerWidth <= 768; // Adjust this value based on your breakpoint for mobile
const scrollVariant1 = {
  animate: {
    x: isMobile ? [0, -600] : [0, 900], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: isMobile ? 10 : 10,
        ease: isMobile ? 'easeInOut' : 'easeInOut',
      },
    },
  },
};





const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>

      <h1 className="text-xl md:text-2xl text-blue-400 font-semibold justify-center mx-20 md:mx-27">
        Tech Stacks:
      </h1>

      {/* Moving Tech Stack Icons */}
      <div className="overflow-hidden w-full mt-4">
        <motion.div
          className="flex gap-8 py-6"
          variants={scrollVariant1}
          animate="animate"
        >
          <span className="flex items-center"><FaHtml5 color="#E34F26" size={50} /></span>
          <span className="flex items-center"><FaCss3 color="#1572b6" size={50} /></span>
          <span className="flex items-center"><FaFigma color="#F24E1E" size={50} /></span>
          <span className="flex items-center"><FaReact color="#61DAFB" size={50} /></span>
          <span className="flex items-center"><FaJs color="#F7DF1E" size={50} /></span>
          <span className="flex items-center"><FaNodeJs color="#F7DF1E" size={50} /></span>
          <span className="flex items-center"><SiTailwindcss color="#38B2AC" size={50} /></span>
          <span className="flex items-center"><SiExpress color="#F7DF1E" size={50} /></span>
          <span className="flex items-center"><SiMongodb color="#47A248" size={50} /></span>
        </motion.div>
      </div>

      {/* Experience Boxes */}
      <div className="flex md:flex-row flex-col gap-10 mt-10">
        {/* Internship Experience */}
        <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4 text-white w-full">
          <h2 className="leading-tight font-semibold">Web Developer Intern, TechMihir Naik Group</h2>
          <p className="text-sm font-thin">June'23 - Aug'23</p>
          <ul className="text-sm p-2 list-disc list-inside">
            <li>Redesigned and developed the company website using HTML, CSS, and JavaScript.</li>
            <li>Participated in regular progress meetings and collaborated closely with the team.</li>
            <li>Improved communication and problem-solving skills through real-time discussions and feedback sessions.</li>
            <li>Delivered a fully responsive and functional website reflecting the company’s brand and goals.</li>
          </ul>
        </div>

        {/* Frontend Developer Experience */}
        <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4 text-white w-full">
          <h2 className="leading-tight font-semibold">FrontEnd Developer</h2>
          <p className="text-sm font-thin">June'24 - Dec'24</p>
          <ul className="text-sm p-2 list-disc list-inside">
            <li>Contributed to live projects, gaining real-world development experience at Purat Technologies.</li>
            <li>Developed and maintained client and user profile sections with responsive UI.</li>
            <li>Built key modules like File Manager, Support Ticket system, and URL Shortener.</li>
            <li>Integrated RESTful APIs for dynamic data interaction and functionality.</li>
            <li>Designed and implemented intuitive dashboard UI for efficient user workflows.</li>
            <li>Collaborated with teams to meet project goals and deliver quality software solutions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
