import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./form";
import Employee from "./Employee"
import Search from "./search";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/employee" element={<Employee />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    )
  }
}

export default App;