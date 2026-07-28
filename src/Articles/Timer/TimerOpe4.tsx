import React, { useEffect, useRef, useState } from 'react'


function TimerOpe4() {
  const [isStart,setisStart] = useState(false);
  const [change,setchange] = useState(false)
  const [stop,setStop] = useState(false)
  const [Timertable,setTimeTable] = useState({hour:0,minute:1})
  const hours = [];
  const minutes = [];
  const rest = [];
  const times = []

  const [Second,setSecond] =useState(0);

  for(let i:number = 0; i<24; i++){
    hours.push(<option key = {i}>{i}</option>)
  }

  
  for(let i:number = 1; i<60; i++){
    minutes.push(<option key = {i}>{i}</option>)
    rest.push(<option key = {i}>{i}</option>)
    times.push(<option key = {i}>{i}</option>)
  }

  return (
    <>
      {change ?
      <>
        <button id = "Start" disabled = {isStart}>START</button>
        <button id = "Stop" disabled = {stop}>STOP</button>
        <button id = "finish" disabled={false} onClick={()=>setchange(false)}>終了</button>
      </>
      :
      <>
        <select name='hour' id = "hour-select" >
          {hours.map((x)=>x)}
        </select>
        時間　:
        <select name='minute' id = "minute-select" >
          {minutes.map((x)=>x)}
        </select>
        分　:
        <select name='resttime' id = "resttime-select" >
          {rest.map((x)=>x)}
        </select>
        分休憩　:
        <select name='times' id = "times-select" >
          {times.map((x)=>x)}
        </select>
        回

        <button id = "Start" onClick={()=>{setisStart(false),setchange(true),setStop(true)}}>Start!</button>
      </>
      }
    
    </>
  )
}

export default TimerOpe4