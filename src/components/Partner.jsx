import React from "react";
import { styles } from "../styles";

const Partner = () => {
  return (
    <section className='flex flex-row items-center justify-center w-full h-auto m-auto font-bold text-primary text-[14px] font-bold bg-black'>
      <div className={`${styles.paddingX} grid grid-cols-2 gap-8 py-16`}>
        {/* LEFT DIV */}
        <div className='flex flex-col flex-wrap items-end justify-top gap-6 px-4 py-4'>
          <p className='text-[40px] text-white'>Participate</p>
          <span className='text-[18px] font-light text-right font-sans'>
            Take Action and become
            <br className='sm:block hidden' />
            a partner today
          </span>
        </div>
        {/* RIGHT DIV */}
        <div className='flex flex-col items-start flex-wrap justify-start gap-8 px-4 py-8'>
          <span className='font-sans font-light leading-relaxed'>
            Join us at the Climate Action Summit and be part of a global{" "}
            <br className='sm:block hidden' />
            movement to tackle the climate crisis and build a brighter&#44;{" "}
            <br className='sm:block hidden' /> more sustainable future for all.
          </span>
          <button class='bg-grey text-secondary hover:bg-transparent outline-none border-none hover:outline-offset-1 hover:outline-grey font-bold text-[16px] font-poppins py-4 px-16 rounded-3xl'>
            Registration
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
