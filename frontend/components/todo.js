import React from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo._id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </div>
    );
};

export default Todo;
