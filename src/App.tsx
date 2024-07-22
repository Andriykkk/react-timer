import React, { useEffect, useState } from "react";
import "./app.css";
import RotateCylinder from "./components/RotateCylinder";
import Timer from "./components/Timer";
import ControlButtons from "./components/ControlButtons";
import {
  getTimersFromLocalStorage,
  saveTimersToLocalStorage,
} from "./lib/localStorage";
import AddModal from "./components/AddModal";

function App() {
  const [timerRotate, setTimerRotate] = useState([
    0, 0, 0, 0, 0, 0,
  ]);
  const [timers, setTimers] = useState(
    getTimersFromLocalStorage()
  );
  const [addModalShow, setAddModalShow] = useState(false);

  useEffect(() => {
    saveTimersToLocalStorage(timers);
  }, [timers]);
  return (
    <div
      className='w-screen h-screen bg-mainBg'
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <Timer rotate={timerRotate} timers={timers} />
      <ControlButtons
        timerRotate={timerRotate}
        setTimerRotate={setTimerRotate}
        timers={timers}
        setTimers={setTimers}
        onShowAddModal={() => setAddModalShow(true)}
      />
      <AddModal
        isVisible={addModalShow}
        onClose={() => setAddModalShow(false)}
        addTimers={(time: any) =>
          setTimers([...timers, time])
        }
      />
    </div>
  );
}

export default App;
