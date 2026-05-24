import React, { useState } from 'react'
import "../../components/PostLayout"
import PostLayout from '../../components/PostLayout'
import "./TodoInput"
import TodoInput from './TodoInput';

function TodoList() {

   const [Todos, setTodos] = useState(()=>{
    const isnull = localStorage.getItem("key")
    if(isnull !== null){
      const returndata = localStorage.getItem("key");
      const jsondata = JSON.parse(returndata);
      return jsondata;
    }
    else{
      return [];
    }
   });

   const AddTodo = (Contents) =>{
    if(Contents.trim() === "") return;
    const newTodo = {id:Date.now(),text:Contents}
    const newTodoList = [...Todos, newTodo]
    setTodos(newTodoList) 
    const data = JSON.stringify(newTodoList)
    localStorage.setItem("key",data) 
   }

   const deleteTodo = (targetID)=>{
      const newTodo = Todos.filter((item) => item.id !== targetID)
      setTodos(newTodo)
      const data = JSON.stringify(newTodo)
      localStorage.setItem("key",data) 
   }

  return (
    <PostLayout title="Todo">
      <TodoInput onchange = {AddTodo}></TodoInput>
      {Todos.map((cont,index)=>{
        return <div key={cont.id} style={{display:"flex", alignItems:"center",marginTop:"10px"}}> {cont.text}
          <button style={{height:"30px", width:"30px",marginLeft:"20px",position:"relative",top:"3px",backgroundColor:"#90EE90"}} onClick={()=>deleteTodo(cont.id)}>✓</button>
          <button style={{height:"30px", width:"30px",marginLeft:"20px",position:"relative",top:"3px",backgroundColor:"red"}} onClick={()=>deleteTodo(cont.id)}>×</button>
          </div>
      })}
    </PostLayout>
  )
}

export default TodoList