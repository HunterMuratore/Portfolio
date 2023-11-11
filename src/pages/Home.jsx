import headshot from '../images/Hunter_Headshot.jpg'

function Home() {
    return (
        <section className="home flex flex-col items-center gap-6 text-center mb-3">
            <div className="mx-auto">
                <div>
                    <h1 className="text-3xl font-bold mt-10 mb-5">Hunter Muratore</h1>
                    <hr className="w-[300px] mx-auto" />
                    <h2 className="text-3xl font-bold mt-5 mb-10">Full Stack Developer</h2>
                </div>
                <img className='max-h-[500px]' src={headshot} alt="Hunter Headshot" />
            </div>
        </section>
    )
}

export default Home