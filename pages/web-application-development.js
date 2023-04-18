import Head from 'next/head'
import Image from 'next/image'
import MERN from '../public/MernStack.png'
import PHP from '../public/PHPwebdevelopment.jpg'
import NEXT from '../public/nextjs.png'
import Angular from '../public/angular.jpg'
import VUE from '../public/vue.png'
import DJANGO from '../public/django.jpg'
import shopify from '../public/shopify.png'
import wordwoo from '../public/wordpresswoocommerce.png'
import asp from '../public/asp.jpg'
import Link from 'next/link';
import Carousel from '../Carousel'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const slides = [{src:MERN, alt:"web application development using mern stack"}, {src:PHP, alt:'web application development using PHP'}, {src:NEXT,alt:"web application development using next.js"}, {src:Angular, alt:"web application development using Angular"}, {src:VUE, alt:"web application development using  Vue"}, {src:DJANGO, alt:"web application development using  Django"}, {src:shopify, alt:"web application development using shopify"}, {src:wordwoo, alt:"web application development using wordpress and woocommerce"}, {src:asp, alt:"web application development using asp.net"}];
export default function webapplicationdevelopment({posts, faq}) {
    return(
    <>
     <Head>
        <title>Web Application Development - CLUDBIT PRIVATE LIMITED</title>
        <meta name="description" content="OFFERING VARIOUS SERVICES IN Web Application DEVELOPMENT (using MERN stack, using PHP, using Next.js, using Angular, using Vue.js, using Django, using shopify, using wordpress and woocommerce, using asp.net)" />
        <meta property="og:title" content="Web Application Development - Cludbit Private Limited"/>
        <meta property="og:description" content="OFFERING VARIOUS SERVICES IN Web Application DEVELOPMENT (using MERN stack, using PHP, using Next.js, using Angular, using Vue.js, using Django, using shopify, using wordpress and woocommerce, using asp.net)" />
        <meta property="og:url" content="https://www.cludbit.com/web-application-development"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Mern Stack, PHP, React, Next.js, Angular, Django, ASP.net, Vue.js, Shopify, Wordpress, Woocommerce, Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        <link rel="icon" href="/favicon.png" />
      </Head>
    <main>
    <div className='App flex justify-center items-center'>
        <div className='sm:max-w-4xl w-screen'>
    <Carousel autoSlide={true} autoSlideInterval={5000}>
            {slides.map((s,i)=>(
              <Image src={s.src} alt={s.alt} key={i}/>
            ))}
          </Carousel>
    </div>
    </div>
    <h1 className='text-center font-bold p-2 lg:text-3xl text-xs'>Blogs</h1>
    <div className="lg:grid lg:grid-cols-6 flex items-center">
      <div className="lg:col-span-1 flex items-center"></div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col w-11/12 items-center col-span-4">
      {posts.map((post, i) => (<Link href={post.Topic} key={i}><div className='flex justify-center mt-4 cursor-pointer' key={i}>
            <div className="lg:w-80 w-11/12 border-sky-700 border-4 bg-green-200 m-2 h-80 rounded-2xl flex items-center flex-col">
            <img src={post.uri} alt={post.alt} className='h-4/6 rounded-xl'/>
            <h1 className='mt-1'>{post.Topic}</h1>
            <p className='p-2'>{post.Description}</p>
            </div></div></Link>))}
            
      </div>
      <div className="lg:col-span-1"></div>

    </div>
    <h1 className='text-center font-bold p-2 lg:text-3xl text-xs'>FAQ</h1>
    {faq.map((faq, i) => (<div className="flex flex-col items-center" key={i}>
        <div className="w-10/12 border-2 mt-1 border-red-700 bg-red-400 text-center rounded-full p-1">
          <h1 className="p-1">{faq.question} <FontAwesomeIcon icon={faMagnifyingGlass} bounce  className="cursor-pointer " style={{ fontSize: 10, color: "blue" }} /></h1>
        </div>
        <div className="w-10/12 border-2 mt-1 mb-2 border-purple-700 bg-purple-400 text-center rounded-full">
          <h1 className="p-1">{faq.answer}</h1>
        </div>
      </div>))}
    </main>
    </>);
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/webdevelopment`);
  // extract the data
  let data = await response.json();

  // request posts from api
  let responses = await fetch(`${dev ? DEV_URL : PROD_URL}/api/webdevelopment`);
  // extract the data
  let datas = await responses.json();

  return {
      props: {
          posts: data['message'],
          faq: datas['messages'],
      },
  };
}