import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Verify from "./components/Verify";
import Verify2 from "./components/Verify2";
import Verify3 from "./components/Verify3";
import Verify4 from "./components/Verify4";
import Verify5 from "./components/Verify5";
import Register2 from "./components/Register2";
import PersonalInfo from "./components/PersonalInfo";
import PollingUnit from "./components/PollingUnit";
import PollingUnit2 from "./components/PollingUnit2";
import RegSuccess from "./components/RegSuccess"
import PvcStatus from "./components/PvcStatus"
import PvcStatus2 from "./components/PvcStatus2"
import PvcReady from "./components/PvcReady"
import PvcStatus3 from "./components/PvcStatus3"

import "./App.css";


function App() {
	return (
		
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="verify" element={<Verify />} />
				<Route path="verify2" element={<Verify2 />} />
				<Route path="verify3" element={<Verify3 />} />
				<Route path="verify4" element={<Verify4 />} />
				<Route path="verify5" element={<Verify5 />} />
				<Route path="register2" element={<Register2/>} />
        		<Route path="personalinfo" element={<PersonalInfo />} />
				<Route path="pollingunit" element={<PollingUnit />} />
				<Route path="pollingunit2" element={<PollingUnit2 />} />
				<Route path="regsuccess" element={<RegSuccess />} />
				<Route path="pvcstatus" element={<PvcStatus />} />
				<Route path="pvcstatus2" element={<PvcStatus2 />} />
				<Route path="pvcready" element={<PvcReady />} />
				<Route path="pvcstatus3" element={<PvcStatus3 />} />
			</Routes>
		
	);
}

export default App;
