import pokeballImage from '../images/pokeball.png';

function Footer() {
    const date = new Date()
    return (
        <footer className="">
            <div className="w-full flex flex-col mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <p className="text-center py-2"><span>&copy; {date.getFullYear()}</span> Hunter Muratore</p>

            <div className="flex justify-center items-center space-x-4">
                <a href="https://github.com/HunterMuratore" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-2xl"></i>
                </a>

                <img className="pokeball-img" src={pokeballImage} alt="Pokeball" />

                <a href="https://www.linkedin.com/in/hunter-muratore-0b38a3173" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
            </div>
            </div>
        </footer>
    );
}

export default Footer