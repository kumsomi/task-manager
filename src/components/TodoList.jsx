import { Droppable } from "react-beautiful-dnd"
import { SingleTodo } from "./SingleTodo"

export const TodoList=({todoList, setTodoList, input, setInput, setIsEditing,setEditItemId, completedTodoList, setCompletedTodoList})=>{
    
  const handleDelete=(todoId)=>{
    const filteredTodo = todoList.filter((todos)=>todos.id!==todoId)
    setTodoList(filteredTodo)
  }
  const handleUpdate=(todoId)=>{
    const findUpdateTodo = todoList.find((todo)=>todo.id===todoId)
    setInput(findUpdateTodo)
    setIsEditing(true)
    setEditItemId(findUpdateTodo.id)
  }
    return(
        <div className='container'>
        <Droppable droppableId="TodosList">
          {(provided)=>(
              <div className='todo-container' ref={provided.innerRef} {...provided.droppableProps}>
                <h4>Todos</h4>
                {todoList.map((eachTodo, index)=>(
                  eachTodo.status==='todo' &&
                    (<SingleTodo index={index}id={eachTodo.id} todo={eachTodo} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
                  ))}
                  {provided.placeholder}
              </div>
          )}
        </Droppable>
        <Droppable droppableId="InProgressList">
          {(provided)=>(
            <div ref={provided.innerRef} {...provided.droppableProps} className='todo-container' style={{backgroundColor:'#f5f595'}}>
            <h4>In progress</h4>
            {todoList.map((eachTodo, index)=>(
              eachTodo.status==='in-progress' &&
                (<SingleTodo index ={index} id={eachTodo.id} todo={eachTodo} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
              ))}
              {provided.placeholder}
          </div>
          )}
        </Droppable>
        <Droppable droppableId="CompletedList">
          {(provided)=>(
            <div ref={provided.innerRef} {...provided.droppableProps} className='todo-container' style={{backgroundColor:'#baf7ba'}}>
              <h4>Done</h4>
              {todoList.map((eachTodo, index)=>(
                eachTodo.status==='done' &&
                  (<SingleTodo index={index} id={eachTodo.id} todo={eachTodo} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
                ))}
                {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
}