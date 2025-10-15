import React from 'react'

const Signup = () => {
    return (
        <div className='container'>
            <h3>SignUp Form</h3>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Firstname</label>
                <input
                    type="text"
                    className="form-control"
                    
                    placeholder="Enter your FirstName"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">LastName</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your lastname"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile number</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your mobile number"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">DOB</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder="Enter dob"
                />
            </div>
            <button className='btn btn-sm btn-primary' type='submit'>Submit</button>
        </div>
    )
}

export default Signup