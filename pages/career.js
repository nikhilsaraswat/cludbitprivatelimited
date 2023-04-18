import Head from "next/head";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from 'reactjs-popup';
import {useState} from 'react'
// import the icons you need
import {
  faBriefcase,
  faLocationDot,
  faListCheck,
  faFile,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
export default function career() {
  const [names, setNames] = useState('');
  let [topic, setTopic] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sentCopy, setSentCopy] = useState('False');
  const [hide, setHide] = useState('hidden');
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const uploadToClient = (event) => {
      if (event.target.files && event.target.files[0]) {
        const i = event.target.files[0];
  
        setImage(i);
        setCreateObjectURL(URL.createObjectURL(i));
      }
    };
    const uploadToServer = async (event) => {        
      const body = new FormData();
      // console.log("file", image)
      body.append("file", image);    
      const response = await fetch("/api/upload", {
        method: "POST",
        body
      });
    };

    const handleContact = async (e) => {
        e.preventDefault();

        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!names || !topic || !email || !contact || !description) return setError('All fields are required');

        // post structure
        let resume = {
            names,
            topic,
            contact,
            email,
            description,
            sentCopy,
            createdAt: new Date().toISOString(),
        };
        // save the post
        let response = await fetch('/api/career', {
            method: 'POST',
            body: JSON.stringify(resume),
        });

        // get the data
        let data = await response.json();

        if (data.success) {
            // reset the fields
            setNames('');
            setEmail('');
            setDescription('');
            setSentCopy('');
            setContact('');
            setTopic('');
            setCreateObjectURL(null);
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
    };
    return(
    <>
    <Head>
        <title>Career - CLUDBIT PRIVATE LIMITED</title>
        <meta name="description" content="Career in VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting" />
        <meta property="og:title" content="Career - Cludbit Private Limited"/>
        <meta property="og:description" content="Career in VARIOUS SERVICES Offered By Us IN SOFTWARE DEVELOPMENT(WEB, ANDROID, IOS, HYBRID); DATA ANALYTICS, ML, AI, BIG DATA, Blockchain, Cloud Computing, security management, digital marketting"/>
        <meta property="og:url" content="https://www.cludbit.com/career"/>
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content='Android development, web development, ios development, hybrid application development, data analytics, data engineering, AI, ML, data management, security management, digital marketting'/>
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <div className="grid grid-cols-4">
       <div className="col-span-1 border-2 bg-blue-100 m-1 hidden lg:flex flex-col h-fit">
        <div className="border-2 bg-blue-800 m-1 cursor-pointer p-2 text-white rounded-xl">
          <p>Associate, Data Scientist, Data Strategies and Solutions</p>
          <p><FontAwesomeIcon icon={faLocationDot} style={{color: "white",}} /> Gurgaon <FontAwesomeIcon icon={faBriefcase} style={{color: "white",}} /> Full Time</p>
        <p><FontAwesomeIcon icon={faListCheck} style={{color: "white",}} /> MongoD, JavaScript, Next.js, Tailwind</p>
        </div>
        <div className="text-center p-1">No more jobs</div>
        </div> 
      <div className="border-l-2 lg:col-span-3 col-span-4 w-12/12">
        <div className="flex flex-col items-center border-2 bg-pink-100 rounded-xl">
        <h1 className="text-3xl font-bold p-2">Associate, Data Scientist, Data Strategies and Solutions</h1>
        <p><FontAwesomeIcon icon={faLocationDot} style={{color: "#0a0a0a",}} /> Gurgaon</p>
        <p><FontAwesomeIcon icon={faBriefcase} style={{color: "#161717",}} /> Full Time</p>
        <p><FontAwesomeIcon icon={faListCheck} style={{color: "#111212",}} /> MongoD, JavaScript, Next.js, Tailwind</p>
        <p className="font-bold">What you will be doing - </p>
          <ul className="w-10/12 list-disc">
            <li>Work with Portfolio Managers and Researchers to answer Investment hypothesis across Asset Classes, Investment strategies and Sectors</li>
            <li>Investigate new trends and business areas, working across a wide variety of industries on a range of topics that are important to the global investment community</li>
            <li>Develop and use knowledge of technology to design innovative approaches to solve data-related challenges</li>
            <li>Create summaries, data visualizations, algorithms, models, written analyses, and other presentations of work performed </li>
            <li>Manage time and tasks to meet deadlines for stakeholders in time-sensitive projects</li>
            <li>Participate in internal and external meetings to review results of work performed</li>
            <li>Deliver on day-to-day activities of a project including interaction with other team members and stakeholders</li>
            <li>Transform large structured and unstructured data sets into actionable insights</li>
            <li>Assist in the identification and evaluation of data sources and vendors</li>
            <li>Create new data assets including those sourced through web scraping</li>
            <li>Participate in brainstorming meetings to design, execute, and deliver novel solutions for investment debates</li>
            <li>Partner with researchers to deliver analytical solutions to support investment decision making</li>
          </ul>
          <p className="font-bold">Qualification - </p>
          <ul className="w-10/12 list-disc">
            <li>2+ years of experience in building data driven solutions to challenging problems preferably in sectors like Investments, Technology, Healthcare, Banking & Financial Services</li>
            <li>Experience using alternative data to analyze the sectors like ESG, Healthcare, Pharmaceutical, Renewable Energy, Social Responsibility, Biotech, and/or Life Sciences sectors is a plus</li>
            <li>Experience incl. working with large unstructured dataset (e.g. in equity or quantitative research, academia, risk or operations, consultancy) is preferred</li>
            <li>Bachelor’s degree from an accredited college / university; thesis or experience working in a research environment preferred</li>
            <li>Intellectually curious with strong analytic, quantitative, and critical reasoning skills</li>
          </ul>
          <p className="font-bold">Skills required include - </p>
          <ul className="w-10/12 list-disc">
            <li>Ability to communicate and align priorities across multiple teams with inspiration and authority</li>
            <li>Database experience (SQL, DDL/DML, performance tuning, data modeling).</li>
            <li>Basic understanding of UNIX/LINUX environments.</li>
            <li>Ability to work efficiently in a fast-paced environment on multiple concurrent projects</li>
            <li>Solid experience doing technical business analysis</li>
            <li>Technical background including working knowledge of at least one of the programming languages SQL, Python, and R</li>
            <li>Familiarity with git, data visualization tools, and web scraping technologies a plus</li>
            <li>Knowledge of Pyspark, Databricks, GCP, Airflow, and other leading big data analysis tools a plus</li>
          </ul>
          <p className="font-bold">Other Personal Characterstics - </p>
          <ul className="w-10/12 list-disc">
            <li>Unquestioned integrity and the highest ethical standards</li>
            <li>Ability to provide feedback to others in a constructive, assistive way</li>
            <li>Not afraid of failure and demonstrated ability to operate with vague or light client feedback</li>
            <li>Perform diverse and complex tasks with accuracy and a desire to coach others on the same</li>
            <li>Communicate effectively both verbally and in writing, particularly with global colleagues.</li>
            <li>A built-in drive to achieve outstanding results under tight timelines</li>
          </ul>
          <p className="font-bold">Our Benefits - </p>
          <p className="w-11/12">
          To help you stay energized, engaged and inspired, we offer a wide range of benefits including a strong retirement plan, tuition reimbursement, comprehensive healthcare, support for working parents and Flexible Time Off (FTO) so you can relax, recharge and be there for the people you care about.
          </p>
          <Popup trigger={
        <button onClick={topic = 'Associate, Data Scientist, Data Strategies and Solutions'} className="border-blue-500 border-2 bg-blue-200 rounded-full cursor-pointer lg:w-2/12 w-5/12 font-bold text-blue-900 p-2 m-1">Apply</button>
      } modal>
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full bg-blue-500 py-2 md:w-12/12 px-3 lg:px-6">
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
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="topic" value='Associate, Data Scientist, Data Strategies and Solutions' disabled/>
          </div>
          <div className="form-group mb-6">
            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="names" onChange={(e) => setNames(e.target.value)} value={names} placeholder="Name"/>
          </div>
          <div className="form-group mb-6">
            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  name="contact" onChange={(e) => setContact(e.target.value)} value={contact} placeholder="Contact number"/>
          </div>
          <div className="form-group mb-6">
            <input type="file" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  name="image"  onChange={uploadToClient} />
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address"/>
          </div>
          <div className="form-group mb-6">
            <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " name="description" onChange={(e) => setDescription(e.target.value)} value={description} rows="3" placeholder="Cover Letter"></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
            <input type="checkbox"className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" name="sentCopy" onChange={(e) => setSentCopy(e.target.checked == true ? 'True' : 'False')} value='False'/>
            <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
          </div>
          <button type="submit" onClick={uploadToServer} className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
        </form>
      </div>
      </Popup>
        </div>
      </div>
      </div>
      <Popup trigger={
        <div className="fixed left-0 lg:top-2/4 top-3/4 cursor-pointer">
        <div className="flex items-center justify-center p-2 lg:p-4 rounded-r-full bg-blue-800 border-2">
      <div className="lg:block hidden"><FontAwesomeIcon icon={faFile} style={{ fontSize: 30, color: "white" }} /></div>
      <div className="lg:hidden"><FontAwesomeIcon icon={faFile} style={{ fontSize: 20, color: "white" }} /></div>
      <div className="ml-2 text-white lg:text-lg text-xs"><p>Upload <br/> Resume</p></div></div>
      </div>
      } modal>
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full bg-blue-500 py-2 md:w-12/12 px-3 lg:px-6">
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
            <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  name="contact" onChange={(e) => setContact(e.target.value)} value={contact} placeholder="Contact number"/>
          </div>
          <div className="form-group mb-6">
            <input type="file" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  name="image"  onChange={uploadToClient} />
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address"/>
          </div>
          <div className="form-group mb-6">
            <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " name="description" onChange={(e) => setDescription(e.target.value)} value={description} rows="3" placeholder="Cover Letter"></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
            <input type="checkbox"className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" name="sentCopy" onChange={(e) => setSentCopy(e.target.checked == true ? 'True' : 'False')} value='False'/>
            <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
          </div>
          <button type="submit" onClick={uploadToServer} className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
        </form>
      </div>
      </Popup>
      <Popup trigger={
        <div className="lg:hidden fixed right-0 top-2/4 cursor-pointer">
        <div className="flex items-center justify-center p-2 lg:p-4 rounded-l-full bg-blue-800 border-2">
      <div className="lg:hidden"><FontAwesomeIcon icon={faSearch} style={{ fontSize: 20, color: "white" }} /></div>
      <div className="ml-2 text-white lg:text-lg text-xs"><p>jobs</p></div></div>
      </div>
      } modal>
        <div className="col-span-1 border-2 bg-blue-100 m-1 flex flex-col h-fit">
        <div className="border-2 bg-blue-800 m-1 cursor-pointer p-2 text-white rounded-xl">
          <p>Associate, Data Scientist, Data Strategies and Solutions</p>
          <p><FontAwesomeIcon icon={faLocationDot} style={{color: "white",}} /> Gurgaon <FontAwesomeIcon icon={faBriefcase} style={{color: "white",}} /> Full Time</p>
        <p><FontAwesomeIcon icon={faListCheck} style={{color: "white",}} /> MongoD, JavaScript, Next.js, Tailwind</p>
        </div>
        <div className="text-center p-1">No more jobs</div>
        </div> 
      </Popup>
    
    </>);
}