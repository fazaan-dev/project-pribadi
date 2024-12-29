import CountUp from "react-countup";
import { motion } from "framer-motion";

const NumberCounter = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffnes: 100, delay: 0.7 }}
        className="container justify-center grid grid-cols-3 
        md:grid-cols-3
      gap-4"
      >
        <div className="flex flex-col items-center justify-center">
          <p className=" text-lg md:text-3xl font-semibold">1 millions</p>
          <p className="text-gray-400 text-xs md:text-xs">Volume traded</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm md:text-3xl font-semibold">
            <CountUp
              start={0}
              end={50}
              duration={5}
              enableScrollSpy={true}
              scrollSpyDelay={true}
            />
            +
          </p>
          <p className="text-gray-400 text-xs md:text-xs">
            Countries supported
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm md:text-3xl font-semibold">1 platform</p>
          <p className="text-gray-400  mx-auto text-center text-xs md:text-xs">
            For crypto wallet & trading
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NumberCounter;
