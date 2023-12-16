import { useMediaQuery } from 'react-responsive';

function Certificate() {
    const isMobile = useMediaQuery({ query: '(max-width: 1050px)' });

    return (
        <section className="cert mt-10 mb-3">
            <div className='cert-container mx-auto max-w-[1000px]'>
                <iframe
                    src="https://docs.credentials.rutgers.edu/embed/400681d0-c7d9-4f18-8fd0-c106b8a3daf3"
                    width={isMobile ? "100%" : "1000"}
                    height={isMobile ? "500" : "800"}
                    className="mx-auto"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default Certificate;
