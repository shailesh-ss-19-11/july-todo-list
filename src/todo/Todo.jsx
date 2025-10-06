import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoTable from "./TodoTable";
import EditTodo from "./EditTodo";

const Todo = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [task, setTask] = useState({});

    const addTodoTask = () => {
        // const uuid = uuidv4();
        if (input !== "") {
            let newTodoList = [...todoList];
            const isExist = newTodoList.some((element) => {
                return element.task.toLowerCase().trim() === input.toLowerCase().trim()
            })
            console.log(isExist);

            if (isExist) {
                alert("task is already exist");
            } else {
                let obj = { id: Date.now(), task: input, isRemoved: false };
                newTodoList = [...newTodoList, obj];

                setTodoList(newTodoList);
                setInput("");
            }
        } else {
            alert("please write something in input")
        }
    }

    const handleKeyEvent = (event) => {
        console.log("first")
        // console.log();
        if (event.nativeEvent.key === "Enter") {
            if (input !== "") {
                let newTodoList = [...todoList];
                const isExist = newTodoList.some((element) => {
                    return element.task.toLowerCase().trim() === input.toLowerCase().trim()
                })
                console.log(isExist);

                if (isExist) {
                    alert("task is already exist");
                } else {
                    let obj = { id: Date.now(), task: input, isRemoved: false };
                    newTodoList = [...newTodoList, obj];

                    setTodoList(newTodoList);
                    setInput("");
                }
            } else {
                alert("please write something in input")
            }
        }
    }

    const deleteTask = (taskid) => {
        // alert("delete task called "+ taskid);
        const newTodoList = [...todoList];
        const filteredList = newTodoList.filter((task) => task.id !== taskid)
        setTodoList(filteredList);
    }

    console.log(showModal)

    const updateTask = (updatedValue) => {
        console.log(updatedValue);
        const newList = todoList.map((task) => {
            if (task.id === updatedValue.id) {
                return updatedValue;
            } else {
                return task;
            }
        })
        setTodoList(newList);
        setshowModal(false);
    }

    return (
        <>
            <div className="container d-flex gap-3">
                <div className="input-group mb-3">
                    <input type="text"
                        className="form-control"
                        value={input}
                        placeholder="Enter Task"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyEvent}
                    />
                </div>
                <div>
                    <button className="btn btn-md btn-primary" onClick={addTodoTask}>ADD</button>
                </div>
            </div>

            <TodoTable
                setshowModal={setshowModal}
                todoList={todoList}
                deleteTask={deleteTask}
                setTask={setTask}
            />
            {/* conditional rendering  */}
            {showModal ?
                <EditTodo
                    task={task}
                    setshowModal={setshowModal}
                    updateTask={updateTask}
                    showModal={showModal} />
                : null}

        </>
    )
}

export default Todo;