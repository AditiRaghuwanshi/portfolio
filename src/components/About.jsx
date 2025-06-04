import { IoArrowForward } from 'react-icons/io5';
import aditi2 from '../assets/aditi.jpg';

const About = () => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center
      bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">

      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">About</h2>

        <div className="md:flex flex-wrap items-center gap-8">
          <img className="md:h-80 rounded-lg" src={aditi2} alt="Aditi" />

          <ul className="space-y-4 mt-4 md:mt-0">
            <li className="flex gap-3">
              <IoArrowForward size={30} className="mt-1" />
              <div className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  MERN Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I’m a MERN stack developer with experience working in frontend and a growing passion for backend.
                  I’ve worked on projects in both — frontend professionally, backend through self-learning and personal projects.
                  I love exploring new tech, building creative things, and improving my skills every single day.
                  Learning never stops for me — I’m always ready for a new challenge, always excited to grow. ✨
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
