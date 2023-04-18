import Head from "next/head";
import { useRouter } from 'next/router'

export default function blog({posts}) {
  const {
    asPath,       
    pathname,
  } = useRouter();
  let path = ''
  let i = ''
  for (let i = 0; i < asPath.length; i++) {
    if(asPath[i]=='/' || asPath[i]=='%' || asPath[i]=='2'){}
    else if(asPath[i]=='0'){path=path+' '}
    else{path = path+asPath[i]}
  }
  path = path.toString()
  
    return(
    <>
   <Head>
        <title>{`${path} - CLUDBIT PRIVATE LIMITED`}</title>
        <meta name="description" content={`Blog About ${path}`} />
        <meta property="og:title" content={`${path} - CLUDBIT PRIVATE LIMITED`}/>
        <meta property="og:description" content={`Blog About ${path}`}/>
        <meta property="og:url" content={`https://www.cludbit.com${asPath}`}/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        <link rel="icon" href="/favicon.png" />
        
      </Head>
    <div className="grid grid-cols-6">
      <div className="col-span-1"></div>
      <div className="grid col-span-4">
      {posts.map((post, i) => (
        post.Topic==path ? <div className="w-12/12 flex items-center flex-col" key={i}>
            <h1 className='mt-1 font-bold lg:text-8xl text-3xl'>{post.Topic}</h1>
            <img src={post.uri} alt={post.alt} className='rounded-xl p-2 mt-2'/>
            <p className='p-2'>{post.essay}</p>
        </div> : ' '
      ))}
      </div>
      <div className="col-span-1"></div>

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