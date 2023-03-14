import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SelectVote from "./components/SelectVote";
import VerifyIdentity1 from "./components/VerifyIdentity1";
import VerifyIdentity from "./components/VerifyIdentity";
import Authentication from "./components/Authentication";
import Authentication1 from "./components/Authentication1";
import Welcome from "./components/Welcome";
import ConfirmCandidate1 from "./components/ConfirmCandidate1";
import SelectCandidate from "./components/SelectCandidate"
import Register from "./components/Register"
import Verification from "./components/Verification1"
import ConfirmCandidate from "./components/ConfirmCandidate"
import SelectCandidate1 from "./components/SelectCandidate1"

import "./App.css";

function App() {
	return (

		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="SelectVote" element={<SelectVote />} />
			<Route path="verifyidentity1" element={<VerifyIdentity1 />} />
			<Route path="verifyidentity" element={<VerifyIdentity />} />
			<Route path="authentication" element={<Authentication />} />
			<Route path="Authentication1" element={<Authentication1 />} />
			<Route path="Welcome" element={<Welcome />} />
			<Route path="confirmcandidate1" element={<ConfirmCandidate1 />} />
			<Route path="selectcandidate" element={<SelectCandidate />} />
			<Route path="register" element={<Register />} />
			<Route path="verification" element={<Verification />} />
			<Route path="confirmcandidate" element={<ConfirmCandidate />} />
			<Route path="selectcandiate1" element={<SelectCandidate1 />} />
		</Routes>

	);
}

export default App;
