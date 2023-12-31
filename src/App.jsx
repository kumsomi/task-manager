import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import { TaskForm } from './components/TaskForm';
import { TodoList } from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
function App() {

  const [todoList,setTodoList]=useState([]); 
  const [input, setInput]=useState({})
  const [isEditing, setIsEditing] = useState(false); 
  const [editItemId, setEditItemId] = useState(null)


  const handleFormSubmit=(event)=>{
    event.preventDefault();
    if(isEditing){
      setTodoList(todoList.map((eachTodo)=>{
        if(eachTodo.id===editItemId){
          return {...eachTodo,title:input.title, description:input.description}
        }
        return eachTodo
      }
      ))
      setIsEditing(edit=>!edit)
    }
    else{
    setTodoList(allTodos=>[...allTodos,{title:input.title, description:input.description, id:uuidv4(), status:'todo'}])
    }
    event.target.reset()

    setInput({title:'', description:''}) 
  }
  const onDragEndHandle=(result)=>{
    const {source, destination} = result
    let add;
    const activetodo=todoList;
    if(!destination)
      return;
    if(destination.droppableId===source.droppableId && destination.index===source.index)
      return;
    if(source.droppableId==='TodosList' ){
      add=activetodo[source.index]
      activetodo.splice(source.index,1)
    }
    else if(source.droppableId ==='InProgressList'){
      add=activetodo[source.index]
      activetodo.splice(source.index,1)
    }
    else if(source.droppableId ==='CompletedList'){
      add=activetodo[source.index]
      activetodo.splice(source.index,1)
    }
    console.log(result);

    if(destination.droppableId==='TodosList'){
      add.status='todo'
      activetodo.splice(destination.index,0, add)
      
    }
    else if(destination.droppableId==='InProgressList'){
      add.status='in-progress'
      activetodo.splice(destination.index,0, add)

      
    }
    else if(destination.droppableId === 'CompletedList'){
      add.status='done'
      activetodo.splice(destination.index,0, add)


    }
  }
  return (
    <DragDropContext onDragEnd={onDragEndHandle} >
      <div className='App'>
        <h1>Task manager</h1>
        <TaskForm input={input} setInput={setInput} isEditing={isEditing} handleFormSubmit={handleFormSubmit} /> 
        <TodoList todoList={todoList} setIsEditing={setIsEditing} setEditItemId={setEditItemId} setTodoList={setTodoList} input={input} setInput={setInput} />
      </div>
    </DragDropContext>
  );
}

export default App;
