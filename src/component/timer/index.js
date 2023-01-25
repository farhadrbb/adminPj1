import React from "react";
import { useState, useEffect } from "react";
// import RefreshIcon from '@material-ui/icons/Refresh';


const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0, handleClickAgain } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleClick = () => {
    handleClickAgain()
    setMinutes(initialMinute)
    setSeconds(initialSeconds)
  }

  return (
    <div
    //   style={{
    //     // backgroundColor: "#ef6d2227",
    //     borderRadius: 5,
    //     padding: "8px 14px" , 
    //     fontFamily : "vazir"
    //   }}
      className="flex  justify-center w-[100px]"
    >
      <div>
        {minutes === 0 && seconds === 0 ? (
          <div
            style={{ color: "#ef6d22", margin: 0, whiteSpace: "nowrap" , cursor : "pointer" }}
            onClick={handleClick}
            className="text-xs h-[30px]"
          >
             {"ارسال مجدد کد"}
          </div>
        ) : (
            <div className="text-cyan-50 text-sm font-bold h-[30px]">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
          )}
      </div>
    </div>
  );
};

export default Timer;