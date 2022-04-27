import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      EmployeeName:"",
      Department: "",
      django: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/employees/hello/").then(res => res.json())
    .then(data => this.setState({
      django: data
    }))
    /*
    fetch("http://localhost:3300/posts")
    .then(res => res.json())
    .then(data => this.setState({
      articles: data.data
    }))
    */
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const art = {
      EmployeeName: this.state.EmployeeName,
      Department: this.state.Department
    }
    fetch("http://localhost:8000/employees/hello/", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(art)
    }).then(res => res.json()).then(data => this.setState({
      django: [...this.state.django].concat([art])
    }))
  }

   render() {
     const style = {
       textDecoration: 'none',
       color: "black",
       width: "200px"
     }
     const art = this.state.django.map(emp => (
       <ul key={emp.EmployeeId}>
           <Link style={style} to="/employee" state={{id: emp.EmployeeId, name: emp.EmployeeName, dep: emp.Department}}>
                <h1>{emp.EmployeeName}</h1>
                <p>{emp.Department}</p>
         </Link>
       </ul>
     ))
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" name="EmployeeName" onChange={this.handleChange} placeholder="Title"></input>
        <br />
        <textarea placeholder="Body" name="Department" onChange={this.handleChange}></textarea>
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
        <div>{art}</div>
      </div>
    );
  }
}

export default Form;
