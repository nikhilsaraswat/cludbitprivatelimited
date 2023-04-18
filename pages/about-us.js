import Head from "next/head";
import about from '../public/ABOUTUS.png'
import Image from 'next/image'
export default function aboutus() {
    return(
    <>
      <Head>
        <title>About Us - CLUDBIT PRIVATE LIMITED</title>
        <meta name="description" content="OFFERING VARIOUS SERVICES IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting" />
        <meta property="og:title" content="Cludbit Private Limited"/>
        <meta property="og:description" content="OFFERING VARIOUS SERVICES IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting"/>
        <meta property="og:url" content="https://www.cludbit.com/about-us"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        
      </Head>
      <div className='flex justify-center mt-4 mb-6'>
            <div className="lg:w-screen w-screen h-2/6 mt-2 mb-2 lg:h-5/6 flex flex-col lg:flex-row justify-center">
            <div className='flex items-center justify-center lg:w-6/12 flex-col bg-blue-200'>
            <h1 className='mt-1 font-sans pt-1 lg:text-4xl text-2xl font-bold'>WHO WE ARE</h1>
            <p className='p-2 lg:w-6/12 w-5/6 text-sm'>CLUDBIT PRIVATE LIMITED is a leading provider of cutting-edge technologies and services, offering scalable solutions for businesses of all sizes. Founded by a group of friends who started by scribbling their ideas on a piece of paper, today we offer smart, innovative services to dozens of clients worldwide. Why not join our fast growing client base? Get in touch today to learn more.</p>
            </div>
            <Image src={about} alt="about the company" className='lg:w-6/12 w-12/12'/>
            </div>       
            </div>
            <div className='flex items-center justify-center w-12/12 flex-col bg-slate-100'>
            <h1 className='mt-1 font-sans pt-1 lg:text-6xl text-2xl'>THE CLUDBIT TEAM</h1>
            <p className='p-2'>Get to Know Us</p>
            <p className='p-2 w-8/12'>Our passion for creating meaningful change for clients is what sets us apart. The CLUDBIT PRIVATE LIMITED team believes in the potential of our great idea, and it truly shows in all of our work. We work tirelessly in order to bring you a better tomorrow, and we’re proud of every single member of staff. </p>
            </div>
    </>
    );
}