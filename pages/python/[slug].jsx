//import {useState, useEffect,useRef} from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HeadSeo from "../../components/HeadSeo";

// export const getStaticProps = async ({ params }) => {
//   console.log(params, "params");
//   const BACKEND_URL = process.env.BACKEND_URL;
//   const res = await axios(BACKEND_URL + "api/slug/" + params.slug);
//   console.log(res, "res.data");
//   // const wholeListFiltered = wholeList.filter((p) => p.slug === params.slug);
//   // console.log(Object.keys(wholeListFiltered[0]), "wholeListFiltered");
//   return {
//     props: {
//       singleArticle: res.data,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const BACKEND_URL = "http://localhost:8080";
//   // const res = await axios(BACKEND_URL + "/api/slug");
//   // console.log(res.data.nomos, "res.data");
//   // const wholeList = await res.data.nomos;

//   const res = await axios(BACKEND_URL + "/api");
//   console.log(res.data.nomos, "res.data");
//   const wholeList = await res.data.nomos;
//   const paths = wholeList.map((singleArticle) => ({
//     params: { slug: singleArticle.slug.toString() },
//   }));

//   // const paths = [ { params: { slug:  } } ];
//   return { paths, fallback: false };
// };

// const ErrorSlug = ({ singleArticle }) => {
const ErrorSlug = () => {
  const router = useRouter();

  const data = router.query.slug || [];

  const [singleArticle, setSingleArticle] = useState({});
  useEffect(() => {
    const BACKEND_URL = "http://localhost:8080";

    // const BACKEND_URL = process.env.BACKEND_URL;
    axios(BACKEND_URL + "/api/slug/" + data).then((res) => {
      console.log(res, "res.data");
      setSingleArticle(res.data);
    });
  }, [data]);
  console.log(singleArticle, "singleArticle");
  const {
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
  } = singleArticle;
  return (
    <>
      <HeadSeo
        title={errorTitle}
        description={errorTitle + " " + detail + " " + code}
        image={""}
        url={slug}
        type={""}
        siteName={slug}
        twitter={errorTitle}
        twitterCard={errorTitle}
        twitterSite={"@ShantanuMali9"}
        twitterCreator={"@ShantanuMali9"}
        twitterImage={""}
        twitterTitle={errorTitle}
        twitterDescription={""}
        ogTitle={errorTitle}
        ogDescription={errorTitle + " " + detail + " " + code}
        ogImage={""}
        ogUrl={slug}
        ogSiteName={slug}
        ogType={"article"}
        ogLocale={""}
        ogLocaleAlternate={"en_US"}
        canonical={""}
        noindex={""}
        nofollow={""}
        noarchive={""}
        nosnippet={""}
        noodp={""}
        noimageindex={""}
        notranslate={""}
        noydir={""}
        author={"Shodkk Shantanu"}
        keyword={["error", "python", "django", "javascript", "react"]}
        // keyword={[...topics, ...languages]}
        keywordName={"error_name"}
      />
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {errorTitle}
              </h1>
              <p className="mb-8 leading-relaxed">{about}</p>

              {/* {Star and Fork} */}
              <div className="flex justify-center p-1">
                <span className="inline-flex">
                  <a href={github} className="text-gray-500">
                    {stars} <i className="fas fa-star"></i>
                    Stars
                  </a>
                </span>
                <span className="ml-3 inline-flex ">
                  <a href={github}>
                    {fork} <i className="fas fa-code-branch"></i>
                    Forks
                  </a>
                </span>
              </div>

              {/*{Array Mapping keyword and Topics}*/}

              <div className="container  mx-auto mt-8 p1">
                {languages?.map((language) => (
                  <p
                    key={language}
                    className="inline-flex items-center justify-center px-3 py-1 mr-2 text-xs font-medium leading-4 text-gray-800 bg-gray-100 rounded-full"
                  >
                    {language}
                  </p>
                ))}
              </div>
              <div className="container  mx-auto mb-8">
                {topics?.map((language) => (
                  <p
                    key={language}
                    className="inline-flex items-center justify-center px-3 py-1 mr-2 text-xs font-medium leading-4 text-gray-800 bg-gray-100 rounded-full"
                  >
                    {language}
                  </p>
                ))}
              </div>

              {/* {Copy Button} */}
              <div className="flex justify-center">
                <button
                  onClick={() => copyCode(code)}
                  className="inline-flex text-white bg-blog border-0 py-2 px-6 focus:outline-none hover:bg-blog/80 rounded text-lg"
                >
                  Copy Code
                </button>
                <button
                  onClick={() => copyCode(code2)}
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Copy with Version
                </button>
              </div>

              {/* {Code Snippets} */}
              <div className="container mx-auto mt-8 bg-gray-200 p-2">
                <pre className=" flex-inline text-left text-gray-600 text-sm font-semibold p-2 bg-gray-300 ">
                  <code className=" flex-auto text-left text-gray-600 text-sm font-semibold p-2 bg-gray-300">
                    {code}
                  </code>
                </pre>
                <pre className="text-left text-gray-600 text-sm font-semibold p-2 ">
                  <code className="text-left text-gray-600 text-sm font-semibold p-2">
                    {code2}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex container mx-auto  justify-center">
        <div className="container mx-auto">
          <a className="flex justify-start items-center">
            {/* <Image
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                width={103}
                height={103}
              /> */}
            <p className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">
                {author}
              </span>
              <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                DEVELOPER
              </span>
              <span>{email}</span>
              <span>{maintainername}</span>
              <span>{maintainerlink}</span>
            </p>
          </a>
          <div className="container">
            <h1 className="text-2xl font-bold text-gray-900">Repo Detail</h1>
            <div className="flex flex-col m-auto min-w-auto">
              <h1 className="text-2xl font-bold text-gray-900 capitalize ">
                Title:-
                <a href={pypi_link}>{title}</a>
              </h1>
              <p className="text-xl font-bold text-gray-900 capitalize ">
                {about}
              </p>
              <p>Contributor</p>
              {/* {contributors?.map((contributor) => (
                <p key={contributor}>{contributor}</p>
              ))} */}

              <a href={link}>{link}</a>
              <p>email {email}</p>
              <p>
                <span className="font-semibold text-blog">maintainername </span>

                {maintainername}
              </p>
              <p>
                <span className="font-semibold text-blog">maintainerlink </span>

                {maintainerlink}
              </p>
              <p>
                <span className="font-semibold text-blog">Github </span>
                {github}
              </p>
              <p>
                <span className="font-semibold text-blog">Stars </span>
                {stars}
              </p>
              <p>
                <span className="font-semibold text-blog">Fork </span>
                {fork}
              </p>
              <p>
                <span className="font-semibold text-blog">Author </span>
                {author}
              </p>
              <p>
                <span className="font-semibold text-blog">Time </span>
                {time}
              </p>
              <p>
                <span className="font-semibold text-blog">Licence </span>
                {licence}
              </p>
              <p>
                <span className="font-semibold text-blog">Package Detail </span>
                {package_details}
              </p>
              <p>
                <span className="font-semibold text-blog">Code </span>
                {code}
              </p>
              <p>
                file_link{" "}
                <span className="overflow-hidden" title={file_link}>
                  {" "}
                  <a
                    href={file_link}
                    download
                    className="text-blog font-semibold"
                  >
                    Download
                  </a>
                </span>
              </p>
              <p>Watching {watching}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorSlug;
// export default React.memo(ErrorSlug);

// copy code function

function copyCode(code) {
  const el = document.createElement("textarea");
  el.value = code;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

// if any p tag going outside screen then it will be hidden
