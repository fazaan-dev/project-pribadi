import Footer1 from "../../assets/image/footer1.png";
import PhoneCall from "../../assets/image/calling.png";
import Qr from "../../assets/image/qr.png";

const Footer = () => {
  return (
    <nav>
      <div className="hidden md:block">
        <img src={Footer1} alt="" className="mx-auto w-[1150px] py-16" />
        <div className="flex items-center justify-center py-8">
          <div className="box bg-secondary rounded-3xl w-[1150px] h-[400px]">
            <div className="flex items-center justify-center gap-20">
              <div className="pb-28">
                <h1 className="text-4xl  py-8 font-semibold text-white">
                  Sign in now{" "}
                  <span className="text-gray-300">
                    {" "}
                    to get <br /> $50 worth of crypto
                  </span>
                </h1>
                <a
                  href="#"
                  className="text-secondary bg-white
            px-6 py-3 font-semibold text-sm
             rounded-lg hover:!scale-110
           hover:!shadow-xl transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
              <div className=" flex gap-10">
                <img src={PhoneCall} alt="" className="py-16" />
                <div>
                  <img src={Qr} alt="" className="w-[100px] mt-16 mx-auto" />
                  <h1 className="text-center text-white py-8">
                    Scan to download <br />
                    Coinbank wallet
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
