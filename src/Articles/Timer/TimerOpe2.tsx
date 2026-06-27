import React, { useEffect, useRef, useState } from 'react'

function TimerOpe2() {
  const [Second, setSecond] = useState(0);
  const [isActive, setisActive] = useState(false);
  const ref = useRef(0);
  const baseTime = useRef(0);
  const StopTime = useRef(0);
  const totalPausedTime = useRef(0);

  useEffect(()=>{
    if(isActive){
      if(baseTime.current === 0){
        baseTime.current = Date.now()
        const Time = setInterval(() => {
        const passSec = Date.now() - baseTime.current;
        setSecond(Math.floor(passSec/1000))
        }, 50);
        ref.current = Time;
      }else{
        totalPausedTime.current += Date.now() - StopTime.current; 
        const Time2= setInterval(() => {
        const passSec2 = Date.now() - totalPausedTime.current -baseTime.current
        setSecond(Math.floor(passSec2/1000))
          
        }, 50);
        ref.current = Time2;
      }

    }else if(!isActive){
      clearInterval(ref.current);
      StopTime.current = Date.now();
    }

  },[isActive])
  
  return (
    <>
    <input type="button" value="start" onClick={()=>setisActive(true)}/>
    <input type="button" value="stop" onClick={()=>setisActive(false)}/>
    {Second}
    </>
  )
}

export default TimerOpe2