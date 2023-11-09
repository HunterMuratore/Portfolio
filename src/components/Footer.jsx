import pokeballImage from '../images/pokeball.png';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full">
            <div className="w-full flex flex-col mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <p className="text-center py-2">Hunter Muratore</p>

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