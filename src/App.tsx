import { useContext, useState } from "react";
import AddTodo from "./components/Todos/AddTodo";
import Todos from "./components/Todos/Todos";
import { MainContext } from "./context/MainContext";

function App() {
  const { addTodo } = useContext(MainContext)!;

  return (
    <div style={{ height: "100vh" }}>
        <AddTodo addTodo={addTodo} />
        <Todos />
       
    </div>
  );
}

export default App;
