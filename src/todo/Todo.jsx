import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTable from "./TodoTable";
import EditTodo from "./EditTodo";
import Swal from "sweetalert2";
import moment from "moment";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [task, setTask] = useState({});
  const [selectAll, setselectAll] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const itemsPerPage = 10;


  const addTodoTask = () => {
    if (input.trim() !== "") {
      let newTodoList = [...todoList];
      const isExist = newTodoList.some(
        (element) =>
          element.task.toLowerCase().trim() === input.toLowerCase().trim()
      );

      if (isExist) {
        alert("Task already exists!");
      } else {
        let obj = {
          id: Date.now(),
          task: input,
          createdAt: moment(new Date()).format("l"),
          isChecked: false,
          isCompleted: false,
        };
        newTodoList = [...newTodoList, obj];

        setTodoList(newTodoList);
        setFilteredList(newTodoList);
        setInput("");
      }
    } else {
      alert("Please write something in input");
    }
  };


  const handleKeyEvent = (event) => {
    if (event.nativeEvent.key === "Enter") {
      addTodoTask();
    }
  };


  const deleteTask = (taskid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filteredList = todoList.filter((task) => task.id !== taskid);
        setTodoList(filteredList);
        setFilteredList(filteredList);
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const updateTask = (updatedValue) => {
    const newList = todoList.map((task) =>
      task.id === updatedValue.id ? updatedValue : task
    );
    setTodoList(newList);
    setFilteredList(newList);
    setshowModal(false);
  };


  useEffect(() => {
    const todoListItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    setTodoList(todoListItems);
    setFilteredList(todoListItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoList));
  }, [todoList]);


  const handleSelectTodo = (event, id) => {
    let updatedTodoList = todoList.map((task) =>
      task.id === id ? { ...task, isChecked: event.target.checked } : task
    );
    setTodoList(updatedTodoList);
    setFilteredList(updatedTodoList);
  };

  const removeSelected = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newTodoList = todoList.filter((element) => !element.isChecked);
        setTodoList(newTodoList);
        setFilteredList(newTodoList);
        setselectAll(false);
        Swal.fire({
          title: "Deleted!",
          text: "Selected tasks have been deleted.",
          icon: "success",
        });
      }
    });
  };


  const selectAllTodo = (event) => {
    setselectAll(event.target.checked);
    const updatedList = todoList.map((element) => ({
      ...element,
      isChecked: event.target.checked,
    }));
    setTodoList(updatedList);
    setFilteredList(updatedList);
  };

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      setFilteredList(todoList);
    } else {
      const searched = todoList.filter((task) =>
        task.task.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      setFilteredList(searched);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput, todoList]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);


  const completed = (index) => {
    const updatedList = [...todoList];
    updatedList[index].isCompleted = true;
    setTodoList(updatedList);
    setFilteredList(updatedList);
  };



  return (
    <>
        <h1 className="text-center">TODO APP</h1>
      <div className="container d-flex gap-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={input}
            placeholder="Enter Task"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyEvent}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={searchInput}
            placeholder="Search task"
            onChange={() => setSearchInput(event.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-md btn-primary" onClick={addTodoTask}>
            ADD
          </button>
        </div>
        <div>
          <button className="btn btn-md btn-danger" onClick={removeSelected}>
            Remove Selected
          </button>
        </div>
      </div>

      <TodoTable
        handleSelectTodo={handleSelectTodo}
        setshowModal={setshowModal}
        todoList={filteredList}
        deleteTask={deleteTask}
        setTask={setTask}
        selectAllTodo={selectAllTodo}
        selectAll={selectAll}
        currentItems={currentItems}
        completed={completed}
      />

      {showModal && (
        <EditTodo
          task={task}
          setshowModal={setshowModal}
          updateTask={updateTask}
          showModal={showModal}
        />
      )}

      <div className="text-center mt-3">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={
              currentPage !== index + 1
                ? "btn btn-sm m-1 btn-primary"
                : "btn btn-sm m-1 btn-secondary border border-dark px-3"
            }
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Todo;

