import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreatdataAll.css'
import process from 'process';


function CreatdataAll(props) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('');
  const [dataList, setDataList] = useState([]); // State to store the fetched data
  const navigate = useNavigate();

  // Fetch data when the component is mounted
  useEffect(() => {
    async function fetchData() {
        const apiUrl = process.env.REACT_APP_API_URL;
      try {
        const response = await axios.get(apiUrl);
        setDataList(response.data); // Store the fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component is mounted

  // Handle form submission
  async function HandlerSubmit() {
    const data = { name, mobile, city, course };
    console.log('Data to be submitted:', data);

    try {
      const r = await axios.post('https://642cb7d4bf8cbecdb4f5beaa.mockapi.io/api/v1/coerproject', data);
      console.log('Response from POST request:', r);
      navigate('/');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  return (
    <div className='row'>
      <h1 className='text-center mb-4 tex-primary'>Create Here</h1>
      <div className='offset-3 shadow mt-3 p-3 col-sm-5'>
        <div className="mb-3">
          <label for="" class="form-label">Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" />
        </div>

        <div className="mb-3">
          <label for="" class="form-label">Mobile</label>
          <input type="text" onChange={(e) => setMobile(e.target.value)} class="form-control" />
        </div>
        
        <div className="mb-3">
          <label for="" class="form-label">City</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} class="form-control" />
        </div>
        
        <div className="mb-3">
          <label for="" class="form-label">Course</label>
          <input type="text" onChange={(e) => setCourse(e.target.value)} class="form-control" />
        </div>

        <button type="submit" onClick={() => HandlerSubmit()} class="btn btn-primary">Submit</button>
      </div>

      {/* Displaying the fetched data */}
      <div className="data-container mt-5 ">
        <h2>All Data</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.city}</td>
                <td>{item.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreatdataAll;
