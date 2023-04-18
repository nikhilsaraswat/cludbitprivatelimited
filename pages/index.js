import Head from 'next/head'
import Image from 'next/image'
import web from '../public/web-development.png'
import android from '../public/androidappdevelopment.jpg'
import blockchain from '../public/blockchain.jpg'
import cloud from '../public/cloud.jpg'
import data from '../public/dataanalysis.jpg'
import datamanagement from '../public/datamanagement.jpeg'
import digital from '../public/digitalmarketing.jpg'
import hybrid from '../public/hybridappdevelopmen.jpg'
import ios from '../public/iosappdevelopment.jpg'
import mlai from '../public/MLAI.jpg'
import about from '../public/ABOUTUS.png'
import security from '../public/securitymanagement.jpg'
import {useState} from 'react'
import Carousel from '../Carousel'

const slides = [{src:web, alt:'web development'},{src:android, alt:'android development'}, {src:blockchain, alt:'blockchain'}, {src:cloud, alt:'cloud computing'}, {src:data, alt:'data analytics'}, {src:datamanagement, alt:'data management'}, {src:digital, alt:'digital marketting'}, {src:hybrid, alt:"hybrid application development"}, {src:ios, alt:"ios application development"}, {src:mlai, alt:"machine learning and artificial intelligence"}, {src:security, alt:'security management'}];

export default function Home() {
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sentCopy, setSentCopy] = useState('False');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleContact = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!names || !email || !description) return setError('All fields are required');

        // post structure
        let contact = {
            names,
            email,
            description,
            sentCopy,
            createdAt: new Date().toISOString(),
        };
        // save the post
        let response = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify(contact),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setNames('');
            setEmail('');
            setDescription('');
            setSentCopy('');
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
    };
  return (
    <>
      <Head>
        <title>CLUDBIT PRIVATE LIMITED</title>
        <meta name="description" content="OFFERING VARIOUS SERVICES IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting" />
        <meta property="og:title" content="Cludbit Private Limited"/>
        <meta property="og:description" content="OFFERING VARIOUS SERVICES IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting"/>
        <meta property="og:url" content="https://www.cludbit.com/"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        <link rel="icon" href="/favicon.png" />
        
      </Head>
        {/* <div

          <p className='test-3xl'>
            THIS WILL BE THE WEBSITE I AM GOING TO DEVELOP AND SUPPOSED TO LAUNCH SOON. WORKING DATES 31-03-2023,
          </p>
          <h1>
            hello
          </h1>
          
        </div> */}
        <main className=' mt-12'>
        <div className='App flex justify-center items-center'>
        <div className='sm:max-w-4xl w-screen'>
          <Carousel autoSlide={true} autoSlideInterval={5000}>
            {slides.map((s,i)=>(
              <Image src={s.src} alt={s.alt} key={i}/>
            ))}
          </Carousel>
        </div>
      </div>
          
      <div className='mt-12 flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center lg:w-7/12'>
          <p className='font-sans lg:text-7xl text-2xl'>Welcome to</p>
              <p className='font-sans lg:text-7xl text-2xl'>Cludbit Private Limited</p>
              <p className='font-sans lg:text-7xl text-2xl'>unleashing your digital </p>
              <p className='font-sans lg:text-7xl text-2xl'>transformation</p>
              </div>
        <div className='flex justify-center w-11/12'>
          <p className='font-sans lg:w-7/12 w-10/12 mt-8'> At CLUDBIT PRIVATE LIMITED, we believe that technology should be used for the betterment of 
              society and the environment. We are a software company based in London, offering services to businesses of all sizes. 
              Our team is made up of industry leaders and technology enthusiasts, all committed to delivering the highest quality 
              service and results.
              We take pride in our ability to handle any size of project, no matter the complexity. Our use of cutting-edge technology,
               combined with our commitment to meeting the highest industry standards, ensures that we are always ahead of the 
               curve.</p></div>
          </div>
           <div className='flex justify-center mt-4'>
            <div className="lg:w-screen w-12/12 h-4/6 mt-2 mb-2 lg:h-5/6 flex-col lg:flex-row flex justify-center">
            <div className='flex items-center justify-center flex-col bg-blue-200'>
            <h1 className='mt-1 font-sans pt-1 lg:text-4xl text-2xl font-bold'>WHO WE ARE</h1>
            <p className='p-2'>CLUDBIT PRIVATE LIMITED is a leading provider of cutting-edge technologies and services, offering scalable solutions for businesses of all sizes. Founded by a group of friends who started by scribbling their ideas on a piece of paper, today we offer smart, innovative services to dozens of clients worldwide. Why not join our fast growing client base? Get in touch today to learn more.</p>
            </div>
            <Image src={about} alt="about the Cludbit Private Limited" className='lg:w-6/12 w-12/12'/>
            </div>       
            </div>
            <div className='flex justify-center'>

<div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-gray-800">
    <div className="flex flex-wrap">
      <div className="text-center grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 className="text-3xl font-bold mb-6">Contact us</h2>
        {/* <p className="text-gray-500 mb-6">Lorem </p> */}
        <p className="text-gray-500 mb-2">London EC1V 2NX, United Kingdom</p>
        <p className="text-gray-500 mb-2">+ 44 7435776475</p>
        <p className="text-gray-500 mb-2">info@cludbit.com</p>
      </div>
      <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form onSubmit={handleContact}>
        {error ? (
        <div >
          <h3>{error}</h3>
        </div>
        ) : null}
        {message ? (
        <div>
          <h3>{message}</h3>
        </div>
        ) : null}
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="names" onChange={(e) => setNames(e.target.value)} value={names} placeholder="Name"/>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address"/>
          </div>
          <div className="form-group mb-6">
            <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " name="description" onChange={(e) => setDescription(e.target.value)} value={description} rows="3" placeholder="Message"></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
            <input type="checkbox"className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" name="sentCopy" onChange={(e) => setSentCopy(e.target.checked == true ? 'True' : 'False')} value='False'/>
            <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
          </div>
          <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
        </form>
      </div>
    </div>
  </section>

</div>
            </div>
      </main>
    </>
  )
}
