import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../components/Articles";
import Pagination from "../components/Pagination";
const Home = ({ wholeListData }) => {
  const { currentPage, postsPerPage, totalPages, paginate } = useSelector(
    (state) => state.paginationReducer
  );

  const [pageData, setPageData] = useState(wholeListData);
  const [inc, setInc] = useState(0);

  const dispatch = useDispatch();

  console.log(currentPage, postsPerPage, totalPages, paginate, "pagination");

  useEffect(() => {
    getData()
      .then((data) => {
        setPageData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const getData = async () => {
    const BACKEND_URL = process.env.BACKEND_URL;

    const res = await axios(BACKEND_URL + "/api?limit=10&page=" + currentPage);
    const data = await res.data;
    return data;
  };
  console.log(pageData, "pageData");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* grid view */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageData.nomos.map((singleArticle, index) => (
          // <p>Gada</p>
          <Articles key={singleArticle._id} {...singleArticle} />
        ))}
        {/* {wholeListData.nomos.map((singleArticle, index) => (
          // <p>Gada</p>
          <Articles key={singleArticle._id} {...singleArticle} />
        ))} */}
      </div>
      <button
        onClick={() => {
          setInc(inc + 1);
          dispatch({ type: "PAGINATION_INC" });
        }}
      >
        inC
      </button>
      <Pagination />
    </>
  );
};

export default Home;

// Get Static Props

export async function getStaticProps() {
  const BACKEND_URL = process.env.BACKEND_URL;
  // const BACKEND_URL = "http://localhost:8080"
  console.log(BACKEND_URL, "BACKEND_URL");
  const wholeList = await axios(BACKEND_URL + "/api");
  const wholeListData = await wholeList.data;
  return {
    props: { wholeListData },
  };
}

//  Load content in limit of 10 and add pagination
