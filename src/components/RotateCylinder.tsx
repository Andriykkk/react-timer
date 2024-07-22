import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const RotateCylinder = ({
  rotate,
  translate,
  timers,
}: {
  rotate: number;
  translate: number;
  timers: number[];
}) => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className='absolute top-0 left-1/2 -translate-x-1/2 w-[10%] text-center py-[15%]'
      style={{
        perspective: "1000px",
      }}
    >
      <div
        id='carousel'
        data-state='1'
        className='h-[150px] transition-all duration-500'
        style={{
          transformStyle: "preserve-3d",
          transform: `translateX(${translate}%) rotateX(${
            rotate * 36
          }deg)`,
        }}
      >
        {timers.map((number, i) => (
          <div
            key={i}
            className={`
					h-[150px] absolute w-full m-0 text-[110px] leading-[150px] font-bold  text-white text-center transition-all duration-600`}
            style={{
              backfaceVisibility: "hidden",
              transform: `rotateX(${
                -i * 36
              }deg) translateZ(160px)`,
            }}
          >
            {i > rotate - 3 && i < rotate + 3
              ? number
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotateCylinder;
