import React from "react";
import { styles } from "../styles";
import { left, right, trapeziums, the_president } from "../assets";

const Hero = () => {
  return (
    <section className='relative w-full h-[200vh] m-auto border-2 border-pink z-19'>
                    {/* DIV WITH GREEN OVERLAY BACKGROUND COLOR WITH MIX-BLEND */}
      <div className='relative w-full h-[200vh] bg-overlay mix-blend-multiply'>
                    {/* SECOND DIV WICH SPREAD 60VH OF THE SCREEN TO REACH BENEATH THE HILLS OF THE ↑ BACKGROUND IMAGE */}
      <div className="relative border-2 border-maroon w-full h-[60vh] relative z-0 bg-hero-masked bg-no-repeat bg-top bg-100% mix-blend-multiply "></div>
        <div className='border-2 border-yellow relative bg-primary z-50 w-full h-[140vh] bg-map bg-bottom- bg-100% mix-blend-multiplyy '>
          <div
            className={`absolute inset-0 top-[0%] max-w-7xl mx-auto flex flex-col justify-start items-center gap-5 border-2 border-maroon z-1`}
          >
            {/* DIV 1 HOLDING THE ICONS AND TEXT */}
            <div
              className={`p-10 border-2 border-peach relative z-10`}
            >
              {/* <div styles={{backgroundImage: `${left}`, height: '20px', width:'10px'}}></div> */}
              <img
                src={left}
                alt='icon'
                className='h-[4.8em] w-auto absolute bottom-0 left-0'
              />
              <img
                src={right}
                alt='icon'
                className='h-[4.8em] w-auto absolute top-0 right-0'
              />
              {/* DIV HOLDING THE TEXT */}
              <div className='flex flex-col items-center justify-center text-center leading-32 mt-5 border-2 border-blue'>
                <p
                  className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-primary`}
                >
                  "&nbsp;Shaping the Future&nbsp;
                  <br className='sm:block hidden' />
                  of Climate Solutions&nbsp;
                  <br className='sm:block hidden' />
                  and Innovations in
                  <br className='sm:block hidden' />
                  Africa&nbsp;"
                </p>
              </div>{" "}
            </div>

                          {/* DIV HOLDING THE ICONS AND TEXT */}

            <div
              className={`p-10 border-2 border-peach text-center leading-[2.4rem] tracking-wide relative`}
            >
              <span
                className={`text-[32px] font-semibold font-poppins text-primary`}
              >
                "&nbsp;Forging a Path
                <br className='sm:block hidden' />
                to a New
                <br className='sm:block hidden' />
                Paradigm&nbsp;"
              </span>
            </div>
            {/*        
          <p className={`text-[32px] font-semibold font-poppins text-primary`}>
            "&nbsp;Forging a Path"
            <br className='sm:block hidden' />
            to a New
            <br className='sm:block hidden' />
            Paradigm&nbsp;"
          </p>
      
        <span className='max-w-2xl mx-auto px-32 text-center font-normal text-[20px]'>
          &quot;&nbsp;Welcome to the first-ever Climate
          <br className='sm:block hidden' />
          Action Summit! This global gathering is
          <br className='sm:block hidden' />
          dedicated to rallying the world to take
          <br className='sm:block hidden' />
          urgent action on the climate crisis. Our
          <br className='sm:block hidden' />
          focus is on the opportunities that Africa
          <br className='sm:block hidden' />
          presents for achieving global net zero.
          <br className='sm:block hidden' />
          Join us in shaping a sustainable future
          <br className='sm:block hidden' />
          for all.&nbsp;&quot;
        </span>
    
          <p className='text-[28px] font-normal'>H.E. William Ruto&#44;</p>
          <p>
            the President of the Republic of Kenya&#44; &amp; Chair of the
            <br className='sm:block hidden' />
            Committee of African Heads of State &amp; Government
            <br className='sm:block hidden' />
            <p className='pt-4'>on Climate Change</p>
          </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
