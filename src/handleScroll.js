import { useNavigate } from "react-router-dom";
const HandleScroll = (ref) => {
    // console.log("reached here");
    // const offsett = screen.width > 400? 800 : 800;
    window.scrollTo({
        top: (ref.offsetTop - 100),
        behavior: "smooth"
    })
    // ref.scrollIntoView({ behavior: "smooth", block: "nearest", inline:"nearest" });
  };
  export default HandleScroll;
  