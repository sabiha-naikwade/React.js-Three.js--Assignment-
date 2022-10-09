
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Squaremodel from "./components/Squaremodel";
import Spheremodel from "./components/Spheremodel";
import Ringmodel from "./components/Ringmodel";
import Capsulemodel from "./components/Capsulemodel";
import Cone from "./components/Cone";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Squaremodel" element={<Squaremodel />}></Route>
          <Route path="/spheremodel" element={<Spheremodel/>}></Route>
          <Route path="/ringmodel" element={<Ringmodel/>}></Route>
          <Route path="/capsulemodel" element={<Capsulemodel/>}></Route>
          <Route path="/cone" element={<Cone/>}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
