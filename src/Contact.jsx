import React from "react";

function Contact(){
    return(
        <div className="contact-us">
            <div className="col-1">
                <h3>EXPLORE</h3>
                <a href="#none">Home</a>
                <a href="#none">Questions</a>
                <a href="#none">Articles</a>
                <a href="#none">Tutorials</a>
            </div>
            
            <div className="col-2">
                <h3>SUPPORT</h3>
                <a href="#none">FAQs</a>
                <a href="#none">Help</a>
                <a href="#none">Contact Us</a>
            </div>

            <div className="col-3">
                <h3>STAY CONNECTED</h3>
            </div>

            <div className="col-4">
                <h3>DEV@Deakin 2022</h3>
                <a href="#none">Privacy Policy</a>
                <a href="#none">Terms</a>
                <a href="#none">Code Of Conduct</a>
            </div>
        </div>
    )
}

export default Contact