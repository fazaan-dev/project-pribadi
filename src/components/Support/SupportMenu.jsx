import { BiSearch } from "react-icons/bi";
import icons1 from "../../assets/image/icons1.png";
import Other from "../../assets/image/other.png";
import Security from "../../assets/image/security.png";
import Funding from "../../assets/image/funding.png";
import Myaccount from "../../assets/image/myacount.png";
import Trading from "../../assets/image/trading.png";
import { motion } from "framer-motion";
import { FadeUp } from "../About/About";

const SupportMenu = () => {
  return (
    <nav>
      <div className="bg-gradient-to-t from-herocolor to-white">
        <div className="text-center py-14">
          <motion.h1
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl text-secondary font-semibold py-8"
          >
            How can we help?
          </motion.h1>
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="p-3 md:p-4 w-[250px] md:w-[500px] rounded-xl bg-herocolor flex items-center">
              <BiSearch className="text-3xl md:text-xl" />
              <input
                type="search"
                placeholder="Search questions, keywords, articles"
                className="px-2 bg-transparent outline-none text-left text-xs md:text-lg
                ml-1 w-[450px]"
              />
            </div>
          </motion.div>
        </div>

        {/* CARD */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffnes: 100, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-2 md:gap-12 "
          >
            <div
              className="box bg-white shadow-xl w-[180px] md:w-[350px] h-[180px] md:h-[300px] rounded-3xl
           hover:-translate-y-3 duration-300 transition-all flex justify-center items-center"
            >
              <div className="justify-center items-center py-12">
                <img
                  src={icons1}
                  alt=""
                  className="w-[50px] md:w-[90px] mx-auto py-4"
                />
                <h1 className="text-xs md:text-2xl font-semibold text-center">
                  Getting started
                </h1>
                <p className="text-gray-400 mx-auto text-xs md:text-base px-3 w-[200px] py-2 text-center">
                  Everything you need to start using Coinbank.
                </p>
              </div>
            </div>
            {/* BOX2 */}
            <div
              className="box bg-white shadow-xl w-[180px] md:w-[350px] h-[180px] md:h-[300px] rounded-3xl
           hover:-translate-y-3 duration-300 transition-all flex justify-center items-center"
            >
              <div className="justify-center items-center py-12">
                <img
                  src={Myaccount}
                  alt=""
                  className="w-[50px] md:w-[90px] mx-auto py-4"
                />
                <h1 className="text-xs md:text-2xl font-semibold text-center">
                  Managing my account
                </h1>
                <p className="text-gray-400 mx-auto text-xs md:text-base px-3 w-[200px] py-2 text-center">
                  Manage your account, settings, and more.
                </p>
              </div>
            </div>
            {/* BOX3 */}

            <div
              className="box bg-white shadow-xl w-[180px] md:w-[350px] h-[180px] md:h-[300px] rounded-3xl
           hover:-translate-y-3 duration-300 transition-all flex justify-center items-center"
            >
              <div className="justify-center items-center py-12">
                <img
                  src={Trading}
                  alt=""
                  className="w-[50px] md:w-[90px] mx-auto py-4"
                />
                <h1 className="text-xs md:text-2xl font-semibold text-center">
                  Trading
                </h1>
                <p className="text-gray-400 mx-auto text-xs md:text-base px-3 w-[200px] py-2 text-center">
                  Learn Buy, sell, send, or receive cryptocurrencies.
                </p>
              </div>
            </div>

            <div
              className="box bg-white shadow-xl w-[180px] md:w-[350px] h-[180px] md:h-[300px] rounded-3xl
           hover:-translate-y-3 duration-300 transition-all flex justify-center items-center"
            >
              <div className="justify-center items-center py-12">
                <img
                  src={Funding}
                  alt=""
                  className="w-[50px] md:w-[90px] mx-auto py-4"
                />
                <h1 className="text-xs md:text-2xl font-semibold text-center">
                  Funding
                </h1>
                <p className="text-gray-400 mx-auto text-xs md:text-base px-3 w-[200px] py-2 text-center">
                  Learn how to transfer funds to and from your account.
                </p>
              </div>
            </div>
            {/* BOX2 */}
            <div
              className="box bg-white shadow-xl w-[180px] md:w-[350px] h-[180px] md:h-[300px] rounded-3xl
           hover:-translate-y-3 duration-300 transition-all flex justify-center items-center"
            >
              <div className="justify-center items-center py-12">
                <img
                  src={Security}
                  alt=""
                  className="w-[50px] md:w-[90px] mx-auto py-4"
                />
                <h1 className="text-xs md:text-2xl font-semibold text-center">
                  Privacy and security
                </h1>
                <p className="text-gray-400 mx-auto text-xs md:text-base px-3 w-[200px] py-2 text-center">
                  Help secure and protect your account.
                </p>
              </div>
            </div>
            {/* BOX3 */}

            <div
              className="box bg-white shadow-xl w-[180px] md:w-[350px] h-[180px] md:h-[300px] rounded-3xl
           hover:-translate-y-3 duration-300 transition-all flex justify-center items-center"
            >
              <div className="justify-center items-center py-12">
                <img
                  src={Other}
                  alt=""
                  className="w-[50px] md:w-[90px] mx-auto py-4"
                />
                <h1 className="text-xs md:text-2xl font-semibold text-center">
                  Other topics
                </h1>
                <p className="text-gray-400 mx-auto text-xs md:text-base px-3 w-[200px] py-2 text-center">
                  Learn about API, common scams, referral program, and more.
                </p>
              </div>
            </div>
            {/* BOX4 */}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default SupportMenu;
