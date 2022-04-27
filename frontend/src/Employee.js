import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"

const Employee = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const [name, setName] = useState(location.state.name);
    const [department, setDepartment] = useState(location.state.dep);
    const handleChange = (e, prop) => {
        if(prop === "name") {
            setName(e.target.value)
            console.log(name)
        }
        else {
            setDepartment(e.target.value)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = {
            EmployeeId: location.state.id,
            EmployeeName: name,
            Department: department
        }
        fetch(`http://localhost:8000/employees/hello/`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
            }).then(res => res.json())
            .then(d => navigate('/'))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const data = {
            EmployeeId: id,
            EmployeeName: name,
            Department: department
        }
        fetch('http://localhost:8000/employees/hello/' + id + '/', {
            method: "DELETE",
      //      headers: {
        //        "Content-Type": "application/json"
          //  },
            body: JSON.stringify(data)
            }).then(res => res)
    }

    return (
        <div>
            <div><Link to="/" >Home</Link></div>
        <form>
            <input onChange={(e) => handleChange(e, "name")} value={name} type="text" />
            <input onChange={(e) => handleChange(e, "dep")} value={department} type="text" />
            <div>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </form>
        </div>
    )
}

export default Employee;