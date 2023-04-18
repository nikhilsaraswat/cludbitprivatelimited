import '@/styles/globals.css'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Footer from "./components/app/nav.js"
import Nav from "./components/app/footer.js"
import Chat from "./components/app/chat.js"
import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return(
  <>
  <Footer/>
  <Component {...pageProps} />
  <Chat/>
  <Nav/>
  </>)
} 