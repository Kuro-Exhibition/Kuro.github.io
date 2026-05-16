import React from 'react'
import PointBox from './PointBox'
import { useNavigate } from 'react-router-dom'
import "./CompCSS/PostLayout.css"

function PostLayout({children,title}) {

  const Navi = useNavigate();
  return (
    <>
    <div className='Operator'>
      <div className='Content-title'>
        Title:{title}
      </div>
      <div className='frame'>
        {children}
      </div>
      <button className='Button' onClick={()=>Navi("/")}>
        一覧に戻る
      </button>
    </div>
    </>
  )
}

export default PostLayout