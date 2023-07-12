import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            'service_khse2zi',
            'template_4flm343',
            form.current,
            'cNpwItKK8du-F8jos'
          )
          .then(
            (result) => {
              console.log(result.text);
              setMessage('Message sent successfully');
              setIsSuccess(true);
              form.current.reset(); // Reset the form fields
    
              // Clear the success message after 5 seconds
              setTimeout(() => {
                setMessage('');
                setIsSuccess(false);
              }, 2000);
            },
            (error) => {
              console.log(error.text);
              setMessage('Message not sent');
              setIsSuccess(false);
            }
          );
      };

  return <section id='contact' className='pb-16'>
  <div className='container'>
  <h2 className='text-black font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
    <div className='md:flex justify-between items-center'>
        <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.066144193712!2d80.
        67303649313256!3d7.352038882507872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35d84ac57
        1889%3A0x113e50bdce827e34!2sWattegama!5e0!3m2!1sen!2slk!4v1686034102845!5m2!1sen!2slk"
        className='border-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 
        lg:px-8 py-8'>
            <form ref={form} onSubmit={sendEmail} className='w-full'>
                <div className='mb-5'>
                    <input 
                    type='text'
                    name='user_name'
                    placeholder='Enter your name'
                    className='w-full p-3 focus:outline-none rounded-[5px]'/>
                </div>
                <div className='mb-5'>
                    <input 
                    type='text'
                    name='user_email'
                    placeholder='Enter your email'
                    className='w-full p-3 focus:outline-none rounded-[5px]'/>
                </div>
                <div className='mb-5'>
                    <input 
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    className='w-full p-3 focus:outline-none rounded-[5px]'/>
                </div>
                <div className='mb-5'>
                    <textarea
                    type='text'
                    name='message'
                    rows={3}
                    placeholder='Write your message'
                    className='w-full p-3 focus:outline-none rounded-[5px]'/>
                </div>

                <button className='w-full p-3 focus-outline-none rounded-[5px] bg-smallTextColor text-white 
                hover:bg-headingColor text-center ease-linear duration-150'>
                    Send Message
                </button>

                {message && (
                <p className={isSuccess ? 'text-green-500-bold font-bold' : 'text-red-500-bold font-bold'}>
                  {message}
                </p>
              )}

            </form>
        </div>
    </div>
  </div>

  </section>
}

export default Contact;
