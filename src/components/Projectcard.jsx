


// const Projectcard = ({ title, main, demoLink, codeLink, frontendLink, backendLink, image }) => {
//   return (
//     <div className="w-full md:w-90 p-3 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="p-4 h-48 w-full object-contain" src={image} alt={title} />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:-p-4 flex gap-2 md:gap-4 cursor-pointer">
//         {demoLink && (
//           <a href={demoLink} target="_blank" rel="noopener noreferrer">
//             <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
//               hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//               Demo
//             </button>
//           </a>
//         )}
//         {codeLink && !frontendLink && !backendLink && (
//           <a href={codeLink} target="_blank" rel="noopener noreferrer">
//             <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
//               hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//               Source Code
//             </button>
//           </a>
//         )}
//         {frontendLink && (
//           <a href={frontendLink} target="_blank" rel="noopener noreferrer">
//             <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
//               hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//               Frontend
//             </button>
//           </a>
//         )}
//         {backendLink && (
//           <a href={backendLink} target="_blank" rel="noopener noreferrer">
//             <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
//               hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//               Backend
//             </button>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projectcard;
