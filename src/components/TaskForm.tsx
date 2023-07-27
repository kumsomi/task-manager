import React, { useEffect, useRef } from "react"
import { taskFormProps } from "../types/todo-types";

export const TaskForm:React.FC<taskFormProps>=({ input, setInput, isEditing, handleFormSubmit})=>{
   const inputRef = useRef<HTMLInputElement>(null);
   useEffect(()=>{
        inputRef.current?.focus();
    },[isEditing])

    return(
    <form className='add-task-form-container' onSubmit={(e)=>{handleFormSubmit(e); inputRef.current?.blur()}}>
        <input ref={inputRef} className='form-input' type="text" name="title"  value={input.title} placeholder='Add task...'  onChange={(e)=>setInput(allValues=>( {...allValues, [e.target.name]:e.target.value}))} required/>
        <input className='form-input' type="text" name="description"  value={input.description} placeholder='task description' onChange={(e)=>setInput(allValues=>( {...allValues, [e.target.name]:e.target.value}))}/>
        <input type="submit" className="form-input" name='submit-btn' value={isEditing?'Save':'Add'} />
    </form>
    )
}