import React from "react";
import Image from './Image'
import Header from './Header'
import Articles from './Articles'
import Tutorials  from "./Tutorials";
import Footer from "./Footer";
import Contact from "./Contact";

function App(){
    return(
    <div className="app-div">
        <Header />
        <Image />
        <Articles />
        <Tutorials />
        <Footer />
        <Contact />
    </div>)
}

export default App