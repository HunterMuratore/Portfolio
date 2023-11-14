import headshot from '../images/Hunter_Headshot.jpg'

function Home() {
    return (
        <section className="home flex flex-col items-center gap-6 text-center mb-3">
            <div className="mx-auto">
                <div>
                    <h1 className="text-3xl font-bold mt-10 mb-5">Hunter Muratore</h1>
                    <hr className="w-[300px] mx-auto" />
                    <h2 className="text-3xl font-bold mt-5 mb-5">Full-Stack Developer</h2>
                    <p className="text-xl xl:px-96 mt-5 mb-5">Industrial Chemist turned Full-Stack Developer. Grounded in science and enriched by coding, my approach reflects adaptability in tech's ever-evolving landscape.</p>
                </div>
                <img className='max-h-[500px] mx-auto' src={headshot} alt="Hunter Headshot" />
            </div>
        </section>
    )
}

export default Home