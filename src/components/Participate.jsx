import React from "react";
import { styles } from "../styles";

const Participate = () => {
  return (
    <section className='flex flex-row items-center justify-center w-full h-auto m-auto font-bold text-maroon bg-sectiondrop bg-cover bg-no-repeat'>
      {/* bg-sectiondrop bg-cover bg-no-repeat */}
      <div
        className={`text-[18px] flex flex-row justify-center h-[50vh] bg-gradient-mask `}
      >
        <div className='absolute -mt-6 py-3 px-16 bg-grey rounded-3xl h-auto w-auto '>
          Become a Partner
        </div>
      </div>
    </section>
  );
};

export default Participate;
