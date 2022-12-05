import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Articles from "../components/Articles";
import Pagination from "../components/Pagination";
const Home = ({ wholeListData }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* grid view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wholeListData.nomos.map((singleArticle, index) => (
          // <p>Gada</p>
          <Articles key={singleArticle._id} {...singleArticle} />
        ))}
      </div>
      <Pagination
        totalPosts={totalPages}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </>
  );
};

export default Home;

// Get Static Props

export async function getStaticProps() {
  const BACKEND_URL = process.env.BACKEND_URL;
  const wholeList = await axios(BACKEND_URL + "/api?limit=30");
  const wholeListData = await wholeList.data;
  return {
    props: { wholeListData },
  };
}

//  Load content in limit of 10 and add pagination
