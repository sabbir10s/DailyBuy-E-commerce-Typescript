import React from "react";
import img_one from "../../assets/about/about_img_one.png";
import img_two from "../../assets/about/about_img_two.png";
import img_three from "../../assets/about/about_img_three.png";
import img_four from "../../assets/about/about_img_four.png";
import ProcessingSteps from "./ProcessingSteps";
const About = () => {
  return (
    <>
      {" "}
      <div className="container mt-[80px] lg:mt-[52px] mb-[20px] lg:mb-[20px]">
        <div className="flex flex-col lg:flex-row items-center gap-[48px] ">
          <img
            className="w-full lg:w-[550px] xl:w-full rounded-[10px]"
            src={img_one}
            alt=""
          />
          <div>
            <h1 className="text-2xl lg:text-4xl text-[#383838] font-bold">
              A wonderful serenity has by taken possession,
            </h1>
            <p className="mt-[32px] text-sm lg:text-lg text-[#626463]">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings
              <br />
              <br />
              of spring which I enjoy with my whole heart. I am alone, and feel
              the charm of existence in this spot, which was created for the
              bliss of souls like mine. I am so happy, my dear friend, so
              absorbed in the exquisite sense of mere tranquil existence, that I
              neglect my talents.
            </p>
          </div>
        </div>
        <div className="mt-[100px] mb-[120px] relative">
          <div className="w-full h-[200px] lg:h-[400px]">
            <img
              className="w-full h-full object-center object-cover rounded-[10px] z-50"
              src={img_two}
              alt=""
            />
          </div>
          <div className="bg-primary-500 rounded-br-[10px] w-[400px] h-[300px] absolute bottom-[-30px] right-[-30px] z-[-1] hidden lg:block"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[36px] mt-[56px]">
          <div>
            <h1 className="text-2xl lg:text-4xl text-[#383838] font-bold">
              Our Commitment
            </h1>
            <p className="text-sm lg:text-lg text-[#626463] my-[32px]">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings
              <br />
              <br />
              of spring which I enjoy with my whole heart. I am alone, and feel
              the charm of existence in this spot, which was created for the
              bliss of souls like mine. I am so happy, my dear friend, so
              absorbed in the exquisite sense of mere tranquil existence, that I
              neglect my talents. I should be incapable of drawing a single
              stroke
            </p>
            <div className="w-full h-[300px] md:h-[450px]">
              <img
                className="w-full h-full object-center object-cover rounded-[10px]"
                src={img_four}
                alt=""
              />
            </div>
          </div>
          <div className="flex  flex-col-reverse lg:flex-col">
            <div className="w-full h-[300px] md:h-[450px]">
              <img
                className="w-full h-full object-center object-cover rounded-[10px]"
                src={img_three}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl lg:text-4xl text-[#383838] font-bold my-[32px]">
                Customer Care
              </h1>
              <p className="text-sm lg:text-lg text-[#626463] mb-[32px] lg:mb-0">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings
                <br />
                <br />
                of spring which I enjoy with my whole heart. I am alone, and
                feel the charm of existence in this spot, which was created for
                the bliss of souls like mine. I am so happy, my dear friend, so
                absorbed in the exquisite sense of mere tranquil existence, that
                I neglect my talents. I should be incapable of drawing a single
                strok
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <ProcessingSteps />{" "}
    </>
  );
};

export default About;
