import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import "./App.css";
import Home from "../pages/home/Home";
import Footer from "../components/footer/Footer";
import Auth from "../pages/auth/Auth";
import Signin from "../components/signin/Signin";
import Signup from "../components/signup/Signup";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
      <Toaster />
      <Navbar />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>

        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<Signin />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
