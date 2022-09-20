import React from "react";

const Projects = () => {
    const project = ["Carp App", "Encryption App", "Team Allocator"];
    const href = [
        "https://github.com/a1an-huang/CARP-REPO",
        "https://github.com/a1an-huang/system-fundamentals/tree/main/cse220-hw2-a1an-huang",
        "https://github.com/a1an-huang/React-Team-Allocation",
    ];
    const description = [
        "A web application for analysis of garbage collection data with MERN stack",
        "A simple Encryption app in Assembly",
        "A simple Team allocator app created with React",
    ];

    return (
        <main className="mt-5">
            <h3 className="text-center">Projects</h3>
            <div className="project-collection mt-3 align-items-center justify-content-center">
                {project.map((project, index) => {
                    return (
                        <article className=" d-flex flex-column align-items-center justify-content-center ">
                            <h4
                                href={href[index]}
                                className=" col-8 text-center"
                            >
                                {project}
                            </h4>
                            <img></img>
                            <p className=" col-8 text-center">
                                {description[index]}
                            </p>
                        </article>
                    );
                })}
            </div>
        </main>
    );
};

export default Projects;
