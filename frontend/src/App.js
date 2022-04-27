import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./form";
import Employee from "./Employee"

class App extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Router>
    )
  }
}

export default App;