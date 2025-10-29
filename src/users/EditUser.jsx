import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../constant';
import { useNavigate, useParams } from 'react-router';

const EditUser = () => {
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({});
  const params = useParams();

  const fetchByID = async () => {
    try {
      const result = await axios.get(baseUrl + "/" + params?.id);
      if (result.status === 200) {
        setinputs(result.data)
      } else {
        setinputs({});
      }
    } catch (err) {
      alert(err.message);
    }

  }

  useEffect(() => {
    fetchByID();
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const existingInput = { ...inputs };
    existingInput[name] = value;
    setinputs(existingInput);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(baseUrl + "/" + params?.id, inputs);
      console.log(response);
      if (response.status === 200) {
        navigate(-1);
      }
    } catch (err) {
      console.log(err)
      alert(err.message);
    }
  }

  return (
    <>
      <div className='container'>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Full Name</label>
            <input
              onChange={handleInputChange}
              name='name'
              type="text"
              className="form-control"
              placeholder="Enter your lastname"
              value={inputs?.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input
              onChange={handleInputChange}
              name='email'
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={inputs?.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Mobile</label>
            <input
              onChange={handleInputChange}
              name='phone'
              type="text"
              className="form-control"
              placeholder="Enter your phone"
              value={inputs?.phone}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Company Name</label>
            <input
              onChange={handleInputChange}
              name='company name'
              type="text"
              className="form-control"
              placeholder="Enter your company name"
              value={inputs["company name"]}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Job Title</label>
            <input
              onChange={handleInputChange}
              name='job title'
              type="text"
              className="form-control"
              placeholder="Enter your job title"
              value={inputs["job title"]}
            />
          </div>
          <button className='btn btn-sm btn-secondary' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default EditUser