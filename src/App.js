import "./styles.css";
import Articles from "./Articles";
import Project from "./Projects";
import Initial from "./Initial";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Contact from "./Contact"
import MyProjects from "./MyProjects";
import MyArticles from "./MyArticles";
function App() {
  return (
    // <Articles />
    <div>
    <Navbar />
    {/* <Articles/> */}
    <Initial/>
    <AboutMe />
    <MyProjects/>
    <MyArticles/>
    {/* <Project /> */}
    {/* <Articles /> */}
    <Contact />
    </div>
    
  );
}
export default App;