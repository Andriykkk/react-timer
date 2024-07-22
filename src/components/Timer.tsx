import React from "react";
import RotateCylinder from "./RotateCylinder";

const Timer = ({
  rotate,
  timers,
}: {
  rotate: number[];
  timers: number[][];
}) => {
  const getNthValues = (n: number) =>
    timers.map((subArray) => subArray[n]);

  return (
    <div className='py-[15%] relative -translate-x-[10%]'>
      <div
        className='absolute z-50 top-0 left-0 w-full h-[45%] '
        style={{
          background:
            "linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.98) 60%, rgba(18,18,18,0.70) 80%, rgba(18,18,18,0) 100%)",
        }}
      ></div>
      <div className='h-[150px] '></div>
      <div
        className='absolute top-0 left-1/2 -translate-x-1/2 py-[15%] w-[10%] text-center
	 text-[130px] leading-[150px] font-bold  text-white'
      >
        <div className='w-full -translate-x-[122%]'>h</div>
      </div>
      <div
        className='absolute top-0 left-1/2 -translate-x-1/2 py-[15%] w-[10%] text-center
	 text-[130px] leading-[150px] font-bold  text-white'
      >
        <div className='w-full translate-x-[120%]'>m</div>
      </div>
      <div
        className='absolute top-0 left-1/2 -translate-x-1/2 py-[15%] w-[10%] text-center
	 text-[130px] leading-[150px] font-bold  text-white'
      >
        <div className='w-full translate-x-[340%]'>s</div>
      </div>
      <RotateCylinder
        rotate={rotate[0]}
        timers={getNthValues(0)}
        translate={-32}
      />
      <RotateCylinder
        rotate={rotate[1]}
        timers={getNthValues(1)}
        translate={32}
      />
      <RotateCylinder
        rotate={rotate[2]}
        timers={getNthValues(2)}
        translate={174}
      />
      <RotateCylinder
        rotate={rotate[3]}
        timers={getNthValues(3)}
        translate={-174}
      />
      <RotateCylinder
        rotate={rotate[4]}
        timers={getNthValues(4)}
        translate={236}
      />
      <RotateCylinder
        rotate={rotate[5]}
        timers={getNthValues(5)}
        translate={-236}
      />
      <div
        className='absolute z-50 bottom-0 left-0 w-full h-[45%]'
        style={{
          background:
            "linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0.98) 60%, rgba(18,18,18,0.70) 80%, rgba(18,18,18,0) 100%)",
        }}
      ></div>
    </div>
  );
};

export default Timer;
