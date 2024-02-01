import member1 from "/assets/images/about-us/TeamImages/member1.png";
import member2 from "/assets/images/about-us/TeamImages/member2.png";
import member3 from "/assets/images/about-us/TeamImages/member3.png";
import LinkedInIcon from "/assets/images/about-us/TeamImages/linkedIn.svg";
const About = ({ title }) => {
  return (
    <section className="text-[#595959] py-10 mb-[100px] px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-3 items-center w-full  text-center justify-between">
          <hr className="border border-t-black  w-full"></hr>
          <h2 className="text-2xl mmd:text-4xl font-bold text-center">
            {title ? title : "About Us"}
          </h2>
          <hr className="border border-t-black w-full"></hr>
        </div>
        <div className="grid grid-cols-1 mmd:grid-cols-3 gap-4 mt-20 justify-items-center">
          <div className="order-2 mmd:order-1 bg-[#F5F5F5F0] rounded-xl w-96 h-[550px]">
            <div className="w-36 mx-auto mt-[51px]">
              <img src={member1} alt="" className="  mx-auto" />
            </div>
            <div className="mx-11">
              <h3 className="text-[27px] font-bold text-center mt-[25px]">
                Raihan Alauddin
              </h3>
              <p className="text-center font-bold text-[17px] mb-2">
                Co-Founder & Director
              </p>
              <p className=" text-center">
                Loves teaching so much that he has been doing it for 20+ years,
                in addition to his corporate and startup career. Sakib is an
                Oxford alumnus and holds a 1st Class Economics & Finance
                bachelors degree from Brunel.
              </p>
            </div>

            <img
              src={LinkedInIcon}
              alt=""
              className="mx-auto mt-5 w-10 cursor-pointer"
            />
          </div>
          <div className="order-1 mmd:order-2 bg-[#F5F5F5F0] rounded-xl w-96 h-[550px]">
            <div className="w-36 mx-auto mt-[51px]">
              <img src={member2} alt="" className="  mx-auto" />
            </div>
            <div className="mx-11">
              <h3 className="text-[27px] font-bold text-center mt-[25px]">
                Sakib Ahmed
              </h3>
              <p className="text-center font-bold text-[17px] mb-2">
                Founder & CEO
              </p>
              <p className=" text-center">
                Loves teaching so much that he has been doing it for 20+ years,
                in addition to his corporate and startup career. Sakib is an
                Oxford alumnus and holds a 1st Class Economics & Finance
                bachelors degree from Brunel.
              </p>
            </div>

            <img
              src={LinkedInIcon}
              alt=""
              className="mx-auto mt-5 w-10 cursor-pointer"
            />
          </div>
          <div className="order-3 bg-[#F5F5F5F0] rounded-xl w-96 h-[550px]">
            <div className="w-36 mx-auto mt-[51px]">
              <img src={member3} alt="" className="  mx-auto" />
            </div>
            <div className="mx-11">
              <h3 className="text-[27px] font-bold text-center mt-[25px]">
                Mansur Abbasi
              </h3>
              <p className="text-center font-bold text-[17px] mb-2">
                Co-Founder & Director
              </p>
              <p className=" text-center">
                Loves teaching so much that he has been doing it for 20+ years,
                in addition to his corporate and startup career. Sakib is an
                Oxford alumnus and holds a 1st Class Economics & Finance
                bachelors degree from Brunel.
              </p>
            </div>

            <img
              src={LinkedInIcon}
              alt=""
              className="mx-auto mt-5 w-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
