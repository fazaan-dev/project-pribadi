import Patner1 from "../../assets/image/frame.png";
import Patner2 from "../../assets/image/frame2.png";
import Patner3 from "../../assets/image/frame3.png";
import Patner4 from "../../assets/image/frame4.png";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <div className="">
      <div className="px-10 py-16 w-full bg-gradient-to-t from-herocolor to-white ">
        <div>
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="text-secondary text-sm font-semibold"
            >
              PARTNERS
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-4xl font-semibold py-6"
            >
              We’re backed by the best
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-gray-600"
            >
              Trusted by these blockchains leading industries{" "}
            </motion.p>
          </div>
        </div>

        <div className="flex justify-center items-center py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-20 justify-center  ">
            <>
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                src={Patner1}
                alt=""
                className="w-[150px]"
              />

              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                src={Patner2}
                alt=""
                className="w-[150px]"
              />

              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                src={Patner3}
                alt=""
                className="w-[150px]"
              />

              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                src={Patner4}
                alt=""
                className="w-[150px]"
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
