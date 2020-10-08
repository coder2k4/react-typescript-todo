import React, {useEffect, useState} from 'react';
import {Navbar} from "./components/Navbar";
import {FormInput} from "./components/FormInput";
import {ITodo} from "./interfaces";
import {TodosList} from "./components/TodosList";

function App() {

    const [todos, setDodos] = useState<ITodo[]>([])

    useEffect(()=>{
        const fromLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setDodos(fromLocalStorage)
    }, [])


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            complete: false
        }
        setDodos((prevState) => ([newTodo, ...prevState]))
    }


    const onToggle = (id: number) => {
        console.log(id)
        // setDodos((prev) =>
        //     prev.map(todo => {
        //         if (todo.id === id) {
        //             todo.complete = !todo.complete
        //             console.log(todo.complete)
        //             console.log('DOUBLE???')
        //         }
        //         return todo
        //     }))
        setDodos(todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo
        }))
    }


    const onDelete = (id: number) => {
        setDodos((prev) => {
            return prev.filter(todo => todo.id !== id)
        })
    }


    return (
        <>
            <Navbar/>
            <div className="container">
                <FormInput onAdd={addHandler}/>
                <TodosList todos={todos}
                           onToggle={onToggle}
                           onDelete={onDelete}/>
            </div>
        </>
    );
}

export default App;
