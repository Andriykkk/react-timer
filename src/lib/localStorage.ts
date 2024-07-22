const TIMERS_KEY = "timersArray";

export const saveTimersToLocalStorage = (
  timers: number[][]
) => {
  try {
    const serializedTimers = JSON.stringify(timers);
    localStorage.setItem(TIMERS_KEY, serializedTimers);
  } catch (error) {
    console.error(
      "Error saving timers to local storage:",
      error
    );
  }
};

export const getTimersFromLocalStorage = () => {
  try {
    const serializedTimers =
      localStorage.getItem(TIMERS_KEY);
    if (serializedTimers === null) {
      return null;
    }
    return JSON.parse(serializedTimers);
  } catch (error) {
    console.error(
      "Error retrieving timers from local storage:",
      error
    );
    return null;
  }
};
