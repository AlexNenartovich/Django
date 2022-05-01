import React, { useState, useEffect, useDebugValue } from "react";

const Search = () => {
    const [data, setData] = useState([]);
    const [res, setRes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('http://localhost:8000/employees/hello/')
            .then(res => res.json())
            .then(d => setData(d));
    }, [])

    const onChange = (e) => {
        const value = e.target.value;
        if(value === "") {
            setRes([]);
            return;
        }
      //  setSearch(value);
     //   console.log(data.length)
        
        fetch('http://localhost:8000/employees/hello/'+ value + '/')
            .then(res => res.json())
            .then(d => setRes(d));
        /*
       const ar = data.filter(emp => (
           emp.EmployeeName.startsWith(value)
       ))
       setRes(ar);
       */
    }
    const out = res.map(user => (
        <h1 key={user.EmployeeId} >{user.EmployeeName}</h1>
    ))
    return (
        <div>
            <input type="text" onChange={onChange} />
            <div>{out}</div>
        </div>
    )
}

export default Search