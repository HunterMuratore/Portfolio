import { NavLink } from 'react-router-dom'

import angular from '../images/logos/angular.png'
import bash from '../images/logos/bash.png'
import bootstrap from '../images/logos/bootstrap.png'
import csharp from '../images/logos/csharp.png'
import css from '../images/logos/css.png'
import docker from '../images/logos/docker.png'
import html from '../images/logos/html.png'
import js from '../images/logos/js.png'
import node from '../images/logos/node.png'
import visual_studio from '../images/logos/visual_studio.png'
import vscode from '../images/logos/vscode.png'
import react from '../images/logos/react.png'
import tailwind from '../images/logos/tailwind.png'
import mongodb from '../images/logos/mongodb.png'
import graphql from '../images/logos/graphql.png'

function About() {
    return (
        <>
            <section className="about text-center">
                <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md mt-10">
                    <h1 className="text-2xl font-bold mt-10 mb-5">About Me</h1>
                    <p>After several years as a research and development specialist in inorganic chemistry at Air Liquide, I embarked on an exhilarating journey into the realm of software development. Fueled by a deep personal commitment to learning and a passion for overcoming challenges, I committed myself to the ongoing journey of mastering the craft of software development. Following a rigorous year of independent study and a transformative experience at the Rutgers Full-Stack Bootcamp, I emerged equipped with a comprehensive skill set and a fervent determination to excel.</p>

                    <p>Through perseverance and unwavering dedication, I have not only established myself as a proficient and adept software developer but also cultivated a mindset of lifelong learning and growth. My journey is ongoing, and I am excited to embrace the challenges and opportunities that lie ahead.</p>
                </article>
                <NavLink to="/resume"><button type="button" className="my-btn text-sm mt-10 my-5 py-2 px-3 rounded">View My Resume</button></NavLink>
            </section>
            <section className="languages flex flex-col text-center mb-4">
                <h1 className="text-2xl font-bold mt-10 mb-5">Languages & Skills</h1>
                <div className="space-x-10 sm:space-x-20 grid grid-flow-col mx-auto">
                    <div className="px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <img className="w-14 sm:w-20 md:w-full" src={js} alt="JavaScript" />
                        <img className="w-14 sm:w-20 md:w-full" src={html} alt="HTML" />
                        <img className="w-14 sm:w-20 md:w-full" src={css} alt="CSS" />
                        <img className="w-14 sm:w-20 md:w-full" src={node} alt="NodeJS" />
                        <img className="w-14 sm:w-20 md:w-full" src={react} alt="React" />
                        <img className="w-14 sm:w-20 md:w-full" src={csharp} alt="C#" />
                        <img className="w-14 sm:w-20 md:w-full" src={angular} alt="Angular" />
                    </div>
                    <div className="px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <img className="w-14 sm:w-20 md:w-full" src={vscode} alt="VS Code" />
                        <img className="w-14 sm:w-20 md:w-full" src={visual_studio} alt="Visual Studio" />
                        <img className="w-14 sm:w-20 md:w-full" src={tailwind} alt="Tailwind" />
                        <img className="w-14 sm:w-20 md:w-full" src={bootstrap} alt="Bootstrap" />
                        <img className="w-14 sm:w-20 md:w-full" src={mongodb} alt="mongodb" />
                        <img className="w-14 sm:w-20 md:w-full" src={graphql} alt="graphql" />
                        <img className="w-14 sm:w-20 md:w-full" src={docker} alt="Docker" />
                        <img className="w-14 sm:w-20 md:w-full" src={bash} alt="Bash" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About