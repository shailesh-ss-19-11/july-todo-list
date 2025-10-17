import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Signup = () => {
    const [formInput, setformInput] = useState({});



    // const handleInputChange = (e) => {
    //     const obj = { ...formInput };
    //     obj[e.target.name] = e.target.value
    //     setformInput(obj);
    // }

    // {
    //     firstName:"shailesh",
    //     lastName:"gk",
    //     email:"email@emai.com",
    //     mobile:"0987654345678",
    //     dob:"22/22/22"
    // }
    const validationSchema = Yup.object({
        firstName: Yup.string().required("FirstName is required").min(4).max(20),
        lastName: Yup.string().required().min(4).max(20),
        email: Yup.string().required("email is much require").matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
            'Please enter a valid email address with a specific format'
        ),
        mobile: Yup.string().required().min(10).max(10),
        dob: Yup.date()
    })




    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        dob: "",
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        }
    })

    const handleSubmit = async (values) => {


        const response = await fetch("https://localhost:3000/signup", {
            method: "post",
            body: JSON.stringify(values),
            headers: {
                "content-type": "application/json"
            }
        });

        const result = await response.json();
        console.log(result)
    }


    return (
        <div className='container'>
            <h3>SignUp Form</h3>


            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Firstname</label>
                <input
                    // onChange={handleInputChange}
                    onChange={formik.handleChange}
                    name='firstName'
                    type="text"
                    className="form-control"
                    placeholder="Enter your FirstName"
                    value={formik.values.firstName}
                />
                <p className='text-danger'>{formik.errors.firstName}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">LastName</label>
                <input
                    // onChange={handleInputChange}
                    onChange={formik.handleChange}
                    name='lastName'
                    type="text"
                    className="form-control"
                    placeholder="Enter your lastname"
                    value={formik.values.lastName}

                />
                <p className='text-danger'>{formik.errors.lastName}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Email</label>
                <input
                    // onChange={handleInputChange}
                    name='email'
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}

                />
                <p className='text-danger'>{formik.errors.email}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile number</label>
                <input
                    // onChange={handleInputChange}
                    name='mobile'
                    type="text"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                />
                <p className='text-danger'>{formik.errors.mobile}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">DOB</label>
                <input
                    // onChange={handleInputChange}
                    name='dob'
                    type="date"
                    className="form-control"
                    placeholder="Enter dob"
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                />
                <p className='text-danger'>{formik.errors.dob}</p>

            </div>
            <button className='btn btn-sm btn-primary' type='submit' onClick={formik.handleSubmit}>Submit</button>

        </div>
    )
}

export default Signup