// import Projectcard from './Projectcard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import "./styles.css"; 
// import chitchat from '../assets/chitchat.png';
// import spotify from '../assets/spotify.png';
// import nike from '../assets/nike.png';
// import notes from '../assets/notes.png';
// import { Navigation, Pagination } from 'swiper/modules';

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//       <h1 className="text-2xl md:text-4xl font-bold mb-10">Projects</h1>

//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="w-full"
//       >
//   <SwiperSlide>
//   <Projectcard
//     image={chitchat}
//     title="Chatting Application"
//     main="This is a chat app made with React, Node.js, Socket.io (MERN)."
//     demoLink="https://chit-chat-frontend-sooty.vercel.app/"
//     frontendLink="https://github.com/AditiRaghuwanshi/ChitChat-frontend"
//     backendLink="https://github.com/AditiRaghuwanshi/ChitChat"
//   />
// </SwiperSlide>

// <SwiperSlide>
//   <Projectcard
//     image={notes}
//     title="Notes Application"
//     main="A MERN notes app where users can CRUD notes."
//     demoLink="https://notes-ten-chi.vercel.app/"
//     frontendLink="https://github.com/AditiRaghuwanshi/Notes"
//     backendLink="https://github.com/AditiRaghuwanshi/Notes-Backend"
//   />
// </SwiperSlide>

// <SwiperSlide>
//   <Projectcard
//     image={nike}
//     title="Nike Website"
//     main="A modern Nike website clone built with React and styled using TailwindCSS."
//     demoLink="https://aditi-raghuwanshi.netlify.app/"
//     codeLink="https://github.com/AditiRaghuwanshi/NikeTailwindProject"
//   />
// </SwiperSlide>

// <SwiperSlide>
//   <Projectcard
//     image={spotify}
//     title="Spotify UI"
//     main="A Spotify-like UI created using React with dummy data for layout practice."
//     demoLink="https://spotify-frontend-sigma-olive.vercel.app/"
//     codeLink="https://github.com/AditiRaghuwanshi/SpotifyFrontend"
//   />
// </SwiperSlide>



//       </Swiper>

//       <style>
// {`
//   .swiper-button-next,
//   .swiper-button-prev {
//     width: 40px;
//     height: 40px;
//     background-color: #1e3a8a;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   }

//   .swiper-button-next::after,
//   .swiper-button-prev::after {
//     font-size: 20px;
//     font-weight: bold;
//     color: white;
//   }

//   .swiper-pagination {
//     bottom: -30px !important;
//   }
// `}
// </style>



  
//     </div>

    
//   );
// };

// export default Projects;












// import Projectcard from './Projectcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css"; 

import {  Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <main>
          

    <div  className="container">
      <h1 className="text-2xl md:text-4xl font-bold mb-10 text-white">Projects</h1>


      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        initialSlide={2}
        centeredSlides={true}
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide={true}
        navigation
        pagination={{ el: ".swiper-pagination", clickable: true }}
        breakpoints={{
          320: { spaceBetween: 40 },
          430: { spaceBetween: 50 },
          580: { spaceBetween: 70 },
          650: { spaceBetween: 30 },
        }}
        
      >
  <SwiperSlide className="swiper-slide slide-1">
   <div className="title">
    <h1>Chatting Application</h1>
</div>
<div className="content">
  <p>This is a chat app made with React, Node.js, Socket.io (MERN).</p>
</div>
<div className="genre">
  <span style={{"--i": 1}}>
    <a href="https://chit-chat-frontend-sooty.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
      </span>
      <span style={{"--i": 2}}>
    <a href="https://github.com/AditiRaghuwanshi/ChitChat-frontend" target="_blank" rel="noopener noreferrer">Frontend</a>
    </span> 
    <span style={{"--i": 3}}>
    <a href="https://github.com/AditiRaghuwanshi/ChitChat" target="_blank" rel="noopener noreferrer">Backend</a>
  </span>

</div>

</SwiperSlide>

<SwiperSlide className="swiper-slide slide-2">


  <div className="title">
    <h1>Notes Application</h1>
</div>
<div className="content">
  <p>A MERN notes app where users can CRUD notes.</p>
</div>
<div className="genre">
  <span style={{"--i": 1}}>
    <a href="https://notes-ten-chi.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
    </span>
     <span style={{"--i": 2}}>
    <a href="https://github.com/AditiRaghuwanshi/Notes" target="_blank" rel="noopener noreferrer">Frontend</a>
    </span>
     <span style={{"--i": 3}}>
    <a href="https://github.com/AditiRaghuwanshi/Notes-Backend" target="_blank" rel="noopener noreferrer">Backend</a>
  </span>

</div>
 
</SwiperSlide>

<SwiperSlide className="swiper-slide slide-3">
  
  <div className="title">
    <h1>Nike Website</h1>
</div>
<div className="content">
  <p>A modern Nike website clone built with React and styled using TailwindCSS.</p>
</div>
<div className="genre">
  <span style={{"--i": 1}}>
    <a href="https://aditi-raghuwanshi.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
   </span>
     <span style={{"--i": 2}}>
    <a href="https://github.com/AditiRaghuwanshi/NikeTailwindProject" target="_blank" rel="noopener noreferrer">Code</a>


  </span>

</div>
 
</SwiperSlide>

<SwiperSlide className="swiper-slide slide-4">
  <div className="title">
    <h1>Spotify UI</h1>
</div>
<div className="content">
  <p>A Spotify-like UI created using React with dummy data for layout practice.</p>
</div>
<div className="genre">
  <span style={{"--i": 1}}>
    <a href="https://spotify-frontend-sigma-olive.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a>
  </span>
  <span style={{"--i": 2}}>
    <a href="https://github.com/AditiRaghuwanshi/SpotifyFrontend" target="_blank" rel="noopener noreferrer">Code</a>


  </span>

</div>

 

</SwiperSlide>
{/* 
<div className="swiper-pagination"></div> */}

      </Swiper>

     


  
    </div>
    </main>

    
  );
};

export default Projects;