import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { FadeUp } from "../About/About";

const Article = () => {
  const DataArticle = [
    {
      id: 1,
      title: "What is Coinbank Staking?",
      link: "#",
    },
    {
      id: 2,
      title: "What is Coinbank Earn?",
      link: "#",
    },
    {
      id: 3,
      title: "How do I sign up for a Coinbank account?",
      link: "#",
    },
    {
      id: 4,
      title: "How to Make a Payment to my Credit Card",
      link: "#",
    },
    {
      id: 5,
      title: "How to verify on Coinbank?",
      link: "#",
    },
  ];
  const DataArticle2 = [
    {
      id: 6,
      title: "Product Overview",
      link: "#",
    },
    {
      id: 7,
      title: "How do I create an API key?",
      link: "#",
    },
    {
      id: 8,
      title: "Are my funds insured?",
      link: "#",
    },
    {
      id: 9,
      title: "Why is my transaction pending?",
      link: "#",
    },
    {
      id: 10,
      title: "How do I earn credit card crypto rewards?",
      link: "#",
    },
  ];

  return (
    <nav>
      <div className="flex justify-center items-center py-16 bg-gradient-to-t from-white to-herocolor">
        <div>
          <motion.h1
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="text-2xl py-8 font-semibold"
          >
            Top articles
          </motion.h1>
          <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="block md:flex gap-16"
          >
            <div>
              {DataArticle.map((items) => (
                <li
                  key={items.id}
                  className="list-none py-3 text-sm md:text-base text-gray-500 hover:text-secondary"
                >
                  <a href={items.link} className="">
                    {items.title}
                  </a>
                </li>
              ))}
            </div>
            <div>
              {DataArticle2.map((item) => (
                <li
                  key={item.id}
                  className="list-none py-3 text-sm md:text-base text-gray-500 hover:text-secondary"
                >
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </div>
            <div>
              <div
                className="box bg-primary w-[200px] md:w-[350px] h-[150px] md:h-[240px] rounded-xl 
              items-center justify-center flex"
              >
                <div className="px-14">
                  <h1 className="text-white font-semibold text-lg md:text-2xl  md:mb-16">
                    Can’t find what you’re looking for?
                  </h1>
                  <a
                    href="#"
                    className="bg-secondary w-[140px] h-[30px] md:h-[40px] text-sm gap-2
                     text-white rounded-lg items-center justify-center flex hover:-translate-y-1 
                     duration-300 transition-all"
                  >
                    <MdOutlineEmail className=" text-xl items-center justify-center" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Article;
