import React, { useEffect, useRef, useState } from 'react';
import "../../components/PostLayout"
import PostLayout from '../../components/PostLayout';
import TimerOpe1 from './TimerOpe1';
import TimerOpe2 from './TimerOpe2';
import TimerOpe3 from './TimerOpe3';
import select from "./select.module.css";
import TimerOpe4 from './TimerOpe4';
function Timer() {
  const [ActiveTimer,setActiveTimer] = useState("StopWatch1")
  return (
  <>
    <select name='StopWatch' id='set-StopWatch' className={select['select-box']} onChange={(e)=>{setActiveTimer(e.target.value)}}>
      <option value="StopWatch1">StopWatch1</option>
      <option value="StopWatch2">StopWatch2</option>
      <option value="Timer">Timer</option>
      <option value="PomodoroTimer">Pomodoro Timer</option>
    </select>

   {ActiveTimer === "StopWatch1"?
   <PostLayout title="StopWatch-1(自作)">
    <TimerOpe1/>
   </PostLayout>:ActiveTimer === "StopWatch2" ? 
   <PostLayout title="StopWatch-2(プロ仕様)">
    <TimerOpe2/>
   </PostLayout>:ActiveTimer === "Timer" ?
   <PostLayout title="Timer">
    <TimerOpe3/>
    </PostLayout>:
    <PostLayout title = "PomodoroTimer">
    <TimerOpe4/>
    </PostLayout>
    }
  </>

  )
}

export default Timer