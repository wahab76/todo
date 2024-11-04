import React, {useState, useEffect} from 'react'

function Td() {
    const[todos, setTodos] = useState( () => {
        const std = localStorage.getItem('todos');
        return std ? JSON.parse(std) : [];
    });

    const[input, setInput] = useState('');

   
    useEffect( () => {
        localStorage.setItem( "todos", JSON.stringify(todos) );
        }, [todos]);

    const inc = (e) => {
       setInput( e.target.value );

    }

    const add = () => {
        if(input.trim()){
            setTodos([...todos, input.trim()]);
            setInput('');
        }

    }

    const keyf = (e) => {

        if(e.key === 'Enter'){
            add();
        }

    }

    const del = (index) => {
        setTodos(todos.filter((_, i) => i !== index));

    }
  return (
    <div className="td flex items-center justify-center flex-col bg-blue-200 w-[80%] md:w-[30%] m-auto py-10 rounded-lg left-[10%] absolute top-[20%] md:left-[35%]">
        <h1 className="text-2xl font-bold text-center">ToDo List</h1>
        <div className="tdd mt-4">
            <input type="text" onKeyDown={keyf} className="text-xl py-2 px-4" value={input} onChange={inc} placeholder='Enter your Task' />
            <button onClick={add} className="text-xl px-4 py-2 bg-gray-700 ml-4 text-white rounded-lg">Add</button>
            {todos.map((todo, index) => (
                <div key={index} className="flex items-center justify-between w-[80%] m-auto mt-4">
                    <p className='text-xl font-medium bg-orange-300 p-2 rounded-lg'>{todo}</p>
                    <button onClick={() => del(index)} className="text-xl px-4 py-2 rounded-lg bg-gray-800 text-white ml-2">Delete</button>

                </div>

            ))}

        </div>
    </div>
  )
}

export default Td