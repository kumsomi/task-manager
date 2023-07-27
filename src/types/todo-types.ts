export interface inputTodoProp {
  title: string;
  description: string;
}
export interface todoProp {
  title: string;
  description: string;
  id: string;
  status: string;
}
export interface taskFormProps {
  input: inputTodoProp;
  setInput: React.Dispatch<React.SetStateAction<inputTodoProp>>;
  isEditing: boolean;
  handleFormSubmit: (event: React.FormEvent) => void;
}

export interface todoListProp extends Array<todoProp> {}

export interface todoListComponentProp {
  todoList: todoListProp;
  setTodoList: React.Dispatch<React.SetStateAction<todoListProp>>;
  input: inputTodoProp;
  setInput: React.Dispatch<React.SetStateAction<inputTodoProp>>;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setEditItemId: React.Dispatch<React.SetStateAction<string | null>>;
}
export interface singleTodoProp {
  id: string;
  index: number;
  todo: todoProp;
  handleDelete: (todoId: string) => void;
  handleUpdate: (todoId: string) => void;
}
