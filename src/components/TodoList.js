"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const SingleTodo_1 = require("./SingleTodo");
const react_1 = require("react");
const TodoList = (_a) => {
    var { todoList, setTodoList, input, setInput, setIsEditing, setEditItemId } = _a, props = __rest(_a, ["todoList", "setTodoList", "input", "setInput", "setIsEditing", "setEditItemId"]);
    const handleDelete = (todoId) => {
        const filteredTodo = todoList.filter((todos) => todos.id !== todoId);
        setTodoList(filteredTodo);
    };
    const handleUpdate = (todoId) => {
        const findUpdateTodo = todoList.find((todo) => todo.id === todoId);
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
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, Object.assign({}, props, { droppableId: "TodosList", children: (provided) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "todo-container", ref: provided.innerRef }, provided.droppableProps, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Todos" }), todoList.map((eachTodo, index) => eachTodo.status === "todo" && ((0, jsx_runtime_1.jsx)(SingleTodo_1.SingleTodo, { index: index, id: eachTodo.id, todo: eachTodo, handleDelete: handleDelete, handleUpdate: handleUpdate }))), provided.placeholder] }))) })), (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, { droppableId: "InProgressList", children: (provided) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: provided.innerRef }, provided.droppableProps, { className: "todo-container", style: { backgroundColor: "#f5f595" }, children: [(0, jsx_runtime_1.jsx)("h4", { children: "In progress" }), todoList.map((eachTodo, index) => eachTodo.status === "in-progress" && ((0, jsx_runtime_1.jsx)(SingleTodo_1.SingleTodo, { index: index, id: eachTodo.id, todo: eachTodo, handleDelete: handleDelete, handleUpdate: handleUpdate }))), provided.placeholder] }))) }), (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, { droppableId: "CompletedList", children: (provided) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: provided.innerRef }, provided.droppableProps, { className: "todo-container", style: { backgroundColor: "#baf7ba" }, children: [(0, jsx_runtime_1.jsx)("h4", { children: "Done" }), todoList.map((eachTodo, index) => eachTodo.status === "done" && ((0, jsx_runtime_1.jsx)(SingleTodo_1.SingleTodo, { index: index, id: eachTodo.id, todo: eachTodo, handleDelete: handleDelete, handleUpdate: handleUpdate }))), provided.placeholder] }))) })] }));
};
exports.TodoList = TodoList;
