const TodoTable = (props) => {
    const { todoList,deleteTask } = props;
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoList.length > 0 ?
                                todoList.map((task) => {
                                    return (
                                        <tr>
                                            <td>{task.id}</td>
                                            <td>{task.task}</td>
                                            <td>
                                                <button className="btn btn-sm btn-success mx-1">Edit</button>
                                                <button className="btn btn-sm btn-danger mx-1" onClick={()=>deleteTask(task.id)}>Delete</button>
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