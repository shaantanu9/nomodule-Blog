//import {useState, useEffect,useRef} from 'react'
import Head from "next/head";
import Script from "next/script";
import React from "react";
//import HeadSeo from './components/HeadSeo'
const HeadSeo = ({
  title,
  description,
  image,
  url,
  type,
  siteName,
  twitter,
  twitterCard,
  twitterSite,
  twitterCreator,
  twitterImage,
  twitterTitle,
  twitterDescription,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogSiteName,
  ogType,
  ogLocale,
  ogLocaleAlternate,
  canonical,
  noindex,
  nofollow,
  noarchive,
  nosnippet,
  noodp,
  noimageindex,
  notranslate,
  noydir,
  author,
  keyword,
  keywordName,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content="#ef4136" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* <!-- End Google Tag Manager --> */}
        <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-KRRF7HP" />
        <meta name="google-site-verification" content="uWPsUk6YlccBk6lYEzAgnNIv9YEWB3NLTmrNvJ06M5Q" />
        <Script src="./googleTagManager.js" />
        <meta name="apple-mobile-web-app-title" content="Shodkk" />
        <meta name="application-name" content="Shodkk" />
        {/*  */}
        <meta name="msapplication-TileColor" content="#ef4136" />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <meta
          name="msapplication-TileImage"
          content="/static/icons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/static/icons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/static/icons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/static/icons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/static/icons/mstile-310x310.png"
        />

        {/*  */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={description} />
        <meta data-react-helmet="true" name="author" content={author}></meta>

        <meta
          data-react-helmet="true"
        //   name={keywordName}
          content={keyword.join(" ")}
        />
        <meta
          data-react-helmet="true"
          property="og:site_name"
          content="shodkk.com"
        ></meta>

        <meta
          data-react-helmet="true"
          property="og:image"
          content={image}
        ></meta>

        {/* Ended */}
        <meta name="image" content={image} />
        <meta name="url" content={url} />
        <meta name="type" content={type} />
        <meta name="siteName" content={siteName} />
        <meta name="twitter" content={twitter} />
        <meta name="twitterCard" content={twitterCard} />
        <meta name="twitterSite" content={twitterSite} />
        <meta name="twitterCreator" content={twitterCreator} />
        <meta name="twitterImage" content={twitterImage} />
        <meta name="twitterTitle" content={twitterTitle} />
        <meta name="twitterDescription" content={twitterDescription} />
        <meta name="ogTitle" content={ogTitle} />
        <meta name="ogDescription" content={ogDescription} />
        <meta name="ogImage" content={ogImage} />
        <meta name="ogUrl" content={ogUrl} />
        <meta name="ogSiteName" content={ogSiteName} />
        <meta name="ogType" content={ogType} />
        <meta name="ogLocale" content={ogLocale} />
        <meta name="ogLocaleAlternate" content={ogLocaleAlternate} />
        <meta name="canonical" content={canonical} />
        <meta name="noindex" content={noindex} />
        <meta name="nofollow" content={nofollow} />
        <meta name="noarchive" content={noarchive} />
        <meta name="nosnippet" content={nosnippet} />
        <meta name="noodp" content={noodp} />
        <meta name="noimageindex" content={noimageindex} />
        <meta name="notranslate" content={notranslate} />
        <meta name="noydir" content={noydir} />
      </Head>
    </>
  );
};

export default React.memo(HeadSeo);

// Server Side Rendering
const getServersideProps = async (context) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "pageview",
    brandName: "Shodkk",
    authorName: author,
    articleCategory,
    articleTitle: title,
    publicationYear,
    publicationMonth,
    publicationDate,
    articleId,
    authorId,
    canonicalUrl: url,
    articleLength,
    tags: keywords.join(","),
    authors: author,
    language: "en",
    internalTeam: "NA",
    videoUrl,
    tvc_cg_active_menu,
    articleViewType: "landing",
    articleViewPosition: "1",
  });
};