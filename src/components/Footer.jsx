

const Footer = () => {
    return (
        <div className="absolute flex">
            <div id="Footer" className="flex justify-around text-white bg-[#465697] p-3 md:p-12 ">
                <div>
                    <h1 className="text-2xl md:text-4xl font-bold my-7"> Contact</h1>


                </div>


            </div>
            <ul className="mx-1 text-100 my-7">
                <li className="text-sm md:text-lg  text-black relative md:p-2">
                    Email:&nbsp;
                    <a href="mailto:raghuwanshiaditi6@gmail.com" className="text-sm md:text-lg text-blue-500 hover:underline text-100">
                        raghuwanshiaditi6@gmail.com
                    </a>


                </li>
                <li className="text-sm md:text-xl text-black relative md:p-2">
                    LinkedIn:&nbsp;
                    <a
                        href="https://www.linkedin.com/in/aditi-raghuwanshi-0a51001b9/"  // ← Replace this with your actual profile URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base text-blue-500 hover:underline"
                    >
                        Aditi Raghuwanshi
                    </a>
                </li>


                <li className="text-sm md:text-lg text-black relative md:p-2">
                    Phone:&nbsp;
                    <a
                        href="tel:7470723494"
                        className="text-sm md:text-base text-blue-500 hover:underline"
                    >
                        7470723494
                    </a>
                </li>


                



            </ul>
        </div>


    )
}

export default Footer




