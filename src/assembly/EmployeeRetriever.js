import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

var http = require("http");
setInterval(function() {
    http.get("https://employee-info-retriever-react.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

class EmployeeRetriever extends Component {
  state = {
    search: "",
    ascending: "",
    location: "",
    results: []
  };

  // When the component mounts, load available employees to be displayed
  componentDidMount() { this.loadEmployees(); }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value.toLowerCase() });
  };

  // Alphabetical Sorting
  handleSort = (event) => {
    event.preventDefault();
    const { ascending } = this.state;
    // Ascending
    if (ascending === false || ascending === "") { this.handleSortAscending(); }
    // Descending
    else if (ascending === true) { this.handleSortDescending(); }
    // Place    
    else if (ascending === true) { this.handleSortLocation(); }
    return;
  };

  // Ascending Sorting
  handleSortAscending = () => {
    this.setState({ results: this.state.results.sort((a, b) => a.name.last.localeCompare(b.name.last) ),
      ascending: true });
  };

  // Descending Sorting
  handleSortDescending = () => {
    this.setState({ results: this.state.results.sort((a, b) => b.name.last.localeCompare(a.name.last) ),
      ascending: false });
  };

  // Employee Information
  loadEmployees = () => {
    API.getStockEmployees()
      .then((res) => this.setState({ results: res.data.results, }) )
      .catch((err) => console.log(err));
  };

  render() {
    const filter = this.state.results.filter((results) =>
      results.name.last.toLowerCase().includes(this.state.search) // .toLowerCase() function needed for search query to function properly
    );

    return (
        <div>
          <SearchForm handleSort={this.handleSort} handleInputChange={this.handleInputChange}></SearchForm>
          <SearchResults results={filter}></SearchResults>
        </div>
    );
  }
}

export default EmployeeRetriever;