import Head from "next/head";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
export default function faq({faq}) {
    return(
    <>
    <Head>
        <title>Frequently Asked Questions - CLUDBIT PRIVATE LIMITED</title>
        <meta name="description" content="FAQ'S About VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting" />
        <meta property="og:title" content="FAQ'S - Cludbit Private Limited"/>
        <meta property="og:description" content="FAQ'S About VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting"/>
        <meta property="og:url" content="https://www.cludbit.com/faq"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <div className="flex flex-col items-center">
        <h1 className=" lg:text-7xl text-2xl">HELP CENTER</h1>
        <p>What You Need to Know</p>
        <p className="w-8/12">
        As part of our ongoing commitment to provide users with exceptional service, we’re here to answer all your questions. For time being, CLUDBIT PRIVATE LIMITED has been offering users a unique technological experience. We’ve listed our most frequently asked questions below. However, if you still have something on your mind, do not hesitate to get in touch.
        </p>
      </div>
      {faq.map((faq, i) => (<div className="flex flex-col items-center" key={i}>
        <div className="w-10/12 border-2 mt-1 border-red-700 bg-red-400 text-center rounded-full p-1">
          <h1 className="p-1">{faq.question} <FontAwesomeIcon icon={faMagnifyingGlass} bounce  className="cursor-pointer " style={{ fontSize: 10, color: "blue" }} /></h1>
        </div>
        <div className="w-10/12 border-2 mt-1 mb-2 border-purple-700 bg-purple-400 text-center rounded-full">
          <h1 className="p-1">{faq.answer}</h1>
        </div>
      </div>))}
    </>);
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/faq`);
  // extract the data
  let data = await response.json();

  return {
      props: {
          faq: data['message'],
      },
  };
}