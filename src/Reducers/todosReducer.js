import { v4 as uuidv4 } from "uuid";

export default function todosReducer(currentTodos, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const updatedTodos = [
        ...currentTodos,
        { id: uuidv4(), title: action.payload.title, isCompleted: false },
      ];
     
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "REMOVE_TODO": {
        const newTodos = currentTodos.filter((t) => t.id !== action.payload.todo.id);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;}
    case "EdIT_TODO": {
        const newTodoChanged = currentTodos.map((t) => {
          if (t.id == action.payload.id) {
            return { ...t, title: action.payload.editTitle };
          } else return t;
        });
        localStorage.setItem("todos", JSON.stringify(newTodoChanged));
        return newTodoChanged;}
        case "CHECK_TODO": {
            const checkedTodos = currentTodos.map((t) =>
              t.id === action.payload.id ? { ...t, isCompleted: !t.isCompleted } : t
            );
            localStorage.setItem("todos", JSON.stringify(checkedTodos));

            return checkedTodos;}
    case "LOAD_TODOS": {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        return storedTodos;
    }

    default: {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}
