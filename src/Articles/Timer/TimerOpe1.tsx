import React, { useEffect, useRef, useState } from 'react';

function TimerOpe() {
    const [Second, setSecond] = useState(0);
    const [isActive, setisActive] = useState(false);
    const ref = useRef(0);
    const baseTime = useRef(0);
    const Stoptime = useRef(0);
    const dif = useRef(0);
  
    useEffect(()=>{
      
      if(isActive){
        if(baseTime.current === 0){
           baseTime.current = Date.now();
        }else{
          const stopsec = Date.now() - Stoptime.current;
          const stopsec2 = Stoptime.current -baseTime.current;
          baseTime.current += stopsec;
          baseTime.current += stopsec2;
          Stoptime.current = 0;
          dif.current += stopsec2;
        }
        const Start = setInterval(() => {
        let SecondTime = Date.now();
        if(SecondTime - baseTime.current >= 1000 - dif.current){
          const passSec = Math.floor((SecondTime - baseTime.current + dif.current)/1000);
          setSecond((prev) => prev + passSec);
          baseTime.current +=  passSec*1000 - dif.current;
          dif.current = 0;
        }
      }, 50);
        ref.current = Start;
      }
      else if(!isActive){
        clearInterval(ref.current)
        Stoptime.current = Date.now();
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

export default TimerOpe