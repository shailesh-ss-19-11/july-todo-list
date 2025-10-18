import React from 'react'

const UsersTable = (props) => {
    const { userData } = props;
    console.log(userData, "userData")
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>job title</th>
                        <th>phone</th>
                        <th>company name</th>
                    </tr>
                </thead>
                <tbody>
                    {userData?.length > 0 ?
                        userData?.map((user) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user["job title"]}</td>
                                    <td>{user.phone}</td>
                                    <td>{user["company name"]}</td>
                                </tr>
                            )
                        }) :
                        <tr>
                            <td>No data found</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default UsersTable