//import {useState, useEffect,useRef} from 'react'
import React from "react";
import HeadSeo from "../../components/HeadSeo";
import { wholeList } from "../../data6";
export const getStaticProps = async ({ params }) => {
  console.log(params, "params");
  const wholeListFiltered = wholeList.filter((p) => p.slug === params.slug);
  console.log(Object.keys(wholeListFiltered[0]), "wholeListFiltered");
  return {
    props: {
      singleArticle: wholeListFiltered[0],
    },
  };
};

export const getStaticPaths = async () => {
  console.log("object");
  const paths = wholeList.map((singleArticle) => ({
    params: { slug: singleArticle.slug.toString() },
  }));

  return { paths, fallback: false };
};

const ErrorSlug = ({ singleArticle }) => {
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
        keyword={[...topics, ...languages]}
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
                {languages.map((language) => (
                  <p
                    key={language}
                    className="inline-flex items-center justify-center px-3 py-1 mr-2 text-xs font-medium leading-4 text-gray-800 bg-gray-100 rounded-full"
                  >
                    {language}
                  </p>
                ))}
              </div>
              <div className="container  mx-auto mb-8">
                {topics.map((language) => (
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
          <a class="flex justify-start items-center">
            {/* <Image
                alt="blog"
                src="https://dummyimage.com/103x103"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                width={103}
                height={103}
              /> */}
            <p class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">{author}</span>
              <span class="text-gray-400 text-xs tracking-widest mt-0.5">
                DEVELOPER
              </span>
              <span>{email}</span>
              <span>{maintainername}</span>
              <span>{maintainerlink}</span>
            </p>
          </a>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Repo Detail</h1>
            <div className="flex flex-col m-auto min-w-auto">
              <h1 className="text-2xl font-bold text-gray-900 capitalize ">
                {" "}
                Title:-
                <a href={pypi_link}>{title}</a>
              </h1>
              <p className="text-xl font-bold text-gray-900 capitalize ">
                {about}
              </p>
              <p>Contributor</p>
              {contributors?.map((contributor) => (
                <p key={contributor}>{contributor}</p>
              ))}

              <a href={link}>{link}</a>
              <p>email {email}</p>
              <p>maintainername {maintainername}</p>
              <p>maintainerlink {maintainerlink}</p>
              <p>Github {github}</p>
              <p>Stars {stars}</p>
              <p>Fork {fork}</p>
              <p>Author {author}</p>
              <p>Time{time}</p>
              <p>Licence {licence}</p>
              <p>Package Detail {package_details}</p>
              <p>Code {code}</p>
              <p>file_link {file_link}</p>
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
