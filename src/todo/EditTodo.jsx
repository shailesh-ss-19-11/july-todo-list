import { Modal } from "react-bootstrap";
import { useState } from "react";
const EditTodo = (props) => {
    const [task, settask] = useState(props.task);
    const { showModal, setshowModal, updateTask } = props;
    // console.log(task)

    const handleChange = (event) => {
        settask({ ...task, task: event.target.value })
    }
    return (
        <Modal
            show={showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => setshowModal(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="input-group mb-3">
                    <input type="text"
                        className="form-control"
                        defaultValue={task.task}
                        placeholder="Update Task"
                        onChange={handleChange}
                    // onKeyDown={handleKeyEvent}
                    />
                </div>
                <button className="btn btn-sm btn-primary" onClick={()=>updateTask(task)}>Submit</button>
            </Modal.Body>
        </Modal>

    )
}

export default EditTodo;
