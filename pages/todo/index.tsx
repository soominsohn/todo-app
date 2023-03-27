import { Button, TextField, Container }from '@mui/material';
import { useState, useRef } from 'react';
import TodoItemList from '@/components/ToDoItemList';
import ToDoInsertForm from '@/components/ToDoInsertForm';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const nextId = useRef(0);

    const 항목추가 = (todo) => {
        const nextTodo = {
            id: nextId.current,
            text: todo,
            checked: false
        };

        console.log(todo);
        const nextTodos = todos.concat(nextTodo);
        setTodos(nextTodos);
        nextId.current += 1;
    }

    return( 
        <Container>
            <h2>TODO List</h2>
            <ToDoInsertForm 항목추가={항목추가}></ToDoInsertForm>
            <TodoItemList todos={todos}></TodoItemList>

        </Container>
    );

}

export default Todos;

