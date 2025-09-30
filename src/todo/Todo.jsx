import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoTable from "./TodoTable";

const Todo = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodoTask = () => {
        const uuid = uuidv4();
        let obj = { id: uuid, task: input, isRemoved: false };
        let newTodoList = [...todoList, obj]
        setTodoList(newTodoList);
    }

    return (
        <>
            <div className="container d-flex gap-3">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Task" onChange={(e) => setInput(e.target.value)} />
                </div>
                <div>
                    <button className="btn btn-md btn-primary" onClick={addTodoTask}>ADD</button>
                </div>
            </div>

            <TodoTable todoList={todoList}/>
        </>
    )
}

export default Todo;