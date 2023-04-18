import Head from "next/head";
import { useState } from 'react'
export default function contactus() {
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sentCopy, setSentCopy] = useState('False');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  let [address, setAddress] = useState('A-1/10 Sector-5 Rohini Delhi 110085');
  let [contact, setContact] = useState('+917210915933');
  let [source, setSource] = useState({src:'https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2022/08/02130155/FeatureImage_Why-Is-Mumbai-The-Commercial-Hub-Of-India.jpeg', alt:"cludbit private limited in India"});

  const india = (e) => {
    setAddress("A-1/10 Sector-5 Rohini Delhi 110085");
    setContact("+917210915933");
    setSource({src:"https://homebazaar-blog.s3.ap-south-1.amazonaws.com/knowledge/wp-content/uploads/2022/08/02130155/FeatureImage_Why-Is-Mumbai-The-Commercial-Hub-Of-India.jpeg", alt:"cludbit private limited in India"});
  }

  const unitedkingdom = (e) => {
    setAddress("128 City Rd, London EC1V 2NX, United Kingdom");
    setContact("+447435776475");
    setSource({src:"https://www.investopedia.com/thmb/v2CQcWwbjlKC_eua927MtvcWkoY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AdobeStock_90972520-5c9361dbc9e77c00015f6975.jpeg", alt:"cludbit private limited in United Kingdom"});
  }
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
        <title>Contact Us - CLUDBIT PRIVATE LIMITED</title>
        <meta name="description" content="Contact Us Regarding VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting" />
        <meta property="og:title" content="Contact Us - Cludbit Private Limited"/>
        <meta property="og:description" content="Contact Us Regarding VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting"/>
        <meta property="og:url" content="https://www.cludbit.com/contact-us"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <div className="flex flex-wrap">
        <div className="text-center grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <h2 className="text-3xl font-bold mb-6">Contact us</h2>
          <p className="text-gray-500 mb-2">London EC1V 2NX, United Kingdom</p>
          <p className="text-gray-500 mb-2">+ 44 743576475</p>
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
              <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="names" onChange={(e) => setNames(e.target.value)} value={names} placeholder="Name" />
            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address" />
            </div>
            <div className="form-group mb-6">
              <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " name="description" onChange={(e) => setDescription(e.target.value)} value={description} rows="3" placeholder="Message"></textarea>
            </div>
            <div className="form-group form-check text-center mb-6">
              <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" name="sentCopy" onChange={(e) => setSentCopy(e.target.checked == true ? 'True' : 'False')} value='False' />
              <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
            </div>
            <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
          </form>
        </div>
      </div>
      <div className="mt-2">
        <h1 className="flex items-center justify-center font-bold font-serif lg:text-5xl text-2xl">Our Locations</h1>
        <div className="flex lg:flex-row flex-col">
        <div className="items-center justify-center lg:w-2/12 flex flex-row lg:flex-col">
          <button className="cursor-pointer border-2 border-red-500 bg-red-800 p-4 lg:w-7/12 w-4/12 mb-2 rounded-full text-white" onClick={india}>India</button>
          <button className="cursor-pointer border-2 border-red-500 bg-red-800 p-4 lg:ml-0 ml-1 rounded-full text-white" onClick={unitedkingdom}>United Kingdom</button>
        </div>
        <div className="lg:w-4/12 w-12/12">
          <img src={source.src} alt={source.alt} className="p-2"/>
        </div>
        <div className="flex items-center flex-col justify-center w-12/12 lg:w-6/12">
          <h1 className="font-serif text-3xl">Corporate Address:</h1>
          <h1 className="text-xl w-10/12 lg:w-fit">{address}</h1>
          <h1 className="font-serif text-3xl">Contact Number:</h1>
          <h1 className="text-xl">{contact}</h1>
        </div>
        </div>
      </div>
    </>);
}