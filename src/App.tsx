import { useContext, useState } from "react";
import AddTask from "./components/Todos/AddTask";
import ToDoAPP from "./components/Todos/ToDoAPP";
import { MainContext } from "./providers/MainProvider";

function App() {
  const { addTodo } = useContext(MainContext)!;

  return (
    <div style={{ height: "100vh" }}>
        <AddTask addTodo={addTodo} />
        <ToDoAPP />
    </div>
  );
}

export default App;
