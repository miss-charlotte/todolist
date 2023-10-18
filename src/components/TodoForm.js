import React from 'react';
import { useState } from 'react';

const TodoForm = ({addTodo}) => {
    // to keep track of what user is typing
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        // to prevent the default of page reload
        e.preventDefault();

        // pass the state from todoform to todowrapper
        addTodo(value);

        setValue("")
    };

    return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        placeholder='What is the task today?'
        className='todo-input'
        onChange={(e) => setValue(e.target.value)}
        value={value}/>
        <button className='todo-btn' type='submit'>Add Task</button>
    </form>
    );
};

export default TodoForm;