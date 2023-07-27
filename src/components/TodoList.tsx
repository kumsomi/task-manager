import { Droppable } from "react-beautiful-dnd";
import { SingleTodo } from "./SingleTodo";
import { useEffect, useState } from "react";
import { todoListComponentProp, todoProp } from "../types/todo-types";

export const TodoList:React.FC<todoListComponentProp> = ({
  todoList,
  setTodoList,
  input,
  setInput,
  setIsEditing,
  setEditItemId,
  ...props
}) => {
  const handleDelete = (todoId:string) => {
    const filteredTodo = todoList.filter((todos) => todos.id !== todoId);
    setTodoList(filteredTodo);
  };
  const handleUpdate = (todoId: string) => {
    
    const findUpdateTodo: todoProp|undefined = todoList.find((todo) => todo.id === todoId);
    if (findUpdateTodo) {
      setInput(findUpdateTodo);
      setIsEditing(true);
      setEditItemId(findUpdateTodo.id);
    }
    else {
      return;
    }
  };
  // for strict mode droppable
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return (
    <div className="container">
      <Droppable {...props} droppableId="TodosList">
        {(provided) => (
          <div
            className="todo-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h4>Todos</h4>
            {todoList.map(
              (eachTodo, index) =>
                eachTodo.status === "todo" && (
                  <SingleTodo
                    index={index}
                    id={eachTodo.id}
                    todo={eachTodo}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="InProgressList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="todo-container"
            style={{ backgroundColor: "#f5f595" }}
          >
            <h4>In progress</h4>
            {todoList.map(
              (eachTodo, index) =>
                eachTodo.status === "in-progress" && (
                  <SingleTodo
                    index={index}
                    id={eachTodo.id}
                    todo={eachTodo}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="CompletedList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="todo-container"
            style={{ backgroundColor: "#baf7ba" }}
          >
            <h4>Done</h4>
            {todoList.map(
              (eachTodo, index) =>
                eachTodo.status === "done" && (
                  <SingleTodo
                    index={index}
                    id={eachTodo.id}
                    todo={eachTodo}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                )
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
