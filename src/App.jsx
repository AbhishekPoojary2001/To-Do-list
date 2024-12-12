import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

const inputref=useRef();
const[todoList,setTodoList]=useState([]);

 const add=()=>{
    const inputText=inputref.current.value.trim();
    

  if (inputText===""){
    return null;
  }
    const newTodo={
      id: Date.now(),
      text: inputText,
      isComplete:false,
    }
    setTodoList((prev)=>[...prev,newTodo]);
    inputref.current.value="";
    console.log(newTodo)
 } 

 const deleteTodo = (id)=>{
  setTodoList((prvTodos)=>{
      return prvTodos.filter((todo)=>todo.id !=id)
  })
 }

 const toggle=(id)=>{
  setTodoList((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if(todo.id===id){
          return{...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
  })
 }

 useEffect(() => {
   
 console.log(todoList);
 
   
 }, [todoList])
 

  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-5 rounded-xl p-5 bg-purple-300 min-h-[80vh]'>
      
        <h2 className='text-black font-bold text-xl'>Add task</h2>
        <div className='addtodo flex justify-between gap-3 mt-6'>
        <input ref={inputref} className="rounded-md w-full px-2 "type="text"/>
        <button onClick={add} className='bg-violet-600 text-white rounded-lg font-bold px-6 py-1 '>Add</button>
      </div>


      <h2 className='text-black font-bold text-xl mt-7'>Your Tasks</h2>
      <div>
        {todoList.map((items,index)=>{

       
        return <div  key={index} className='todo flex justify-between mt-3'>
          <div onClick={()=>{toggle(items.id)}} className={`text ${items.isComplete ? "line-through":""}`}>{items.text}</div>
          <div className='buttons flex  gap-4'>
            
            <button onClick={()=>{deleteTodo(items.id)}}className='bg-violet-600 text-white rounded-lg font-bold px-6 py-1 '>Delete</button>

          </div>
        </div>
         }
        )}
        
      </div>
    </div>
    </>
  )
}

export default App
