import { useState } from "react";

export default function Contact() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    fetch('./api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setTimeout(() => setSubmitted(false), 3000)
      }
    })
  }

  return (

    <section id="contact" className="py-10">
      <h1 className="text-white font-semibold text-5xl">Get in touch</h1>
      <p className="font-medium text-lg text-white">Please fill out this quick form to get in touch :D!</p>

      <div className="mt-10 flex items-center">
        {submitted ? (
          <div className="bg-green-500 text-white font-bold px-4 py-2 rounded">
            Thank you for your message!
          </div>
        ) : (
          <div className="bg-gray-800 w-full md:w-6/12 p-20 border-solid border-2 border-animation rounded-lg">
            <form onSubmit={handleSubmit}>
              <label className="block text-white font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input onChange={(e) => { setName(e.target.value) }} value={name} name="name" className="w-full text-gray-200 bg-gray-600 rounded-sm border border-gray-400 hover:border-gray-500 px-4 py-2 mb-4" id="name" type="text" placeholder="Jhon" required />

              <label className="block text-white font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input onChange={(e) => { setEmail(e.target.value) }} value={email} name="email" className="w-full text-gray-200 bg-gray-600 rounded-smborder-o border border-gray-400 hover:border-gray-500 px-4 py-2 mb-4" type="email" placeholder="example@gmail.com" required />

              <label className="block text-white font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea onChange={(e) => { setMessage(e.target.value) }} value={message} name="message" className="w-full text-gray-200 bg-gray-600 rounded-sm border border-gray-400 hover:border-gray-500 px-4 py-2 mb-4" id="message" placeholder="Well hello there!" required>
              </textarea>

              <button onClick={(e) => { handleSubmit(e) }} className="bg-orangec hover:bg-orange-500 text-white font-bold py-2 px-4 rounded" type="submit">
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
