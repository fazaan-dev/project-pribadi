import User from "../../assets/image/User.png";
import { motion } from "framer-motion";
import { FadeUp } from "./About";
import image1 from "../../assets/image/image.png";
import image2 from "../../assets/image/image-1.png";

const Testi = () => {
  return (
    <nav className="bg-gradient-to-b from-herocolor to-white">
      <div className="container py-12">
        <h1 className="text-center text-secondary text-9xl">“</h1>
        <div className="block items-center justify-center gap-5">
          {" "}
          <motion.p
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-center text-2xl md:text-5xl font-medium"
          >
            Its low fees, high rates for staking, and <br />
            futures markets are all a draw.
          </motion.p>
          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="flex items-center gap-4 py-6 justify-center"
          >
            <img src={User} alt="" className="w-[40px] md:w-[50px]" />
            <div>
              <h1 className="font-medium text-sm md:text-lg">John Clayton</h1>
              <p>Investor</p>
            </div>
          </motion.div>
        </div>

        <h1 className="text-center text-secondary text-9xl">”</h1>
      </div>

      {/*  */}

      <div>
        <div className="block md:flex gap-x-20  w-[330px] xl:w-[500px] mx-auto justify-center items-center py-8">
          <motion.img
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            src={image1}
            alt=""
            className="py-3"
          />
          <motion.img
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            src={image2}
            alt=""
          />
        </div>
        <div className="block md:flex items-center justify-center py-2">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-xl text-center md:text-left mx-auto md:text-5xl font-semibold w-[250px] md:w-[550px]"
          >
            The power to chart your own financial course
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-xs text-center md:text-left mx-auto md:text-sm w-[300px] py-2 md:w-[500px] text-gray-400"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.
          </motion.p>
        </div>
      </div>
    </nav>
  );
};

export default Testi;
