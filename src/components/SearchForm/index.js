import React from "react";
import backgroundImage from "./purple-layer.jpg";

const SearchForm = (props) => {
  return (
    <div style={{
      textAlign: "center",
      margin: "0 auto",
      verticalAlign: "middle",
      backgroundImage: `url(${backgroundImage})`,
      width: "100%",
      maxWidth: 1200,
      height: "100%",
      minHeight: 300,
      marginTop: 20,
      backgroundColor: "#9228ae"
      }}
      >
    <h1 style={{
      color: "#ffffff",
      fontWeight: 800,
      paddingTop: 20}}
      >
      Employee Retriever
    </h1>
    <h6 style={{
      color: "#ffffff",
      fontWeight: 600}}
      >
      Enter full or partial last name to retrieve employee information or sort/scroll alphabetically.
    </h6>
    
    <form className="search">
      <section className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="names"
          type="text"
          className="form-control"
          placeholder="Employee Last Name"
          id="name"
          style={{marginTop: 0, fontSize: "1em"}}
        />
        <button
          type="submit"
          onClick={props.handleSort}
          style={{backgroundColor: "#ffffff", color: "#42147e", fontWeight: 600, fontSize: "1em"}}
        >
          Alphabetical Sorting
        </button>
      </section>
    </form>
    </div>
  );
}

export default SearchForm;