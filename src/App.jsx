import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { StickyNavbar } from "./components/Navbar";
import { SimpleFooter } from "./components/Footer";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.JOURNEY} element={<Journey />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
      <SimpleFooter />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
