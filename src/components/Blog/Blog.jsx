import Thumbnail from "../../assets/image/thumbnail.png";
import { motion } from "framer-motion";
import { FadeUp } from "../About/About";
import Card from "./Card";

const BlogData = [
  {
    id: 1,
    title: "Trending",
    link: "#",
  },

  {
    id: 2,
    title: "Blockchain",
    link: "#",
  },
  {
    id: 3,
    title: "Investment",
    link: "#",
  },
  {
    id: 4,
    title: "Markets",
    link: "#",
  },
  {
    id: 5,
    title: "Web 3",
    link: "#",
  },
  {
    id: 6,
    title: "Press Release",
    link: "#",
  },
];

const Blog = () => {
  return (
    <nav>
      {/* ABOUT */}
      <div className="contianer h-full">
        <div className=" text-center py-8">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-secondary text-sm font-medium"
          >
            INSIGHTS ABOUT CRYPTO
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-5xl font-semibold py-4"
          >
            The Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-gray-500 py-4 w-96 mx-auto md:w-[600px]"
          >
            Stories from the easiest and most trusted place to buy, sell, and
            use crypto.
          </motion.p>
        </div>
        <div>
          <motion.div
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="box flex flex-row justify-center items-center py-8 "
          >
            <div className="mx-auto md:flex">
              <img
                src={Thumbnail}
                alt=""
                className="w-[300px] md:w-[350px] rounded-l-xl lg:w-[550px] mx-auto lg:h-[350px] "
              />
              <div
                className="w-[300px] h-[190px] md:w-[350px] 
              md:h-[230px] md:shadow-none md:rounded-r-xl 
              lg:w-[500px] lg:h-[350px] 
              shadow-lg border rounded-b-xl mx-auto"
              >
                <div className="box-content items-center justify-center px-6 py-6 lg:py-20">
                  <h1 className="text-xl font-semibold lg:text-3xl ">
                    Cryptocurrency News: Building in Resiliency and
                    International Co-Operation
                  </h1>
                  <p className="text-xs py-2 text-gray-400 lg:text-sm">
                    Introducing the all new Coinbank identity, own your crypto
                    adventure and driving mass adoption.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* BUTTTON */}
      <motion.div
        variants={FadeUp(0.5)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-6 py-6"
      >
        {BlogData.map((blog) => (
          <li key={blog.id} className="list-none">
            <a
              href={blog.link}
              className=" hidden border font-semibold text-sm text-primary
            px-7 py-2 rounded-lg shadow-sm hover:bg-herocolor transition-all
            duration-300 hover:shadow-2xl lg:flex
            "
            >
              {blog.title}
            </a>
          </li>
        ))}
      </motion.div>
      <Card />
    </nav>
  );
};

export default Blog;
