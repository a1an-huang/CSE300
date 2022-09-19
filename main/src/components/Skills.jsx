import React from "react";
import "./components.css";
import { SiJavascript, SiReact } from "react-icons/si";
import { FaPython, FaJava, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
    const skills = [
        "Python",
        "Java",
        "JavaScript",
        "React",
        "MongoDB",
        "Github",
    ];
    const icons = [
        <FaPython size={150} />,
        <FaJava size={150} />,
        <SiJavascript size={150} />,
        <SiReact size={150} />,
        <DiMongodb size={150} />,
        <FaGithub size={150} />,
    ];
    return (
        <section className="mt-5">
            <h3 className="text-center">Skills</h3>
            <div className="skill-collection mt-3">
                {skills.map((skill, index) => {
                    console.log(skill);
                    return (
                        <article className="d-flex flex-column align-items-center justify-content-center">
                            {icons[index]}
                            <footer>
                                <h6 className="mt-3">{skill}</h6>
                            </footer>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
