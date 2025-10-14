const TodoTable = (props) => {
    const { deleteTask, setshowModal, setTask, handleSelectTodo, selectAllTodo, selectAll, currentItems, handleSort, completed } = props;
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th><input type="checkbox" checked={selectAll} onChange={selectAllTodo} /></th>
                            <th scope="col" onClick={() => handleSort("id")}>#</th>
                            <th scope="col" onClick={() => handleSort("taskName")}>Task Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.length > 0 ?
                                currentItems.map((task, index) => {
                                    return (
                                        <tr key={task.id} className="bg-dark">
                                            <td className={task.isCompleted === true ? "bg-secondary" : ""}><input type="checkbox" checked={task.isChecked} onChange={(e) => handleSelectTodo(e, task.id)} /></td>
                                            <td className={task.isCompleted === true ? "bg-secondary" : ""}>{task.id}</td>
                                            <td className={task.isCompleted === true ? "bg-secondary" : ""}>{task.task}</td>
                                            <td className={task.isCompleted === true ? "bg-secondary" : ""}>
                                                <button className="btn btn-sm btn-success mx-1" onClick={() => { setshowModal(true); setTask(task) }}>Edit</button>
                                                <button className="btn btn-sm btn-danger mx-1" onClick={() => deleteTask(task.id)}>Delete</button>
                                                <button className="btn btn-sm btn-secondary mx-1" onClick={() => completed(index)}>{task.isCompleted ? "Completed" : "mark as complete"}</button>
                                            </td>
                                        </tr>
                                    )
                                }) : null
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoTable;


[1212, 3434, 879879, 123132, 78987912, 33232]