import musik from '../images/projects/musik.png'
import formforwarder from '../images/projects/formforwarder.png'
import jate from '../images/projects/jate.png'
import employee_tracker from '../images/projects/employee_tracker.png'
import pokemon_gen from '../images/projects/pokemon.png'
import yokai from '../images/projects/yokai.png'

const projects = [
    {
        name: 'FormForwarder',
        description: 'An API built in C# using .NET Core that takes in form data and formats it into an email to send to user. Currently being used in my contact form!',
        img: formforwarder,
        gitLink: 'https://github.com/HunterMuratore/FormForwarder'
    },
    {
        name: 'Yokai',
        description: 'Full-stack web app that allows users to create wish lists of products which other users can see and purchase for them.',
        img: yokai,
        gitLink: 'https://github.com/HunterMuratore/Yokai',
        appLink: 'https://nameless-mesa-64050-dec54f78b1de.herokuapp.com/'
    },
    {
        name: 'Musik',
        description: 'Full stack app allowing users to share their favorite songs and connect with other users over music.',
        img: musik,
        gitLink: 'https://github.com/HunterMuratore/Musik',
        appLink: 'https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/'
    },
    {
        name: 'J.A.T.E.',
        description: 'Progressive web app text editor that runs in the browser and functions both online and offline. Users can install JATE to the local system and take notes with JavaScript syntax highlighting.',
        img: jate,
        gitLink: 'https://github.com/HunterMuratore/pwa-text-editor',
        appLink: 'https://morning-shelf-20480-d6c36316ee54.herokuapp.com/'
    },
    {
        name: 'Employee Tracker',
        description: 'NodeJS app that allows a user to keep track of an entire employee network. Users have the ability to easily view and edit all departments, roles and employees in their system.',
        img: employee_tracker,
        gitLink: 'https://github.com/HunterMuratore/employee-tracker-cms'
    },
    {
        name: 'Pokemon Generator',
        description: 'Template built in HTML and Javascript that generates a random Pokemon on button click and changes CSS to match the Pokemon\'s type.',
        img: pokemon_gen,
        gitLink: 'https://github.com/HunterMuratore/Random-Pokemon-Generator',
        appLink: 'https://huntermuratore.github.io/Random-Pokemon-Generator/'
    }
]

function Projects() {
    return (
        <section className="projects text-center mb-3">
            <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md">
                <h1 className="text-2xl font-bold mt-10 mb-5">Projects</h1>
                <p>I graduated from Drew University as a member of Phi Beta Kappa with a B.S. in Chemistry and a minor in French. After a year in industrial chemistry I have shifted my career focus towards full-stack software engineering and development.</p>
                <p className='mt-2'>I have created and maintained several projects, including this website, of which many are dockerized and hosted on my personal server.</p>
            </article>
            <figure className="container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
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