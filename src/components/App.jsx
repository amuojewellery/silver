import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Banner from "./Banner";
import LargeBanner from "./LargeBanner";
import Combo from "./Combo";


function App() {
  return (
    <div class="home_black_version">
    <Haeder/>
    
    <Banner/>
    <LargeBanner/>
    <Combo/>
    <Footer/>
    </div>
  );
}

export default App;
