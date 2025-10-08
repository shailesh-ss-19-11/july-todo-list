const TodoTable = (props) => {
    const { todoList, deleteTask, setshowModal, setTask,handleSelectTodo } = props;
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th scope="col">#</th>
                            <th scope="col">Task Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoList.length > 0 ?
                                todoList.map((task,index) => {
                                    return (
                                        <tr key={task.id}>
                                            <td><input type="checkbox" onChange={(e)=>handleSelectTodo(e,task.id,index)}/></td>
                                            <td>{task.id}</td>
                                            <td>{task.task}</td>
                                            <td>
                                                <button className="btn btn-sm btn-success mx-1" onClick={() => { setshowModal(true); setTask(task) }}>Edit</button>
                                                <button className="btn btn-sm btn-danger mx-1" onClick={() => deleteTask(task.id)}>Delete</button>
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