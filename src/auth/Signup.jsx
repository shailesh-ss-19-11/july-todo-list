import React, { useState } from 'react'

const Signup = () => {
    const [formInput, setformInput] = useState({});

    const handleInputChange = (e) => {
        const obj = { ...formInput };
        obj[e.target.name] = e.target.value
        setformInput(obj);
    }
    console.log(formInput);

    // {
    //     firstName:"shailesh",
    //     lastName:"gk",
    //     email:"email@emai.com",
    //     mobile:"0987654345678",
    //     dob:"22/22/22"
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://flq9ld6f-3000.inc1.devtunnels.ms/signup", {
            method: "post",
            body: JSON.stringify(formInput),
            headers: {
                "content-type": "application/json"
            }
        });

        const result = await response.json();
    }

    return (
        <div className='container'>
            <h3>SignUp Form</h3>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Firstname</label>
                    <input
                        onChange={handleInputChange}
                        name='firstName'
                        type="text"
                        className="form-control"
                        placeholder="Enter your FirstName"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">LastName</label>
                    <input
                        onChange={handleInputChange}
                        name='lastName'
                        type="text"
                        className="form-control"
                        placeholder="Enter your lastname"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Email</label>
                    <input
                        onChange={handleInputChange}
                        name='email'
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile number</label>
                    <input
                        onChange={handleInputChange}
                        name='mobile'
                        type="text"
                        className="form-control"
                        placeholder="Enter your mobile number"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">DOB</label>
                    <input
                        onChange={handleInputChange}
                        name='dob'
                        type="date"
                        className="form-control"
                        placeholder="Enter dob"
                    />
                </div>
                <button className='btn btn-sm btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup