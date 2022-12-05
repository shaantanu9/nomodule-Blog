//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import SearchBar from './components/SearchBar'
import axios from "axios";
const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  //   const BACKEND_URL = process.env.BACKEND_URL;
  const BACKEND_URL = process.env.BACKEND_URL;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const BACKEND_URL = "http://localhost:8080/api/s?q=black";
    const res = await axios(BACKEND_URL + "/api/s?q=" + searchTerm);
    console.log(BACKEND_URL + "api/s?q=" + searchTerm, "res.data", "URL");
    console.log(res, "res.data");
    const data = res.data;
    setSearchResults(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="w-60 pl-1 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blog/75"
        />
        <button
          type="submit"
          className="bg-white text-blog rounded-lg p-1 px-2 ml-3 font-semibold"
        >
          Search
        </button>
      </form>
      {/* Show Result snippet */}
      <div>
        {/* {searchResults.map((item) => (
                <div key={item.id}> */}
      </div>
    </>
  );
};

export default React.memo(SearchBar);
