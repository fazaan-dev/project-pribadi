import Dogecoin from "../../assets/image/koin/Dogecoin.png";
import Ogn from "../../assets/image/koin/OGN.png";
import Btc from "../../assets/image/koin/Bitcoin.png";
import Act from "../../assets/image/koin/ACT.png";
import Eth from "../../assets/image/koin/ETH.png";
import Dollar from "../../assets/image/koin/dollar.png";

import Supercharge1 from "../../assets/image/Supercharge1.png";
import Supercharge2 from "../../assets/image/Supercharge2.png";
import { motion } from "framer-motion";
import FeaturesImg from "../../assets/image/features.png";
import { FadeUp } from "../About/About";

const Features = () => {
  return (
    <nav>
      <div className="bg-gradient-to-t from-white to-herocolor">
        {/* FETAURES1 */}
        <div className="py-8 block items-center justify-center text-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-sm text-secondary font-semibold uppercase py-4"
          >
            Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="text-2xl text-center md:text-5xl font-semibold w-[300px] md:w-[600px] mx-auto py-4"
          >
            Get a bird’s eye view of your crypto investments
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-sm py-4 text-center w-[280px] md:w-[500px] mx-auto text-gray-400"
          >
            Keep up on all the latest trends in the crypto industry and stay
            ahead of the market.
          </motion.p>
          <motion.img
            variants={FadeUp(0.5)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            src={FeaturesImg}
            alt=""
            className="w-[350px] md:w-[600px] mx-auto py-16 xl:w-[1200px]"
          />
        </div>
        {/* FEATURES2 */}
        <div className="text-center mx-auto">
          <motion.h1
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-sm text-secondary font-semibold uppercase py-4"
          >
            Features
          </motion.h1>
          <motion.p
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-2xl text-center md:text-5xl md:w-[700px] font-semibold  mx-auto py-4"
          >
            Many type of Blockchains
          </motion.p>
          <motion.p
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-sm py-4 text-center w-[300px] md:w-[500px] mx-auto text-gray-400"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </motion.p>
          <div className="flex items-center justify-center gap-">
            <div className="box grid grid-cols-3 md:grid-cols-6 mx-auto justify-center items-center md:gap-14 gap-3 py-14">
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                src={Dogecoin}
                alt=""
                className="w-24 h-28"
              />
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                src={Ogn}
                alt=""
                className="w-24 h-28"
              />
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                src={Btc}
                alt=""
                className="w-24 h-28"
              />
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                src={Act}
                alt=""
                className="w-24 h-28"
              />
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                src={Eth}
                alt=""
                className="w-24 h-28"
              />
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
                src={Dollar}
                alt=""
                className="w-24 h-28"
              />
            </div>
          </div>
        </div>
        {/* FEATURES3 */}

        <div className="text-center mx-auto py-10">
          <motion.h1
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-sm text-secondary font-semibold uppercase py-4"
          >
            Features
          </motion.h1>
          <motion.p
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-2xl text-center md:text-5xl font-semibold md:w-[600px] mx-auto py-4"
          >
            Supercharge your trades with advanced features
          </motion.p>
          <div className="box grid grid-cols-1 md:grid-cols-2 md:flex gap-6 items-center justify-center py-20">
            <div className="flex justify-center items-center">
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="shadow-2xl shadow-herocolor rounded-xl"
              >
                <img
                  src={Supercharge1}
                  alt=""
                  className="w-[350px] h-[180px] md:w-[550px] md:h-[300px] "
                />
                <div className="bg-white shadow-lg rounded-b-lg w-[350px] h-[100px] md:w-[550px] md:h-[150px]">
                  <h1 className="text-left px-7 md:py-2 text-2xl font-semibold">
                    Grow and earn everyday
                  </h1>
                  <p className="text-left px-7 font-light text-xs md:text-sm text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center items-center">
              <motion.div
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="shadow-2xl shadow-herocolor rounded-xl"
              >
                <img
                  src={Supercharge2}
                  alt=""
                  className="w-[350px] h-[180px] md:w-[550px] md:h-[300px] "
                />
                <div className="bg-white shadow-lg rounded-b-lg w-[350px] h-[100px] md:w-[550px] md:h-[150px]">
                  <h1 className="text-left px-7 md:py-2 text-2xl font-semibold">
                    Grow and earn everyday
                  </h1>
                  <p className="text-left px-7 font-light text-xs md:text-sm text-gray-500">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Features;
