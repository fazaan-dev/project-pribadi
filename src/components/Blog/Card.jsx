import Card1 from "../../assets/image/card1.png";
import Card2 from "../../assets/image/card2.png";
import Card3 from "../../assets/image/card3.png";
import Card4 from "../../assets/image/card4.png";
import Card5 from "../../assets/image/card5.png";
import Card6 from "../../assets/image/card6.png";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <nav>
      <div>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="box-image grid items-center md:px-6 md:flex md:flex-row
        justify-center py-6 px-20 mx-auto gap-14"
        >
          <div className="hover:-translate-y-4 transition-all duration-300">
            <img src={Card1} alt="" className="w-80 rounded-t-lg" />
            <div className=" w-80 h-24 rounded-b-lg shadow-lg ">
              <h1 className="text-lg font-semibold py-4 px-4 ">
                How to Use PayPal to Buy Cryptocurrencies
              </h1>
            </div>
          </div>

          <div className="hover:-translate-y-4 transition-all duration-300">
            <img src={Card2} alt="" className="w-80 rounded-t-lg" />
            <div className=" w-80 h-24 rounded-b-lg shadow-lg ">
              <h1 className="text-lg font-semibold py-4 px-4 ">
                Why You Should Trade Cryptocurrencies in Coinbank
              </h1>
            </div>
          </div>

          <div className="hover:-translate-y-4 transition-all duration-300">
            <img src={Card3} alt="" className="w-80 rounded-t-lg" />
            <div className=" w-80 h-24 rounded-b-lg shadow-lg ">
              <h1 className="text-lg font-semibold py-4 px-4 ">
                Three Reasons to Trade in Coinbank’s platform
              </h1>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="box-image grid items-center md:px-6 md:flex md:flex-row
        justify-center py-6 px-20 mx-auto gap-14"
        >
          <div className="hover:-translate-y-4 transition-all duration-300">
            <img src={Card4} alt="" className="w-80 rounded-t-lg" />
            <div className=" w-80 h-24 rounded-b-lg shadow-lg ">
              <h1 className="text-lg font-semibold py-4 px-4 ">
                GUSD Hits Its $20B Market Cap Milestone
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="hover:-translate-y-4 transition-all duration-300">
            <img src={Card5} alt="" className="w-80 rounded-t-lg" />
            <div className=" w-80 h-24 rounded-b-lg shadow-lg ">
              <h1 className="text-lg font-semibold py-4 px-4 ">
                Crypto Investors Yanked Money From ETH Products
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="hover:-translate-y-4 transition-all duration-300">
            <img src={Card6} alt="" className="w-80 rounded-t-lg" />
            <div className=" w-80 h-24 rounded-b-lg shadow-lg ">
              <h1 className="text-lg font-semibold py-4 px-4 ">
                Why Litecoin is Worth Paying Attention To
              </h1>
            </div>
          </div>
        </motion.div>

        {/* OUR MISSONS */}
        <div className="container py-20">
          <div
            className="box w-[1100px] h-96 rounded-3xl
           py-8 bg-primary mx-auto flex items-center justify-center"
          >
            <div>
              <h1
                className="text-white text-4xl font-medium py-4
              text-center"
              >
                Join our mission
              </h1>
              <p className="text-gray-300 text-sm font-extralight text-center mx-auto max-w-[500px]">
                Join our mission to bring greater choice, independence, and
                opportunity to individuals around the world.
              </p>
              <div className="flex justify-center py-6">
                <a
                  href="#"
                  className="px-7 py-3  bg-secondary font-medium text-white
                 rounded-lg hover:!-translate-y-2 transition-all duration-300"
                >
                  Visit Careers Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Card;
