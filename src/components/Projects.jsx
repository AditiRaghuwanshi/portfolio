// import React from 'react'
// import Projectcard from './Projectcard'

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//         <h1 className="text-2xl md:text-4xl text-white font-bold">
//             Projects
//         </h1>
//         <div className="py-12 px-8 flex flex-wrap gap-5 ">
//             <Projectcard title="Chatting Application" main="this is a chat application made using react node a mern stack application made with socket io" />
//            <Projectcard title="Nike Website" main="this is a chat application made using react node a mern stack application made with socket io" />
//             <Projectcard title="Spotify UI" main="this is a chat application made using react node a mern stack application made with socket io" />
//             <Projectcard title="Notes Application" main="this is a chat application made using react node a mern stack application made with socket io" />
//         </div>

      
//     </div>
//   )
// }

// export default Projects










import React from 'react';
import Projectcard from './Projectcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Projects</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
   <SwiperSlide>
  <Projectcard
    title="Chatting Application"
    main="This is a chat app made with React, Node.js, Socket.io (MERN)."
    demoLink="https://chit-chat-frontend-sooty.vercel.app/"
    frontendLink="https://github.com/AditiRaghuwanshi/ChitChat-frontend"
    backendLink="https://github.com/AditiRaghuwanshi/ChitChat"
  />
</SwiperSlide>

<SwiperSlide>
  <Projectcard
    title="Notes Application"
    main="A MERN notes app where users can CRUD notes."
    demoLink="https://notes-ten-chi.vercel.app/"
    frontendLink="https://github.com/AditiRaghuwanshi/Notes"
    backendLink="https://github.com/AditiRaghuwanshi/Notes-Backend"
  />
</SwiperSlide>

<SwiperSlide>
  <Projectcard
    title="Nike Website"
    main="A modern Nike website clone built with React and styled using TailwindCSS."
    demoLink="https://aditi-raghuwanshi.netlify.app/"
    codeLink="https://github.com/AditiRaghuwanshi/NikeTailwindProject" // Replace with actual repo
  />
</SwiperSlide>
<SwiperSlide>
  <Projectcard
    title="Spotify UI"
    main="A Spotify-like UI created using React with dummy data for layout practice."
    demoLink="https://your-spotify-ui-url.com" // Add your URL
    codeLink="https://github.com/your-github/spotify-ui-repo" // Replace with actual repo
  />
</SwiperSlide>


      </Swiper>

      <style>
{`
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    background-color: #1e3a8a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  .swiper-pagination {
    bottom: -30px !important;
  }
`}
</style>



  
    </div>

    
  );
};

export default Projects;
