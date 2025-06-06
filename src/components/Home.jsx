import aditi from "../assets/aditi2.jpg"


const Home = () => {
  return (

    <div className="text-white flex w-full justify-between items-start p-10 
    md:p-20">
        <div className="md:w-2/4 md:pt-10">
<h1 className="text-3xl md:text-6xl font-bangers leading-normal tracking-tighter">

  Hii <span className="text-blue-300">I'm Aditi</span>
</h1>

<p className="text-sm md:text-base tracking-tight">
  MERN Stack Developer passionate about building dynamic, responsive web apps. Started with Frontend and expanded into Backend to create full-stack, visually appealing solutions.
</p>

            
        <div>
  <a href="mailto:raghuwanshiaditi6@gmail.com">
    <button
      className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105
      font-semibold rounded-3xl bg-[#465697] cursor-pointer"
    >
      Contact Me
    </button>
  </a>
</div>



        </div>
   
        <div>
            <img className="w-72 md:w-150 rounded-lg object-cover" src={aditi} alt="Aditi" />
        </div>
     

      
    </div>
  )
}

export default Home
