import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoTable from "./TodoTable";
import EditTodo from "./EditTodo";

const Todo = () => {
    // executes first 
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [task, setTask] = useState({});
    const [selectAll, setselectAll] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate indexes
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = todoList.slice(indexOfFirstItem, indexOfLastItem);
    console.log(currentItems);
    const totalPages = Math.ceil(todoList.length / itemsPerPage);

    // 50/10

    useEffect(() => {
        setTodoList(currentItems);
    }, [currentPage])


    const addTodoTask = () => {
        // const uuid = uuidv4();
        if (input !== "") {
            let newTodoList = [...todoList];
            const isExist = newTodoList.some((element) => {
                return element.task.toLowerCase().trim() === input.toLowerCase().trim()
            })

            if (isExist) {
                alert("task is already exist");
            } else {
                let obj = { id: Date.now(), task: input };
                newTodoList = [...newTodoList, obj];

                setTodoList(newTodoList);
                setInput("");
            }
        } else {
            alert("please write something in input")
        }
    }

    const handleKeyEvent = (event) => {
        if (event.nativeEvent.key === "Enter") {
            if (input !== "") {
                let newTodoList = [...todoList];
                const isExist = newTodoList.some((element) => {
                    return element.task.toLowerCase().trim() === input.toLowerCase().trim()
                })

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

    const updateTask = (updatedValue) => {
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


    useEffect(() => {
        const todoListItems = JSON.parse(localStorage.getItem("todoItems"));

        setTodoList(todoListItems);

        // use for fetch api's 
        // manage sideeffects 
        // clean component 
        // console.log("inside UseEffect");

    }, [])

    const updateLocalStorage = () => {
        localStorage.setItem("todoItems", JSON.stringify(todoList))
    }

    useEffect(() => {
        updateLocalStorage();
    }, [todoList])


    const handleSelectTodo = (event, id) => {
        let updatedTodoList = todoList.map((task) => {
            if (task.id === id) {
                return { ...task, isChecked: event.target.checked }
            } else {
                return { ...task, isChecked: task.isChecked || false }
            }
        })
        setTodoList(updatedTodoList);
    }

    const removeSelected = () => {
        let existingtodoList = [...todoList];
        const newTodoList = existingtodoList.filter((element) => {
            return element.isChecked === false
        });
        setTodoList(newTodoList);
        setselectAll(false);
    }

    const selectAllTodo = (event) => {
        setselectAll(event.target.checked)
        const newTodoList = todoList.map((element) => {
            return { ...element, isChecked: event.target.checked };
        })
        setTodoList(newTodoList);
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
                <div>
                    <button className="btn btn-md btn-primary" onClick={removeSelected}>Remove Selected</button>
                </div>
            </div>

            <TodoTable
                handleSelectTodo={handleSelectTodo}
                setshowModal={setshowModal}
                todoList={todoList}
                deleteTask={deleteTask}
                setTask={setTask}
                selectAllTodo={selectAllTodo}
                selectAll={selectAll}

            />
            {/* conditional rendering  */}
            {showModal ?
                <EditTodo
                    task={task}
                    setshowModal={setshowModal}
                    updateTask={updateTask}
                    showModal={showModal} />
                : null}
            {console.log(currentPage)}

            {[...Array(totalPages)].map((_, index) => {
                return (
                    <button onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                )
            })

            }
        </>
    )
}

export default Todo;