import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";


function App() {
  const Navigate = useNavigate()
  useEffect(() => {
    Navigate("/home")
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
