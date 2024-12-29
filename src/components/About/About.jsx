import AboutImg from "../../assets/image/about.png";
import { motion } from "framer-motion";
import { SliderRight } from "../../utility/animate";
import CountUp from "react-countup";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easaInOut",
      },
    },
  };
};

const About = () => {
  return (
    <nav>
      <div className=" w-full bg-gradient-to-t from-herocolor to-white">
        <div>
          <motion.h1
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="py-8 mx-auto text-center uppercase text-secondary font-semibold"
          >
            About
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-3xl  py-4 leading-tight font-semibold
          text-center md:text-5xl md:!leading-snug"
          >
            Building cryptocurrency <br />
            platform for everyone
          </motion.h2>
          <motion.img
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            src={AboutImg}
            alt=""
            className="w-[350px] md:w-[500px] mx-auto py-6 lg:w-[900px]"
          />
        </div>
        <div className="block  lg:flex py-4 items-center justify-center gap-32  px-6 ">
          <mdiv>
            <motion.h1
              variants={{ SliderRight }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="font-semibold text-3xl py-3"
            >
              Our Mission
            </motion.h1>
            <motion.p
              variants={{ SliderRight }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="text-gray-500 "
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. <br />
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat <br /> sunt nostrud amet. Amet minim mollit non
              deserunt ullamco est sit aliqua <br /> dolor.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffnes: 100, delay: 0.9 }}
              href="#"
              className="text-secondary font-semibold !leading-snug text-sm"
            >
              Learn More
            </motion.a>
          </mdiv>
          <div>
            <div className="">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex py-4 items-center"
              >
                <a
                  href="#"
                  className="px-8 py-4 border border-gray-300 max-w-96
              rounded-lg flex gap-20 items-center"
                >
                  <h1 className="text-sm md:text-2xl font-semibold">
                    1 millions
                  </h1>
                  <p className="text-xs md:text-sm text-gray-500">
                    Average daily volume
                  </p>
                </a>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                <a
                  href="#"
                  className="px-8 py-4 border border-gray-300 max-w-80
              rounded-lg flex gap-20 items-center"
                >
                  <h1 className="text-sm md:text-2xl font-semibold">
                    <CountUp
                      start={0}
                      end={300}
                      duration={3}
                      enableScrollSpy={true}
                      scrollSpyDelay={true}
                    />
                    +
                  </h1>
                  <p className="text-xs md:text-xs text-gray-500">
                    Transactions per seconds
                  </p>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default About;
