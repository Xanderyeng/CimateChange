import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, Participate, Partner, About, Hero2 } from "./components/Index";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        {/* <Hero /> */}
        <Hero2 />
        <Participate />
        <Partner />
        {/* <About/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
