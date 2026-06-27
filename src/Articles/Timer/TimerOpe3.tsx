import React, { useEffect, useRef, useState } from 'react'

function TimerOpe3() {
  const [isActive, setisActive] = useState(false);
  const [Second, setSecond] = useState(0);
  const [isTimer,setisTimer] =useState(false);
  const [TimeTable,setTimeTable] = useState({hour:0, minute:0, sec:1});
  const isPull1 = useRef(false);
  const isPull2 = useRef(true);
  const isPull3 = useRef(false)
  const measure = useRef(0);
  const ref = useRef(0);
  const StopTime = useRef(0);
  const basetime = useRef(0);
  const totalPausedTime = useRef(0);
  const hour = [];
  const minute = [];
  const sec = [];

  const h = Math.floor(Second/3600);
  const m = Math.floor((Second - h*3600)/60);
  const s = Second - h*3600 - m*60

  const func = ()=>{
    clearInterval(ref.current);
    setSecond(0);
    basetime.current = 0;
    totalPausedTime.current = 0;
    setisActive(false)
    ref.current = 0;
  }

  for(let i:number = 0; i<24;i++){
    hour.push(<option key = {i}>{i}</option>)
  }

  for(let i:number = 0;i<60;i++){
    minute.push(<option key = {i}>{i}</option>)
  }

  for(let i:number = 1;i<60;i++){
    sec.push(<option key = {i}>{i}</option>)
  }

  useEffect(()=>{
    
    if(isActive){
      if(ref.current) return;
      if(basetime.current === 0){
        measure.current = Second
        basetime.current = Date.now()
        const Time = setInterval(() => {
          const NowTime = (measure.current*1000) - (Date.now() - basetime.current);
          setSecond(Math.floor(NowTime/1000) +1);
          if(NowTime<=0){
            func()
            isPull1.current =true;
            isPull2.current = true;
            isPull3.current = true;
            setTimeout(()=>{
              setSecond(measure.current);
              isPull1.current =false
              isPull3.current = false;
            },1000) 
                  
          }


        }, 50);
        ref.current = Time
      }
      else{
        if(ref.current) return
        totalPausedTime.current += Date.now() - StopTime.current;
        const Time2 = setInterval(() => {
          const NowTime2 = (measure.current*1000) - ( Date.now() - basetime.current - totalPausedTime.current) ;
          setSecond(Math.floor(NowTime2/1000)+1)
          if(NowTime2<=0){
            func()
            isPull1.current =true;
            isPull2.current = true;
            isPull3.current = true;
            setTimeout(()=>{
              setSecond(measure.current);
              isPull1.current =false
              isPull3.current = false;
            },1000) 
                  
          }
        }, 50);
        ref.current = Time2;
      }
    }
    else if(!isActive){
      clearInterval(ref.current);
      ref.current = 0;
      StopTime.current = Date.now();
    }
    return ()=>{clearInterval(ref.current)}
  },[isActive])


  return (
    <>
    {isTimer ? 
    <>
      <button id = "Timer1" disabled = {isPull1.current} onClick={() => {setisActive(true),isPull1.current = true,isPull2.current = false} }>Start</button>
      <button id = "Timer2" disabled = {isPull2.current}  onClick={() =>{setisActive(false),isPull1.current = false,isPull2.current = true}}>Stop</button>
      {h}:{m}:{s}
      <button id = "finish" disabled = {isPull3.current}onClick={()=>{func(),setSecond(0),setisTimer(false),isPull1.current = false,isPull2.current =true,setTimeTable({...TimeTable,hour:0,minute:0,sec:1})}}>終了</button>
    </>:
    <>
    <select name='hours' id='hours-select' onChange={(e)=>setTimeTable({...TimeTable,hour:Number(e.target.value)})}>
        {hour.map((x)=> x)}
      </select>
      :
      <select name='minutes' id='minutes-select' onChange={(e)=>setTimeTable({...TimeTable,minute:Number(e.target.value)})}>
        {minute.map((x)=> x)}
      </select>
      :
      <select name='sec' id='sec-select' onChange={(e)=>setTimeTable({...TimeTable,sec:Number(e.target.value)})}>
        {sec.map((x)=> x)}
      </select>
      <button id = "setTimer" onClick={()=>{setSecond(TimeTable.hour*3600 + TimeTable.minute*60 + TimeTable.sec),setisTimer(true)}}>タイマーセット</button>
    </>}
      
    </>
  )
}

export default TimerOpe3