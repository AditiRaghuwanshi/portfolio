// import aditi from "../assets/aditi2.jpg"
// import { motion } from "framer-motion";
// import { useTypewriter, Cursor } from "react-simple-typewriter";


// const Home = () => {

//   const {text} = useTypewriter({
//     words: ["I'm Aditi", "MERN Stack Developer", "Frontend Developer", "Backend Developer"],
//     loop: true,
//   });
    
  
//   return (

//     <div className="text-white flex w-full justify-between items-start p-10 
//     md:p-20">
//         <div className="md:w-2/4 md:pt-10">
// <h1 className="text-3xl md:text-6xl font-bangers leading-normal tracking-tighter">

//   Hii <span className="text-blue-300">{text}</span> 
//   <span style={{color: "blue"}}>   <Cursor cursorStyle='<' /> </span>

// </h1>

// <p className="text-sm md:text-base tracking-tight">
//   MERN Stack Developer passionate about building dynamic, responsive web apps. Started with Frontend and expanded into Backend to create full-stack, visually appealing solutions.
// </p>

            
//         <div>
//   <a href="mailto:raghuwanshiaditi6@gmail.com">
//    <motion.button
//   whileHover={{ scale: 2.1 }}
//   animate={{
//     scale: [1, .5, 1.5, 1.2, 1.05, 1.1, 1.2, 1.05, 1.10],
//   }}
//   transition={{
//     duration: 1.5,
//     repeat: Infinity,
//     repeatType: "loop",
//     ease: "easeInOut"
//   }}
//   className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105
//   font-semibold rounded-3xl bg-[#465697] cursor-pointer"
// >
//   Contact Me
// </motion.button>

//   </a>
// </div>



//         </div>
   
//         <div>
//             <motion.img className="w-72 md:w-150 rounded-lg object-cover" src={aditi} alt="Aditi"
//             animate={{ 
//               y: [2,15,20,15,10,5,0],
//               scale: [1, 1.05, 1],
//             }}

//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatType: 'linear',
//               ease: 'easeInOut'



//             }}
            
//             />
//         </div>
     

      
//     </div>
//   )
// }

// export default Home;












import aditi from "../assets/aditi2.jpg";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["I'm Aditi", "MERN Stack Developer", "Frontend Developer", "Backend Developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
       <h1 className="text-3xl md:text-6xl font-bangers leading-normal tracking-tighter">
  Hii <span className="text-blue-300 mb-5">{text}</span>
  <span className="text-blue-500">
    <Cursor cursorStyle="|" />
  </span>
</h1>


        <p className="text-sm  md:text-base  mt-6">
          Focused on mastering the MERN Stack by building responsive, real-world web applications with a learning-driven mindset.
        </p>

        <div>
          <a href="mailto:raghuwanshiaditi6@gmail.com">
            <motion.button
              whileHover={{ scale: 2.1 }}
              animate={{
                scale: [1, 0.5, 1.5, 1.2, 1.05, 1.1, 1.2, 1.05, 1.10],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer"
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </div>

      <div>
        <motion.img
          className="w-72 md:w-150 rounded-lg object-cover"
          src={aditi}
          alt="Aditi"
          animate={{
            y: [0, -10, 0], // Smooth up-down bubble motion
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Home;
