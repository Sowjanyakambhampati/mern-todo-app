import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './components/Todo';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await axios.get('http://localhost:5000/api/todos');
        setTodos(res.data);
    };

    const createTodo = async () => {
        const res = await axios.post('http://localhost:5000/api/todos', { text });
        setTodos([...todos, res.data]);
        setText('');
    };

    const toggleComplete = async (id) => {
        const res = await axios.put(`http://localhost:5000/api/todos/${id}`);
        setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={createTodo}>Add Todo</button>
            <div>
                {todos.map((todo) => (
                    <Todo
                        key={todo._id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
