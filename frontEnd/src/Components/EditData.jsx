import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function EditData(props) {
  const {name} = useParams();  

  const [stu, setStu] = useState({});
  const navigate = useNavigate()
  async function getData()
    {
        const d = await axios.get('http://localhost:6500/'+name)
        
        const [s] = d.data;
        console.log(s);
        setStu(s);
    }

    useEffect(function(){
        getData();
    },[]);

    async function HandlerUpdate()
    {
      console.log('testing')
      const d = await axios.put('http://localhost:6500/'+name, stu)
      console.log(d);
      navigate('/')

    }
    return (
       <div className='row '>
        <h1>Edit here</h1>
        <div className='offset-3 shadow mt-3 p-3 col-sm-5'>
        
        <div class="mb-3">
          <label for="" class="form-label">Id </label>
          
         
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Name</label>
          <input onChange={(e)=>setStu({...stu, name:e.target.value})} type="text" value={stu.name} class="form-control" id="" />
         
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Salary</label>
          <input onChange={(e)=>setStu({...stu, salary:e.target.value})}  type="text" value={stu.salary} class="form-control" id=""/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Designation</label>
          <input onChange={(e)=>setStu({...stu, designation:e.target.value})}  type="text" value={stu.designation} class="form-control" id=""/>
        </div>
     
        <button onClick={()=>HandlerUpdate()} type="submit" class="btn btn-primary">Upadte</button>
      
        </div>
       </div>
    );
}

export default EditData;