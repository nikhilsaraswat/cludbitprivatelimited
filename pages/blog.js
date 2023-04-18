import Head from "next/head";
import Link from 'next/link';
export default function blog({posts}) {
  console.log(posts)
    return(
    <>
      <Head>
        <title>Blogs - CLUDBIT PRIVATE LIMITED</title>
        <meta name="description" content="Blogs About VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting" />
        <meta property="og:title" content="Blogs - Cludbit Private Limited"/>
        <meta property="og:description" content="Blogs About VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting"/>
        <meta property="og:url" content="https://www.cludbit.com/blog"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        <link rel="icon" href="/favicon.png" />
        
      </Head>
    <div className="lg:grid lg:grid-cols-6 flex items-center">
      <div className="lg:col-span-1 flex items-center"></div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col w-11/12 items-center col-span-4">
      {posts.map((post, i) => (<Link href={post.Topic} key={i}><div className='flex justify-center mt-4 cursor-pointer'>
            <div className="lg:w-80 w-11/12 border-sky-700 border-4 bg-green-200 m-2 h-80 rounded-2xl flex items-center flex-col">
            <img src={post.uri} alt={post.alt} className='h-4/6 rounded-xl'/>
            <h1 className='mt-1'>{post.Topic}</h1>
            <p className='p-2'>{post.Description}</p>
            </div></div></Link>))}
            
      </div>
      <div className="lg:col-span-1"></div>

    </div>
    </>);
}

 export async function getServerSideProps(ctx) {
   // get the current environment
   let dev = process.env.NODE_ENV !== 'production';
   let { DEV_URL, PROD_URL } = process.env;

   // request posts from api
   let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
   // extract the data
   let data = await response.json();

   return {
       props: {
           posts: data['message'],
       },
   };
 }