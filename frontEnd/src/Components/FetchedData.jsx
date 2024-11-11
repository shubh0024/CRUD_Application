import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FetchedData(props) {
    
    const [student, setStudent] = useState([]);
    const navigate = useNavigate();
    const [ok, setOkay] = useState(false);
    async function getData()
    {
        //const d = await axios.get('https://642cb7d4bf8cbecdb4f5beaa.mockapi.io/api/v1/coerproject')
        const d = await axios.get('http://localhost:6500/')
        console.log(d.data);
        setStudent(d.data);
    }

    useEffect(function(){
        getData();
    },[ok]);

    function HandlerAdd()
    {
        navigate('/create')
    }
    async function HandlerDelete(name)
    {
        const d = await axios.delete('http://localhost:6500/'+name)
        console.log(d)
        setOkay(!ok)
    }
    return (
        <div className='container'>
            <h1>In this component we will be fetching data from Mock Api</h1>

            <button onClick={HandlerAdd} className='btn btn-primary'>Add</button>

            <table className='table table-striped table-hover table-primary'>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Designation</th>
                    <th>Course</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        student.map(item=>(
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.designation}</td>
                               
                                <td><button onClick={()=>navigate('/edit/'+item.name)} className='btn btn-warning'>Edit</button></td>
                                <td><button onClick={()=>confirm('Are you sure')?HandlerDelete(item.name):alert('Happy Stay')} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default FetchedData;