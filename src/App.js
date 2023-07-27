"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
const uuid_1 = require("uuid");
const TaskForm_1 = require("./components/TaskForm");
const TodoList_1 = require("./components/TodoList");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
function App() {
    const [todoList, setTodoList] = (0, react_1.useState)([]);
    const [input, setInput] = (0, react_1.useState)({ title: '', description: '' });
    const [isEditing, setIsEditing] = (0, react_1.useState)(false);
    const [editItemId, setEditItemId] = (0, react_1.useState)(null);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            setTodoList(todoList.map((eachTodo) => {
                if (eachTodo.id === editItemId) {
                    return Object.assign(Object.assign({}, eachTodo), { title: input.title, description: input.description });
                }
                return eachTodo;
            }));
            setIsEditing((edit) => !edit);
        }
        else {
            setTodoList((allTodos) => [
                ...allTodos,
                {
                    title: input.title,
                    description: input.description,
                    id: (0, uuid_1.v4)(),
                    status: "todo",
                },
            ]);
        }
        // event.target.reset();
        setInput({ title: "", description: "" });
    };
    const onDragEndHandle = (result) => {
        const { source, destination } = result;
        let add = {
            title: '',
            description: '',
            id: '',
            status: ''
        };
        const activetodo = todoList;
        if (!destination)
            return;
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index)
            return;
        if (source.droppableId === "TodosList") {
            add = activetodo[source.index];
            activetodo.splice(source.index, 1);
        }
        else if (source.droppableId === "InProgressList") {
            add = activetodo[source.index];
            activetodo.splice(source.index, 1);
        }
        else if (source.droppableId === "CompletedList") {
            add = activetodo[source.index];
            activetodo.splice(source.index, 1);
        }
        console.log(result);
        if (destination.droppableId === "TodosList") {
            add.status = "todo";
            activetodo.splice(destination.index, 0, add);
        }
        else if (destination.droppableId === "InProgressList") {
            add.status = "in-progress";
            activetodo.splice(destination.index, 0, add);
        }
        else if (destination.droppableId === "CompletedList") {
            add.status = "done";
            activetodo.splice(destination.index, 0, add);
        }
    };
    // for strict mode droppable
    const [enabled, setEnabled] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);
    if (!enabled) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.DragDropContext, { onDragEnd: onDragEndHandle, children: (0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Task manager" }), (0, jsx_runtime_1.jsx)(TaskForm_1.TaskForm, { input: input, setInput: setInput, isEditing: isEditing, handleFormSubmit: handleFormSubmit }), (0, jsx_runtime_1.jsx)(TodoList_1.TodoList, { todoList: todoList, setIsEditing: setIsEditing, setEditItemId: setEditItemId, setTodoList: setTodoList, input: input, setInput: setInput })] }) }));
}
exports.default = App;
