import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../constant';
import { useNavigate, useParams } from 'react-router';
import Loader from '../components/Loader';

const UserInfo = () => {
  const [user, setUser] = useState({})
  const [loading, setloading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  const fetchByID = async () => {
    try {
      const result = await axios.get(baseUrl + "/" + params?.id);
      if (result.status === 200) {
        setUser(result.data)
        setloading(false)
      } else {
        setloading(false)
        setUser({});
      }
    } catch (err) {
      setloading(false);
      alert(err.message);
    }

  }

  useEffect(() => {
    setloading(true);
    fetchByID();
  }, []);


  return (
    <>
      {loading ? <Loader /> :
        <div>
          <button className='btn btn-sm btn-primary' onClick={() => navigate(-1)}>Go Back</button>
          <div class="card" style={{ "width": "100%" }}>
            <div class="card-body">
              <h5 class="card-title">{user?.name} : {user && user["job title"]}</h5>
              <h3>Email - {user.email}</h3>
              <h3>Phone - {user.phone}</h3>
              <h3>Company Name - {user && user["company name"]}</h3>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default UserInfo