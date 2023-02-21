import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/offers" element={<Offers/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
 