import image from "../assets/image.png";

const Projectcard = ({ title, main, demoLink, codeLink, frontendLink, backendLink }) => {
  return (
    <div className="w-full md:w-90 p-3 flex flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={image} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>

      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

      <div className="mt-2 p-2 md:-p-4 flex gap-2 md:gap-4 cursor-pointer ">
        {/* Always show Demo */}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
              hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Demo
            </button>
          </a>
        )}

        {/* Show Source Code only if no frontend/backend provided */}
        {codeLink && !frontendLink && !backendLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
              hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Source Code
            </button>
          </a>
        )}

        {/* Show Frontend if available */}
        {frontendLink && (
          <a href={frontendLink} target="_blank" rel="noopener noreferrer">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
              hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Frontend
            </button>
          </a>
        )}

        {/* Show Backend if available */}
        {backendLink && (
          <a href={backendLink} target="_blank" rel="noopener noreferrer">
            <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
              hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Backend
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projectcard;
