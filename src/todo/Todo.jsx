import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoTable from "./TodoTable";
import EditTodo from "./EditTodo";
import Swal from "sweetalert2";

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
    const totalPages = Math.ceil(todoList.length / itemsPerPage);


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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            const newTodoList = [...todoList];
            const filteredList = newTodoList.filter((task) => task.id !== taskid)
            setTodoList(filteredList);
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                let existingtodoList = [...todoList];
                const newTodoList = existingtodoList.filter((element) => {
                    return element.isChecked === false
                });
                setTodoList(newTodoList);
                setselectAll(false);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const selectAllTodo = (event) => {
        setselectAll(event.target.checked);

        const updatedList = todoList.map((element) => {
            if (currentItems.includes(element)) {
                return { ...element, isChecked: event.target.checked }
            }
            return element;
        })

        setTodoList(updatedList);
    }

    const handleSort = (columnName) => {
        alert("hi")
        if (columnName === "taskName") {
            alert("hi inside")
            setTodoList(todoList.sort());
        }
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
                currentItems={currentItems}
                handleSort={handleSort}
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
                    <button className={currentPage !== index + 1 ? "btn btn-sm m-1 btn-primary " : "btn btn-sm m-1 btn-secondary border border-dark px-3 "} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                )
            })

            }
        </>
    )
}

export default Todo;