//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import Pagination from './components/Pagination'
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const paginateArray = new Array(10).fill(0);

  return (
    <>
      <div>
        {/* {paginateArray.map((_, index) => (
          <button key={uuidv4()} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))} */}
        <button
          onClick={() => {
            paginate(1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default React.memo(Pagination);
