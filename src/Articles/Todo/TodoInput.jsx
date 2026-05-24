import React, { useState } from 'react'

function TodoInput({onchange}) {
  const [text,setText] = useState("");

  return (
    <div>
      <input type='text' value={text} style={{width:"500px", height:"50px"}} onChange={(e) => setText(e.target.value)}/>
      <input type='button' style={{marginLeft:"20px",width:"100px", height:"50px"}} value="Add To Todo" onClick={() => {onchange(text); setText("")}}/>
    </div>
  )
}

export default TodoInput