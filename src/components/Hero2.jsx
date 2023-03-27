import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { left, right, trapeziums, the_president } from "../assets";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='relative w-full h-auto m-auto bg-backdrop bg-no-repeat bg-center bg-100%  z-19'
    >
      {/* DIV WITH GREEN OVERLAY BACKGROUND COLOR WITH MIX-BLEND */}
      <div className='relative w-full h-auto'>
        {/* SECOND DIV WICH SPREAD 60VH OF THE SCREEN TO REACH BENEATH THE HILLS OF THE ↑ BACKGROUND IMAGE */}

        <div
          className={`relative inset-0 top-[10%] pt-[20%] max-w-7xl mx-auto flex flex-col justify-start items-center gap-16 z-1`}
        >
          {/* DIV 1 HOLDING THE ICONS AND TEXT */}
          <div className={`p-8 max-h-auto relative z-10`}>
            <motion.img
              initial='hidden'
              whileInView='show'
              variants={slideIn("up", "tween", 0.9, 1)}
              src={left}
              alt='icon'
              className='h-[4.8em] w-auto absolute bottom-0 left-0'
            />
            <motion.img
              initial='hidden'
              whileInView='show'
              variants={slideIn("right", "tween", 1.2, 1)}
              src={right}
              alt='icon'
              className='h-[4.8em] w-auto absolute top-0 right-0'
            />
            {/* DIV HOLDING THE TEXT */}
            <div className='flex flex-col items-center justify-center text-center leading-48 mt-5 '>
              <motion.p
                variants={textVariant(1.3)}
                className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-primary`}
              >
                "&nbsp;Shaping the Future&nbsp;
                <br className='sm:block hidden' />
                of Climate Solutions&nbsp;
                <br className='sm:block hidden' />
                and Innovations in
                <br className='sm:block hidden' />
                Africa&nbsp;"
              </motion.p>
            </div>{" "}
          </div>

          {/* DIV HOLDING THE ICONS AND TEXT */}

          <div
            className={`p-10 text-center leading-[2.4rem] tracking-wide relative pt-48`}
          >
            <span
              className={`text-[32px] font-semibold font-poppins text-primary`}
            >
              <motion.span
                initial='hidden'
                whileInView='show'
                variants={textVariant(0.6)}
              >
                "&nbsp;Forging a Path
                <br className='sm:block hidden' />
              </motion.span>
              <motion.span
                initial='hidden'
                whileInView='show'
                variants={textVariant(1)}
              >
                to a New
              </motion.span>
              <br className='sm:block hidden' />
              <motion.span
                initial='hidden'
                whileInView='show'
                variants={textVariant(1.2)}
              >
                Paradigm&nbsp;"
              </motion.span>
            </span>
          </div>

          <div className={`p-10 text-center relative`}>
            <motion.img
              initial='hidden'
              whileInView='show'
              variants={slideIn("up", "tween", 1.2, 1)}
              src={trapeziums}
              className={`h-auto w-16`}
            />
          </div>
          <motion.div
            initial='hidden'
            whileInView='show'
            variants={textVariant(0.3)}
            className='flex items-center justify-center relative'
          >
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
          </motion.div>

          <div
            className={`leading-[2.4rem] tracking-wide relative w-auto flex flex-row items-center justify-center`}
          >
            <span className='text-center'>
              <p className='text-[28px] font-normal'>H.E. William Ruto&#44;</p>
              <p>
                the President of the Republic of Kenya&#44; &amp; Chair of the
                <br className='sm:block hidden' />
                Committee of African Heads of State &amp; Government
                <br className='sm:block hidden' />
                <p className='pt-4'>on Climate Change</p>
              </p>
            </span>
            <img src={the_president} alt='President' className='w-[25vw]' />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
