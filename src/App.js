import "./styles.css";
import Articles from "./Articles";
import Project from "./Projects";
import Initial from "./Initial";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
function App() {
  return (
    // <Articles />
    <div>
    <Navbar />
    <Initial/>
    <AboutMe />
    {/* <Project />
    <Articles /> */}
    </div>
  );
}
export default App;