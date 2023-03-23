import React from "react";

const CountDownTimer = ({ hoursMinSecs }) => {
  const { days = 0, hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (days === 0 && hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <>
      <div className=" my-6 md:my-10 lg:my-12 space-x-8 ">
        <div className="text-center inline-block">
          <p className=" bg-white text-primary-500 shadow-custom p-8 lg:p-4 text-xl  h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
            {days.toString().padStart(2, "0")}
          </p>
          <p className="text-primary-900 text-[14px] lg:text-[18px] mt-2">Day</p>
        </div>
        <div className="text-center inline-block">
          <p className=" bg-white text-primary-500 shadow-custom p-8 lg:p-4 text-xl h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
            {hrs.toString().padStart(2, "0")}
          </p>
          <p className="text-primary-900 text-[14px] lg:text-[18px] mt-2">Hours</p>
        </div>
        <div className="text-center inline-block">
          <p className=" bg-white text-primary-500 shadow-custom p-8 lg:p-4 text-xl h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
            {mins.toString().padStart(2, "0")}
          </p>
          <p className="text-primary-900 text-[14px] lg:text-[18px] mt-2">Minutes</p>
        </div>
        <div className="text-center inline-block">
          <p className=" bg-white text-primary-500 shadow-custom p-8 lg:p-4 text-xl h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
            {secs.toString().padStart(2, "0")}
          </p>
          <p className="text-primary-900 text-[14px] lg:text-[18px] mt-2">Seconds</p>
        </div>
      </div>
    </>
  );
};

export default CountDownTimer;
