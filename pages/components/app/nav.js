import Image from 'next/image'
import logo from '../../../public/favicon.png'
import Popup from 'reactjs-popup';
import Link from 'next/link';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faCaretDown,
  faGlobe,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
export default function nav(){
    return(<>
    <navbar>
    <div className='grid lg:grid-cols-6 grid-cols-3'>
      <Link href="/"><div className='col-span-1 flex justify-center'>
      <Image src={logo} alt="logo of the cludbit private limited" width={100}/>
      </div></Link>
      <div className='lg:grid hidden col-span-4  grid-cols-7 mt-5 h-fit'>
        <Link href={"/"}><div className='font-serif col-span-1 text-center '><p className='hover:text-blue-700 cursor-pointer'>HOME</p></div></Link>
        <Popup
        trigger={<div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>SERVICES
        <FontAwesomeIcon icon={faCaretDown} className="ml-1" /></p>
        </div>}
        position="bottom"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
        >
        <div className=' bg-slate-200 font-serif text-center rounded-lg pt-2 pb-2'>
        <Link href={"../web-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2 text-xs'>Web Development</p></Link>
        <Link href={"../android-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Android Development</p></Link>
        <Link href={"../ios-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Ios Development</p></Link>
        <Link href={"../hybrid-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Hybrid Application</p></Link>
        <Link href={"../cloud"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Cloud</p></Link>
        <Link href={"../machine-learning-and-artificial-intelligence"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>ML and AI</p></Link>
        <Link href={"../data-analytics"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Data Analytics</p></Link>
        <Link href={"../blockchain"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Blockchain</p></Link>
        <Link href={"../data-management"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Data Management</p></Link>
        <Link href={"../security-management"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Security Management</p></Link>
        <Link href={"../digital-marketing"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Digital Marketing</p></Link>
        </div>
        </Popup>
        <Link href="../about-us"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>ABOUT US</p></div></Link>
        <Link href="../blog"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>BLOG</p></div></Link>
        <Link href="../contact-us"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>CONTACT US</p></div></Link>
        <Link href="../faq"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>FAQ</p></div></Link>
        <Link href="../career"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>CAREER</p></div></Link>
        </div>
      <div className='lg:col-span-1 col-span-2  pr-1 lg:text-center text-right'>
      
      <span className='lg:hidden  pr-1'>
      <Popup
        trigger={<div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>SERVICES
        <FontAwesomeIcon icon={faCaretDown} /></p>
        </div>}
        position="bottom"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
        >
        <div className=' bg-slate-200 font-serif text-center rounded-lg pt-2 pb-2'>
        <Link href={"web-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2 text-xs'>Web Development</p></Link>
        <Link href={"android-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Android Development</p></Link>
        <Link href={"ios-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Ios Development</p></Link>
        <Link href={"hybrid-application-development"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Hybrid Application</p></Link>
        <Link href={"cloud"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Cloud</p></Link>
        <Link href={"machine-learning-and-artificial-intelligence"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>ML and AI</p></Link>
        <Link href={"data-analytics"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Data Analytics</p></Link>
        <Link href={"blockchain"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Blockchain</p></Link>
        <Link href={"data-management"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Data Management</p></Link>
        <Link href={"security-management"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Security Management</p></Link>
        <Link href={"digital-marketting"}><p className='hover:text-blue-700 cursor-pointer m-2 p-2  text-xs'>Digital Marketting</p></Link>
        </div>
        </Popup>
        <Popup
      trigger={<FontAwesomeIcon icon={faBars}  className="lg:mt-6 mt-1 cursor-pointer " style={{ fontSize: 30, color: "blue" }} />}
      position="bottom left"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: '0px', border: 'none' }}
      arrow={false}
    >
      <div className="bg-slate-200 font-serif text-center rounded-lg pt-2 pb-2 mr-1">
      <Link href={"/"}><div className='font-serif col-span-1 text-center '><p className='hover:text-blue-700 cursor-pointer'>HOME</p></div></Link>
        <Link href="about-us"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>ABOUT US</p></div></Link>
        <Link href="blog"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>BLOG</p></div></Link>
        <Link href="contact-us"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>CONTACT US</p></div></Link>
        <Link href="faq"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>FAQ</p></div></Link>
        <Link href="career"><div className='font-serif col-span-1 text-center'><p className='hover:text-blue-700 cursor-pointer'>CAREER</p></div></Link>
      </div>
    </Popup>
      </span>
      <Popup trigger={<FontAwesomeIcon icon={faMagnifyingGlass} className="mt-6 cursor-pointer" style={{ fontSize: 30, color: "blue" }} />} modal>
        <span className="bg-black flex justify-center items-center opacity-80 w-96 h-96 rounded-2xl">
          <span className='h-5/6 flex justify-center font-bold text-white items-center w-6/12'><input type='text' className='text-black'/></span>
           </span>
      </Popup>
      <Popup trigger={<FontAwesomeIcon icon={faGlobe} className="mt-6 cursor-pointer" style={{ fontSize: 30, color: "blue" }} />} modal>
      <span className="bg-black flex justify-center items-center opacity-80 w-96 h-96 rounded-2xl">
          <span className='h-5/6 flex justify-center font-bold text-white items-center w-6/12'><p>Our <br/> Global <br/> Presence</p></span>
          <span className='h-5/6 flex justify-center font-bold text-white items-center w-6/12'><p>United Kingdom<br/>India</p></span></span>
      </Popup>
      </div>
    </div>
    </navbar>
    </>)
}