import { useState } from "react"

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

function Contact() {
    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (e) => {
        console.log('clicked')
        e.preventDefault()

        setFormData({
            ...initialFormData
        })
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="contact flex flex-col mx-auto">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-lg" >
                <input type="hidden" name="_next" value="/success" />
                <input type="hidden" name="subject" value="New Portfolio Message" />
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={formData.firstName} onChange={handleInputChange} type="text" name="firstName" placeholder="Jane" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" value={formData.lastName} onChange={handleInputChange} type="text" name="lastName" placeholder="Doe" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" value={formData.email} onChange={handleInputChange} type="email" name="email" placeholder="your@email.com" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.message} onChange={handleInputChange} name="message" placeholder="Type your message here..." required></textarea>
                </div>
                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white mx-auto py-1 px-2 rounded" type="button">Send Message</button>
            </form>
            {/* <form className="mt-5 m-auto w-75 flex flex-col" action="https://mail.huntermuratore.com/muratoreh@gmail.com" method="POST">
                <input type="hidden" name="_next" value="/success" />
                <input type="hidden" name="subject" value="New Portfolio Message" />
                <div className="col-md-5">
                    <label for="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" name="First Name" id="firstName" required />
                </div>
                <div className="col-md-5">
                    <label for="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="Last Name" id="lastName" required />
                </div>
                <div className="col-md-4">
                    <label for="emailInfo" className="form-label">Email</label>
                    <input type="email" className="form-control" name="Email" id="emailInfo" placeholder="your@email.com" required />
                </div>
                <div className="col-md-10">
                    <label for="questions" className="form-label">Message</label>
                    <textarea className="form-control" name="Message" id="message" rows="3" placeholder="Type your message here" required></textarea>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-light btn-outline-dark btn-lg">Send Message</button>
                </div>
            </form> */}
        </section>
    )
}

export default Contact