import { useMediaQuery } from 'react-responsive'

function Editing() {
    const isMedScreen = useMediaQuery({ maxWidth: 1100 })
    const isSmallScreen = useMediaQuery({ maxWidth: 600 })

    let videoWidth
    let videoHeight

    if (isSmallScreen) {
        videoWidth = '100%';
        videoHeight = '56.25vw' // 16:9 aspect ratio for small screens
    } else if (isMedScreen) {
        videoWidth = '90%';
        videoHeight = '50vw' // Maintain a good aspect ratio
    } else {
        videoWidth = '1000px'
        videoHeight = '562.5px' // 16:9 aspect ratio for large screens
    }
    
    return (
        <>
            <section className="editing text-center">
                <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md mt-10">
                    <h1 className="text-2xl font-bold mt-10 mb-5">Video Editing</h1>
                    <p>As someone who thrives on exploring new challenges, I am always dedicated to learning new things. My journey into video editing began as a hobby and quickly became an exciting avenue for creative expression and growth. Through this exploration, I have contributed to a YouTube channel with millions of views, showcasing my ability to engage and entertain audiences while embracing the art of storytelling through video.</p>

                    <p>While my primary career focus remains in software development, video editing has become a rewarding hobby. It serves as a testament to my commitment to continuous learning and my enthusiasm for tackling new challenges. I believe that each new skill I acquire enriches my overall perspective, enabling me to approach problems with creativity and resilience.</p>
                </article>

                <h2 className="text-3xl font-bold mt-10 mb-5">Videos Edited for <a
                    href="https://www.youtube.com/@OkRobert."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                >
                    OkRobert
                </a></h2>

                {/* <div className="video-container mt-10 mx-auto" style={{ width: videoWidth, height: videoHeight }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ccAyMqrkNIs"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div> */}

                <div className="video-container mt-10 mx-auto" style={{ width: videoWidth, height: videoHeight }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/X1J090UrOCw"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="video-container mt-10 mx-auto" style={{ width: videoWidth, height: videoHeight }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/wapju_cL3ag?start=1858"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </>
    )
}

export default Editing