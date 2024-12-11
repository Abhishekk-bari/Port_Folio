import React from 'react';
import img from '../assets/img.jpg'
import shape from '../assets/shape2.png'

function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5">
      {/* Left Side: Contact Form */}
      <div className="w-full md:w-1/2 pr-0 md:pr-5">
        <h1 className="text-4xl md:text-6xl font-[Roboto] md:pb-40 pl-2">Contact Me
        <img src={shape} class="absolute top-36 left-[17vw] w-40 h-40 object-cover -z-50 bounce-effect" />
        <p className='text-lg font-normal pt-1 text-gray-400 pr-10'>My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard.</p>
        </h1>

        <div className="form_div ">
          <h4 className='text-2xl pb-10'>Fill the Form</h4>
          <input
            className="border text-lg md:text-xl hover:border-black w-full p-2 mb-4 bg-[#f5f5f7]"
            placeholder="Name"
            type="text"
          />
          <input
            className="border text-lg md:text-xl hover:border-black w-full p-2 mb-4 bg-[#f5f5f7]"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="border text-lg md:text-xl hover:border-black w-full p-2 mb-4 bg-[#f5f5f7]"
            placeholder="Message"
            rows="4"
          />
          <button className="bg-zinc-900 text-white p-2 rounded w-full font-[Roboto] text-lg md:text-xl">
            Send
          </button>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <img
          src={img} // Replace with your image URL
          alt="Contact Illustration"
          className="object-cover w-full h-[45vw] rounded-s-xl rounded-e-xl"
        />
      </div>
    </div>
  );
}

export default Contact;
