import Head from "next/head";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Articles from "../components/Articles";
import Pagination from "../components/Pagination.jsx";

const Home = ({ wholeList }) => {
  // console.log(wholeList[0], "wholeList");
  return (
    <div className="flex flex-col items-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* grid view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {wholeList.map((singleArticle, index) => (
          <Articles key={singleArticle.slug} {...singleArticle} />
        ))} */}
        <LimitPagination wholeList={wholeList} />
      </div>
    </div>
  );
};

export default Home;

// Get Static Props

export async function getStaticProps() {
  return {
    props: { wholeList },
  };
}

//  Load content in limit of 10 and add pagination

function LimitPagination({ wholeList }) {
  // console.log(wholeList.length, wholeList[1], "wholeList");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(100);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = wholeList.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts, "currentPosts");
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let PAGE_SIZE = 10;
  var startIndex = (currentPage - 1) * PAGE_SIZE;
  var endIndex = startIndex + PAGE_SIZE;

  return (
    <>
      {wholeList.slice(startIndex, endIndex).map((singleArticle, index) => (
        <Articles key={singleArticle.slug + uuidv4()} {...singleArticle} />
      ))}
      {/* Pagination */}
      <p>Pagination Pagination</p>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={wholeList.length - 10000}
        paginate={paginate}
      />
    </>

    //   wholeList.slice(startIndex, endIndex)
    // .map((item) => <a href={"/python/" + item.slug}>{item.title}</a>)
  );

  // return wholeList.map((singleArticle, index) => (
  //   // <Articles key={singleArticle.slug} {...singleArticle} />
  //   <a href={"/python/" + singleArticle.slug}>{singleArticle.errorTitle}</a>
  // ));
}
