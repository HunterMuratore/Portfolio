import musik from '../images/projects/musik.png'
import formforwarder from '../images/projects/formforwarder.png'
import jate from '../images/projects/jate.png'
import employee_tracker from '../images/projects/employee_tracker.png'
import ski from '../images/projects/ski.png'
import yokai from '../images/projects/yokai.png'
import golden_moments from '../images/projects/goldenmoments_2.png'
import whiskeyhabits from '../images/projects/whiskeyhabits.png'

const projects = [
    {
        name: 'WhiskeyHabits.com',
        description: 'Full-stack web app using Apollo Server/GraphQL with a React frontend. Implemented features for personalized collections, whiskey reviews and ratings of over 2000 whiskeys.',
        img: whiskeyhabits,
        gitLink: 'https://github.com/HunterMuratore/WhiskeyHabits',
        appLink: 'https://www.whiskeyhabits.com/'
    },
    {
        name: 'Ski Jewelers',
        description: 'Website built with React + Vite for a local jewelry store. Worked closely with the owner of the store to create a website to their exact specifications.',
        img: ski,
        gitLink: 'https://github.com/HunterMuratore/ski-jewelers',
        appLink: 'https://www.skijewelersgreenbrook.com/'
    },
    {
        name: 'Golden Moments',
        description: 'Custom website for a catering and event planning company. Worked closely with the business owner to emphasize visually appealing design and seamless navigation.',
        img: golden_moments,
        gitLink: 'https://github.com/HunterMuratore/Golden-Moments',
        appLink: 'https://www.goldenmomentsnj.com/'
    },
    {
        name: 'FormForwarder',
        description: 'API built in C# using .NET Core that takes in form data and formats it into an email to send to user. Currently being used in my contact form!',
        img: formforwarder,
        gitLink: 'https://github.com/HunterMuratore/FormForwarder'
    },
    {
        name: 'Yokai',
        description: 'Full-stack web app built with React and GraphQL that allows users to create wish lists of products which other users can see and purchase for them.',
        img: yokai,
        gitLink: 'https://github.com/HunterMuratore/Yokai',
        appLink: 'https://nameless-mesa-64050-dec54f78b1de.herokuapp.com/'
    },
    {
        name: 'Musik',
        description: 'Full stack app built in Express that allows users to share their favorite songs and connect with other users over music.',
        img: musik,
        gitLink: 'https://github.com/HunterMuratore/Musik',
        appLink: 'https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/'
    },
    // {
    //     name: 'J.A.T.E.',
    //     description: 'Progressive web app text editor that runs in the browser and functions both online and offline. Users can install JATE to the local system and take notes with JavaScript syntax highlighting.',
    //     img: jate,
    //     gitLink: 'https://github.com/HunterMuratore/pwa-text-editor',
    //     appLink: 'https://morning-shelf-20480-d6c36316ee54.herokuapp.com/'
    // },
    // {
    //     name: 'Employee Tracker',
    //     description: 'NodeJS app that allows a user to keep track of an entire employee network. Users have the ability to easily view and edit all departments, roles and employees in their system.',
    //     img: employee_tracker,
    //     gitLink: 'https://github.com/HunterMuratore/employee-tracker-cms'
    // },
]

function Projects() {
    return (
        <section className="projects text-center mb-3">
            <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md">
                <h1 className="text-2xl font-bold mt-10 mb-5">Projects</h1>
                <p>My journey as a software developer has been marked by relentless pursuit of growth and innovation. Every day presents a new opportunity to expand my knowledge and hone my skills. I am deeply committed to continuous learning, constantly pushing the boundaries of my expertise and refining my craft. This commitment is evident in my active engagement on GitHub, where I regularly contribute new repositories and push updates to existing projects.</p>

                <p className='mt-2'>I have created and maintained several projects, including this website, of which many are dockerized and hosted on my personal server.</p>
            </article>
            <figure className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                {projects.map((project, i) => (
                    <div key={i} className='project-card flex flex-col p-2 mx-auto'>
                        <img src={project.img} alt={project.img} className='project-img' />
                        <h2 className='mt-6 font-semibold text-lg'>{project.name}</h2>
                        <figcaption className='my-1 card-body'>{project.description}</figcaption>
                        <div className='mt-auto mb-5'>
                            <a href={project.gitLink} target='_blank' rel='noopener noreferrer' className='my-btn text-sm my-5 py-2 px-3 rounded'><button>GitHub</button></a>
                            {project.appLink ? <a href={project.appLink} target='_blank' rel='noopener noreferrer' className='my-btn text-sm my-5 py-2 px-3 rounded ml-6'><button>Live App</button></a> : ''}
                        </div>
                    </div>
                ))}
            </figure>
        </section>
    )
}

export default Projects