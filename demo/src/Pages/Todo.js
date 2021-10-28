import React, {useEffect, useState} from 'react';
import './todo.css';
import TodoData from "./TodoData";
const Todo = () => {
    const [todos, updateTodoData] = useState([]);

    //componentDidMount in class component
    useEffect(()=>{
        todoApiCall();
    }, [])

    const todoApiCall = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => updateTodoData(data.slice(1,4)))
    }
    // debugger;
    console.log('todos data', todos)

    const addTodo = () => {
       const todoInput = document.getElementById('todoInput').value;
       console.log('input value ', todoInput)
       if(todoInput){
           const randomNumb = Math.floor(Math.random() * 10);
           updateTodoData([...todos, {completed: true,
               id: randomNumb,
               title: todoInput,
               userId: randomNumb
           }])
       }
    }
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">Awesome Todo list</h4>
                                <div className="add-items d-flex">
                                    <input type="text" className="form-control todo-list-input" id="todoInput" placeholder="What do you need to do today?" />
                                    <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={addTodo}>Add</button>
                                </div>
                                <div className="list-wrapper">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        <TodoData data={todos} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Todo;