import Card from "../../assets/image/Card.png";
import Icons1 from "../../assets/image/icon.png";
import Icons2 from "../../assets/image/icons2.png";
import Icons3 from "../../assets/image/icon3.png";
import Icons4 from "../../assets/image/icon4.png";
import { motion } from "framer-motion";
import { FadeUp } from "../About/About";

const MenuDeveloper = () => {
  return (
    <nav>
      <div>
        <div className="box py-6 text-center">
          <motion.h1
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-semibold uppercase text-secondary md:py-6"
          >
            for developers
          </motion.h1>
          <motion.h2
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className=" text-2xl md:text-6xl 
            font-semibold mx-auto w-[220px] md:w-[520px]
          leading-snug py-6"
          >
            Launch your own crypto wallet
          </motion.h2>
          <motion.p
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-gray-500 text-xs md:text-base 
            w-[350px] md:w-[550px] mx-auto"
          >
            Create a seamless and secure multi-currency wallet that is
            compatible with all major cryptocurrencies.
          </motion.p>
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="flex gap-4 py-14 justify-center items-center"
          >
            <button
              className="bg-secondary px-4 md:px-6 font-semibold 
              py-2 md:py-3
            hover:!scale-110
           hover:!shadow-xl transition-all duration-300 text-white text-xs md:text-sm
            rounded-md"
            >
              Get Started
            </button>
            <button
              className="bg-white px-4 md:px-6 py-2 md:py-3 border shadow-md
            font-semibold text-secondary text-xs md:text-sm rounded-md
            hover:!scale-110
           hover:!shadow-xl transition-all duration-300"
            >
              Read the docs
            </button>
          </motion.div>
        </div>

        {/*  */}
        <div
          className="block md:flex justify-center 
        items-center gap-28"
        >
          <motion.img
            variants={FadeUp(0.8)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            src={Card}
            alt=""
            className="w-[600px]"
          />
          <motion.div
            variants={FadeUp(0.9)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h1
              className="uppercase text-secondary text-sm
            font-semibold mx-auto text-center md:text-left "
            >
              Features
            </h1>
            <h2
              className="text-3xl text-center ml-10 md:ml-0
             md:text-left font-semibold 
            w-[300px] py-4"
            >
              Full of blockchain development services
            </h2>
            <p
              className="text-xs md:text-sm text-center
             md:text-left text-gray-500 mx-auto w-[300px] md:w-[350px]"
            >
              Cloud provides APIs, services and infrastructure across a breadth
              of primitives
            </p>
            <div
              className="flex gap-20 py-2 items-center 
            justify-center md:items-start md:justify-start
             "
            >
              <div className="flex justify-center items-center gap-3">
                <img src={Icons1} className="w-[30px]" />
                <h1 className="text-sm font-semibold">Liquidity</h1>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src={Icons2} className="w-[30px]" />
                <h1 className="text-sm font-semibold">Payments</h1>
              </div>
            </div>
            <div
              className="flex gap-24  items-center 
            justify-center md:items-start md:justify-start"
            >
              <div className="flex justify-center items-center gap-3">
                <img src={Icons4} className="w-[30px]" />
                <h1 className="text-sm font-semibold">Staking</h1>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src={Icons3} className="w-[30px]" />
                <h1 className="text-sm font-semibold">Trading</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default MenuDeveloper;
