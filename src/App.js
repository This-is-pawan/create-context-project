import React from "react";

// import RoutNav from "./RouterProject/RoutNav";
import FirstClass from "./RouterProject/ClassbaseComponent/FirstClass";
import  ThirdClass from "./RouterProject/ClassbaseComponent/ThirdClass";
// import { Router, Route, Link } from "react-router-dom";

// import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div>
      <nav>
        {/* <RoutNav/> */}
        <FirstClass />
        <ThirdClass/>
      </nav>
      {/* <Router>
        <Route path="/" />
        <Home/>
        </Route>
        <Route path="/About"  />
        <About/>
      </Route>
      </Router> */}
    </div>
  );
};

export default App;
