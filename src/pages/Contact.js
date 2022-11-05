import React, { useState } from 'react'
import Footer from '../components/Footer'

function Contact() {

  const initialValues = { fname: "", lname: "", email: "", message: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const setIsSubmit = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target
    setFormValues({ ...formValues, [name]:value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const validate = (values) => {
    const errors = {}
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.fname){
      errors.fname = "First Name is Required!"
    }
    if(!values.lname){
      errors.lname = "Last Name is Required!"
    }
    if(!values.email){
      errors.email = "Email is Required!"
    } else if (!regex.test(values.email)){
      errors.email = "This is not a valid email format"
    }
    if(!values.message){
      errors.message = "Please enter a message"
    }
    return errors;
  }

  return (
    <div className=''>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className=''>Sent Successfully</div>
      ):(
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
      <section className='w-8/12 mx-auto mt-24'>
        <div className='space-y-5'>
          <h1 className='font-inter font-bold text-4xl'>Contact Me</h1>
          <p className='font-inter text-[#475467]'>Hi there, contact me to ask about anything you have in mind.</p>
        </div>

        <form className='mt-8' onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col space-y-2'>
              <label className='font-inter font-medium text-[#475467]'>First Name</label>
              <input 
                type="text"
                className='border p-2.5 rounded-lg outline-[#BCE2FF]' 
                name='fname' 
                placeholder='Enter your first name' 
                id='first_name' value={formValues.fname}
                onChange={handleChange}/>
                <p className='font-inter text-[#F83F23]'>{formErrors.fname}</p>
            </div>
            
            <div className='flex flex-col space-y-2'>
              <label className='font-inter font-medium text-[#475467]'>Last Name</label>
              <input 
                type="text"
                className='border p-2.5 rounded-lg outline-[#BCE2FF]' 
                name='lname' 
                placeholder='Enter your last name' 
                id='last_name' 
                value={formValues.lname}
                onChange={handleChange} />
                <p className='font-inter text-[#F83F23]'>{formErrors.lname}</p>
            </div>
            
          </div>
          <div className='space-y-2 mt-5'>
            <label className='font-inter font-medium text-[#475467]'>Email</label>
            <input 
              type="email" 
              className='border p-2.5 w-full rounded-lg outline-[#BCE2FF]' 
              name='email' 
              placeholder='yourname@email.com' 
              id='email' 
              value={formValues.email}
              onChange={handleChange} />
          </div>
          <p className='font-inter text-[#F83F23]'>{formErrors.email}</p>
          <div className='space-y-2 mt-5'>
            <label className='font-inter font-medium text-[#475467]'>Message</label>
            <textarea 
              rows="5" 
              type="text" 
              className='border p-2.5 w-full rounded-lg outline-[#BCE2FF]' 
              name='message' 
              placeholder="Send me a message and I'll reply you as soon as possible...  " 
              id='message' 
              value={formValues.message}
              onChange={handleChange} />
          </div>
          <p className='font-inter text-[#F83F23]'>{formErrors.message}</p>
          <div className='space-x-2 mt-5 flex items-center'>
            <input type="checkbox" className="w-4 h-4 text-black-400 border border-gray-400 outline-[#BCE2FF]" />
            <span className='font-inter text-[#475467]'>You agree to providing your data to Daniel Ukaji who may contact you.</span>
          </div>
          <div className='mt-10'>
            <button className='font-inter w-full bg-[#1570EF] py-3 text-center text-white rounded-lg' id='btn__submit'>Send Message</button>
          </div>
        </form>

      </section>
      <Footer />
    </div>
  )
}

export default Contact