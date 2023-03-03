import "./styles.css";
import Articles from "./Articles";
import Project from "./Projects";
import Initial from "./Initial";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Contact from "./Contact"
function App() {
  return (
    // <Articles />
    <div>
    <Navbar />
    <Initial/>
    <AboutMe />
    {/* <Project />
    <Articles /> */}
    <Contact />
    </div>
  );
}
export default App;