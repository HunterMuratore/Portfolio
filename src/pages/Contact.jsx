import { useState } from "react"

const initialFormData = {
    _next: '/success',
    subject: 'New Portfolio Message',
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}

function Contact() {
    const [formData, setFormData] = useState(initialFormData)

    const handleSubmit = (e) => {
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
        <section className="contact flex flex-col justify-center mx-auto">
            <h2 className="text-center text-2xl font-bold mt-10">Contact Me</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-10" >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white" value={formData.firstName} onChange={handleInputChange} type="text" name="firstName" placeholder="Frodo" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input className="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 focus:bg-white" value={formData.lastName} onChange={handleInputChange} type="text" name="lastName" placeholder="Baggins" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white" value={formData.email} onChange={handleInputChange} type="email" name="email" placeholder="FroBags@shire.com" required />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2">Message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg bg-gray-50" value={formData.message} onChange={handleInputChange} name="message" placeholder="Type your message here..." required></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="text-sm py-2 px-3 rounded" type="submit">Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default Contact