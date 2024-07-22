import { useMask } from "@react-input/mask";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddModal = ({
  isVisible,
  onClose,
  addTimers,
}: {
  isVisible: boolean;
  onClose: () => void;
  addTimers: (time: any) => void;
}) => {
  const [time, setTime] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    let value = event.target.value.replace(/\D/g, "");

    const formattedTime = formatTime(value);

    setTime(formattedTime);
  };

  const handleKeyDown = (event: any) => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(
        time.length,
        time.length
      );
    }

    if (
      event.key === "Backspace" &&
      (event.target.selectionStart === 3 ||
        event.target.selectionStart === 6)
    ) {
      event.preventDefault();
      let value = time.replace(/\D/g, "");
      value =
        value.slice(0, event.target.selectionStart - 2) +
        value.slice(event.target.selectionStart - 1);
      setTime(formatTime(value));
    }
  };

  const formatTime = (value: string) => {
    if (value.length > 6) {
      value = value.slice(0, 6);
    }

    let formattedTime = value;
    if (value.length >= 4) {
      formattedTime =
        value.slice(0, 2) +
        ":" +
        value.slice(2, 4) +
        (value.length > 4 ? ":" + value.slice(4, 6) : "");
    } else if (value.length >= 2) {
      formattedTime =
        value.slice(0, 2) + ":" + value.slice(2, 4);
    }
    return formattedTime;
  };

  const handleBlur = () => {
    const parts = time.split(":");

    if (parts[1] && Number(parts[1]) > 59) {
      parts[1] = `59`;
    }
    if (parts[2] && Number(parts[2]) > 59) {
      parts[2] = `59`;
    }

    const formattedParts = parts.map((part) =>
      part.padEnd(2, "0")
    );

    const formattedValue = formattedParts.join(":");
    setTime(formattedValue);
  };

  const transformTimeToArray = (time: string) => {
    const timeArray = time
      .replaceAll(":", "")
      .split("")
      .map((char) => Number(char));

    while (timeArray.length < 6) {
      timeArray.unshift(0);
    }

    const arraySum = timeArray.reduce(
      (sum, num) => sum + num
    );

    if (arraySum === 0) {
      alert("Please enter a valid time");
    }

    return timeArray;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center '
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              type: "spring",
              duration: 0.5,
              ease: "easeInOut",
            }}
            className='bg-mainBg rounded-3xl py-4 px-6 text-white'
          >
            <div className='text-2xl font-semibold mb-6'>
              Add timer
            </div>
            <div className='mb-4'>
              <input
                type='text'
                value={time}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                className='bg-transparent w-[300px] h-[70px] border-stone-800 border-2 rounded-[30px] px-4 text-right text-4xl font-semibold caret-transparent'
                placeholder='00:00:00'
                maxLength={8}
              />
            </div>
            <div className='flex gap-4'>
              <button
                onClick={() => {
                  addTimers(transformTimeToArray(time));
                  setTime("");
                  onClose();
                }}
                className='transition-all bg-mainGray text-xl rounded-full cursor-pointer relative py-4 px-6 overflow-hidden hover:bg-mainGray/50 '
              >
                Add
              </button>
              <button
                onClick={onClose}
                className='text-xl rounded-full cursor-pointer relative py-4'
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddModal;
