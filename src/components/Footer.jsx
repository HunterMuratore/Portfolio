import pokeballImage from '../images/pokeball.png';

function Footer() {
    return (
        <footer className="flex flex-col mt-auto py-2">
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
        </footer>
    );
}

export default Footer