import React from "react";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";

const ControlButtons = ({
  timerRotate,
  setTimerRotate,
  timers,
  setTimers,
  onShowAddModal,
}: {
  timerRotate: number[];
  setTimerRotate: React.Dispatch<
    React.SetStateAction<number[]>
  >;
  timers: number[][];
  setTimers: React.Dispatch<
    React.SetStateAction<number[][]>
  >;
  onShowAddModal: () => void;
}) => {
  const rotateButtonNext = () => {
    if (timerRotate[0] - 1 < 0) return;
    setTimerRotate((prev) => {
      const newRotate = prev.map((value) => value - 1);
      return newRotate;
    });
  };
  const rotateButtonPrev = () => {
    if (timerRotate[0] > timers.length - 2) return;
    setTimerRotate((prev) => {
      const newRotate = prev.map((value) => value + 1);
      return newRotate;
    });
  };

  const deleteButton = () => {
    const index = timerRotate[0];

    timers.splice(index, 1);
    setTimers((timers) => [...timers]);
    setTimerRotate((prev) => {
      const newRotate = prev.map((value) => 0);
      return newRotate;
    });
  };
  return (
    <div className='flex flex-col gap-6 absolute top-[10%] right-[10%]'>
      <Button onClick={() => rotateButtonNext()}>
        <IoIosArrowDown className='text-5xl rotate-180' />
      </Button>
      <Button onClick={() => onShowAddModal()}>Add</Button>
      <Button onClick={() => deleteButton()}>Delete</Button>
      <Button onClick={() => rotateButtonPrev()}>
        <IoIosArrowDown className='text-5xl mt-2' />
      </Button>
    </div>
  );
};

export default ControlButtons;
