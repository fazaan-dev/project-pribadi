import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Founders1 from "../../assets/image/founder1.png";
import Founders2 from "../../assets/image/founder2.png";
import Founders3 from "../../assets/image/founder3.png";
import { motion } from "framer-motion";
import { FadeUp } from "./About";

const CoFounder = () => {
  return (
    <nav>
      <div className="bg-gradient-to-t from-herocolor to-white">
        <div className="py-10 ">
          <motion.h1
            variants={FadeUp(0.1)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-4xl text-center font-semibold py-8 "
          >
            Our Founders
          </motion.h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-12">
            {/* FOUNDER */}
            <motion.div
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="box w-80 h-80 px-9 py-3 rounded-xl
         bg-slate-50 border shadow-xl "
            >
              <div className="text-center block items-center justify-center py-10 ">
                <img
                  src={Founders1}
                  alt=""
                  className="w-[100px] mx-auto mt-auto py-4 flex items-center justify-center"
                />
                <h1 className="text-lg font-semibold  ">Ozan Kabak</h1>
                <p className="text-sm font-medium text-gray-400 py-2">
                  Founder & CEO, Coinbank
                </p>
                <div
                  className="flex gap-4 text-gray-400 text-center items-center
            justify-center"
                >
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </motion.div>
            {/* FOUNDER */}
            <motion.div
              variants={FadeUp(0.3)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="box w-80 h-80 px-9 py-3 rounded-xl
         bg-slate-50 border shadow-xl"
            >
              <div className="text-center block items-center justify-center py-10 ">
                <img
                  src={Founders2}
                  alt=""
                  className="w-[100px] mx-auto mt-auto py-4 flex items-center justify-center"
                />
                <h1 className="text-lg font-semibold  ">Ali Petra</h1>
                <p className="text-sm font-medium text-gray-400 py-2">
                  Founder & CEO, Coinbank
                </p>
                <div
                  className="flex gap-4 text-gray-400 text-center items-center
            justify-center"
                >
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </motion.div>
            {/* FOUNDER */}
            <motion.div
              variants={FadeUp(0.4)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="box w-80 h-80 px-9 py-3 rounded-xl
         bg-slate-50 border shadow-xl"
            >
              <div className="text-center block items-center justify-center py-10 ">
                <img
                  src={Founders3}
                  alt=""
                  className="w-[100px] mx-auto mt-auto py-4 flex items-center justify-center"
                />
                <h1 className="text-lg font-semibold  ">Marcella Melano</h1>
                <p className="text-sm font-medium text-gray-400 py-2">
                  Founder & CEO, Coinbank
                </p>
                <div
                  className="flex gap-4 text-gray-400 text-center items-center
            justify-center"
                >
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CoFounder;
