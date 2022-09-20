import React from "react";
import "./components.css";

const Contact = () => {
    return (
        <main>
            <h3 className=" text-center mt-5">Contact Me</h3>
            <div className="d-flex flex-column align-items-center justify-content-center contact">
                <input className="c-name mt-1" placeholder="Name"></input>

                <input className="c-subject mt-2" placeholder="Subject"></input>

                <textarea
                    className="c-message mt-2"
                    placeholder="Message"
                ></textarea>
                <button className="mt-3 submit-btn">Submit</button>
            </div>
        </main>
    );
};

export default Contact;
