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

function About() {
    return (
        <>
            <section className="about text-center">
                <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md">
                    <h1 className="text-2xl font-bold mt-10 mb-5">About Me</h1>
                    <p>Through 2020 and 2021 I worked as a R&D specialist in an inorganic chemistry lab at Air Liquide. I am currently job-searching and volunteering my time at a local park running weekly baseball tournaments.</p>
                    <p>In my free time, I have been creating various projects to build a portfolio and deepen my understanding of programming. When I&rsquo;m not working or studying I enjoy playing challenging games. Some of my favorites include Slay The Spire, Terraria, Rocket League, and Magic: The Gathering.</p>
                </article>
                <NavLink to="/resume"><button type="button" className="text-sm my-5 py-2 px-3 rounded">View My Resume</button></NavLink>
            </section>
            <section className="languages flex flex-col text-center mt-4 mb-4">
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
                        <img className="w-14 sm:w-20 md:w-full" src={bash} alt="Bash" />
                        <img className="w-14 sm:w-20 md:w-full" src={mongodb} alt="mongodb" />
                        <img className="w-14 sm:w-20 md:w-full" src={docker} alt="Docker" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About