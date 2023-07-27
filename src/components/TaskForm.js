"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TaskForm = ({ input, setInput, isEditing, handleFormSubmit }) => {
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [isEditing]);
    return ((0, jsx_runtime_1.jsxs)("form", { className: 'add-task-form-container', onSubmit: (e) => { var _a; handleFormSubmit(e); (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur(); }, children: [(0, jsx_runtime_1.jsx)("input", { ref: inputRef, className: 'form-input', type: "text", name: "title", value: input.title, placeholder: 'Add task...', onChange: (e) => setInput(allValues => (Object.assign(Object.assign({}, allValues), { [e.target.name]: e.target.value }))), required: true }), (0, jsx_runtime_1.jsx)("input", { className: 'form-input', type: "text", name: "description", value: input.description, placeholder: 'task description', onChange: (e) => setInput(allValues => (Object.assign(Object.assign({}, allValues), { [e.target.name]: e.target.value }))) }), (0, jsx_runtime_1.jsx)("input", { type: "submit", className: "form-input", name: 'submit-btn', value: isEditing ? 'Save' : 'Add' })] }));
};
exports.TaskForm = TaskForm;
