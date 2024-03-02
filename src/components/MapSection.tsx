import { useState } from "react";
import map from "./../assets/map.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const MapSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div id="mapSection" className="max-w-[80%] w-full mx-auto mt-10">
      {/* @ts-ignore */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex flex-wrap">
          <div className="flex justify-center w-full lg:w-1/2 flex-initial ">
            <img
              src={map}
              className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-fit align-middle  lg:mt-0 "
            />
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2 flex-initial">
            <div className="flex flex-col gap-5 items-center justify-center mt-3">
              <h1 className="text-[#f05a1a] font-bold text-[35px]">
                {counterOn && (
                  <CountUp start={0} end={7} duration={4} delay={0} />
                )}
              </h1>
              <h1 className="text-[#172554] font-bold text-[25px]">
                TRUNG TÂM
              </h1>
              <h1 className="text-[#f05a1a] font-bold text-[35px]">
                {counterOn && (
                  <CountUp start={0} end={6} duration={4} delay={0} />
                )}
              </h1>
              <h1 className="text-[#172554] font-bold text-[25px]">
                THÀNH PHỐ
              </h1>
              <h1 className="text-[#f05a1a] font-bold text-[35px]">
                {counterOn && (
                  <CountUp start={0} end={3280} duration={4} delay={0} />
                )}
                +
              </h1>
              <h1 className="text-[#172554] font-bold text-[25px]">HỌC VIÊN</h1>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default MapSection;
