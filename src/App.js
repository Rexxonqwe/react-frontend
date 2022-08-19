import SignupEmail from "./components/SignupEmail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupMobile from "./components/SignupMobile";
import UserDetails from "./components/UserDetails";
import CreatePassword from "./components/CreatePassword";
import Otp from "./components/Otp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignupEmail />}></Route>
          <Route path="/register/mobile" element={<SignupMobile />}></Route>
          <Route path="/register/mobile" element={<SignupMobile />}></Route>
          <Route path="/register/otp" element={<Otp />}></Route>
          <Route path="/register/userDetails" element={<UserDetails />}></Route>
          <Route path="/createPassword" element={<CreatePassword />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
