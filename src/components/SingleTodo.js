"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleTodo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const ai_1 = require("react-icons/ai");
const SingleTodo = ({ id, index, todo, handleDelete, handleUpdate }) => {
    return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Draggable, { draggableId: id, index: index, children: (provided) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "single-todo", ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { children: [(0, jsx_runtime_1.jsxs)("p", { className: 'single-todo-title', children: [(0, jsx_runtime_1.jsx)("strong", { children: todo.title }), ": ", todo.description] }), (0, jsx_runtime_1.jsxs)("div", { className: "single-todo-btn", children: [(0, jsx_runtime_1.jsx)(ai_1.AiFillEdit, { className: 'edit-btn', onClick: () => handleUpdate(todo.id) }), (0, jsx_runtime_1.jsx)(ai_1.AiFillDelete, { className: 'delete-btn', onClick: () => handleDelete(todo.id) })] })] }), id)) }));
};
exports.SingleTodo = SingleTodo;
