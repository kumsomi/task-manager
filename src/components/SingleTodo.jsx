import { Draggable } from 'react-beautiful-dnd'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
export const SingleTodo=({id, index,todo,handleDelete, handleUpdate})=>{
    
    return(
        <Draggable draggableId={id} index={index}>
            {
                (provided)=>(
                    <div key={id} className="single-todo" ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}> 
                        <p className='single-todo-title'><strong>{todo.title}</strong>: {todo.description}</p> 
                        <div className="single-todo-btn">
                            <AiFillEdit className='edit-btn' onClick={()=>handleUpdate(todo.id)}/>
                            <AiFillDelete className='delete-btn' onClick={()=>handleDelete(todo.id)}/>
                        </div>
                    </div>
                )
            }
        </Draggable>
  )
}