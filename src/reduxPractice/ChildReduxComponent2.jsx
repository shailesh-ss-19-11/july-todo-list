import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const ChildReduxComponent2 = () => {


    const userData = useSelector((state) => state.userReducer.userData);
    return (
        <div>
            <h2>ChildReduxComponent2</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>job title</th>
                        <th>phone</th>
                        <th>company name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData?.length > 0 ?
                        userData?.map((user) => {
                            return (
                                <tr>
                                    {/* <td onClick={()=>navigate("/users/"+user.id)}>{user.id}</td> */}
                                    <td ><Link to={`/users/${user.id}`}>{user.id}</Link></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user["job title"]}</td>
                                    <td>{user.phone}</td>
                                    <td>{user["company name"]}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => navigate("edit-user/" + user.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }) :
                        <tr>
                            <td>No data found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ChildReduxComponent2