import HerImg from "../assets/image/hero.png";
import { motion } from "framer-motion";
import { SliderRight } from "../utility/animate";

const Hero = () => {
  return (
    <div className="bg-white">
      <div
        className="container  grid grid-cols-1 lg:grid-cols-2
      min-h-[650px] relative gap-50"
      >
        <div
          className="flex flex-col justify-center  py-14
           md:pr-16 xl:pr-40 md:py-0 sm:text-center md:text-left
          
        "
        >
          <div>
            <motion.p
              variants={SliderRight(0.4)}
              initial="hidden"
              animate="visible"
              className="uppercase text-secondary text-center  md:text-left font-semibold
            text-sm "
            >
              Sign in to your secure wallet!
            </motion.p>
            <motion.h1
              variants={SliderRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-xl text-center md:text-4xl xl:text-6xl font-semibold md:text-left md:w-[600px]
             !leading-tight space-x-4 py-2 "
            >
              The next-gen crypto wallet & trading platform
            </motion.h1>
            <motion.p
              variants={SliderRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-gray-500 py-7  text-center md:text-left"
            >
              All of your cryptocurrency in one place — from Bitcoin and
              Ethereum to Litecoin and Ripple.
            </motion.p>
          </div>
          <motion.div
            variants={SliderRight(0.6)}
            initial="hidden"
            animate="visible"
            className="flex lg:block gap-3 md:space-x-4 justify-center md:justify-start 
           items-center md:py-8"
          >
            <input
              type="text"
              placeholder="Your email address"
              className="border rounded-lg px-6
              py-2 text-sm"
            />
            <button
              className="text-white px-4 py-3 bg-secondary md:px-6 md:py-3
             font-semibold text-xs
             rounded-lg hover:!scale-110
           hover:!shadow-xl transition-all duration-300"
            >
              Get Started
            </button>
          </motion.div>
        </div>
        <div className="flex justify-center items-center ">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffnes: 100, delay: 0.6 }}
            src={HerImg}
            alt=""
            className="w-[400px] md:w-[600px] lg:w-[600] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
