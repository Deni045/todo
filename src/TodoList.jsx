import React, {useState} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(){
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        
    }

    const completeTodo = id => {
        let updataedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updataedTodos)
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos ={todos}
            completeTodo={completeTodo}
            />
        </div>
    )
}

export default TodoList