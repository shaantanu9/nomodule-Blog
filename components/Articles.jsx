//import {useState, useEffect,useRef} from 'react'
//import Articles from './components/Articles'
const Articles = ({
  title,
  detail,
  code1,
  code2,
  pypi_link,
  link,
  code,
  email,
  maintainername,
  maintainerlink,
  github,
  author,
  time,
  file_link,
  licence,
  package_details,
  errorTitle,
  url,
  topics,
  stars,
  fork,
  homepage,
  issues,
  contributors,
  watching,
  about,
  languages,
  markdown,
  slug,
}) => {
  let errorTitle2 = errorTitle.replace("Python Error: ", "");
  console.log(errorTitle2, "errorTitle2");
  errorTitle2 =
    errorTitle2.length > 40 ? errorTitle2.slice(0, 40) + "..." : errorTitle2;

  return (
    <>
      <div className="container">
        <div>
          <div
            className="bg-white rounded p-4 shadow md:flex justify-between"
            data-v-648b5d7b=""
          >
            <div data-v-648b5d7b="">
              <a href={`/python/${slug}`}>
                <span
                  title={errorTitle}
                  className="text-2xl font-semibold"
                  data-v-648b5d7b=""
                >
                  {errorTitle2}
                </span>
              </a>
              <p className="my-2 text-lg" data-v-648b5d7b="">
                <span className="font-semibold"> Package Name</span> {detail}{" "}
                <br />
                <span className="font-semibold"> Author Name</span>{" "}
                {" " + author}
                <br />{" "}
                <span className="inline whitespace-pre overflow-x-scroll bg-blog/30 p-1 ">
                  {code1}
                </span>
              </p>
              <div className="flex items-center mt-4" data-v-648b5d7b="">
                {topics?.map(
                  (topic, index) =>
                    index < 4 && (
                      <div
                        key={topic}
                        className="text-xs uppercase font-bold tracking-wider bg-gray-300 inline-block px-2 py-1 rounded mr-2"
                        data-v-648b5d7b=""
                      >
                        {topic}
                      </div>
                    )
                )}
              </div>
            </div>
            <div
              className="text-right md:ml-8 flex items-center"
              data-v-648b5d7b=""
            >
              <div
                className="flex md:block -mx-2 md:mx-0 mt-3 md:mt-0"
                data-v-648b5d7b=""
              >
                <div
                  className="flex justify-end mb-1 px-2 md:px-0"
                  data-v-648b5d7b=""
                >
                  <div className="text-xl" data-v-648b5d7b="">
                    {fork}
                  </div>
                  <div className="ml-2" data-v-648b5d7b="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline"
                      data-v-648b5d7b=""
                    >
                      <path
                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        data-v-648b5d7b=""
                      ></path>
                      <polyline
                        points="7 10 12 15 17 10"
                        data-v-648b5d7b=""
                      ></polyline>
                      <line
                        x1="12"
                        y1="15"
                        x2="12"
                        y2="3"
                        data-v-648b5d7b=""
                      ></line>
                    </svg>
                  </div>
                </div>
                <div
                  className="flex justify-end items-bottom mb-1 px-2 md:px-0"
                  data-v-648b5d7b=""
                >
                  <div className="text-xl" data-v-648b5d7b="">
                    {stars}
                  </div>
                  <div className="ml-2" data-v-648b5d7b="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline"
                      data-v-648b5d7b=""
                    >
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        data-v-648b5d7b=""
                      ></polygon>
                    </svg>
                  </div>
                </div>
                <div
                  className="flex justify-end px-2 md:px-0"
                  data-v-648b5d7b=""
                >
                  <div className="text-xl" data-v-648b5d7b="">
                    {languages?.map(
                      (lag) => lag !== "Python" && <span key={lag}>{lag} </span>
                    )}
                  </div>
                  <div className="ml-2" data-v-648b5d7b="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline"
                      data-v-648b5d7b=""
                    >
                      <polyline
                        points="16 18 22 12 16 6"
                        data-v-648b5d7b=""
                      ></polyline>
                      <polyline
                        points="8 6 2 12 8 18"
                        data-v-648b5d7b=""
                      ></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default React.memo(Articles);
export default Articles;

// If errorTitle is bigger than 20, it will be cut off and add ... at the end
