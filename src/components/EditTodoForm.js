import React from 'react';
import { useState } from 'react';

const EditTodoForm = ({editTodo, task}) => {
     // to keep track of what user is typing
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
         // to prevent the default of page reload
        e.preventDefault();

         // pass the state from todoform to todowrapper
        editTodo(value, task.id);

        setValue("")
    };

    return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
        <input type='text' 
        placeholder='Update task'
        className='todo-input'
        onChange={(e) => setValue(e.target.value)}
        value={value}/>
        <button className='todo-btn' type='submit'>Update Task</button>
    </form>
    );
};


export default EditTodoForm;