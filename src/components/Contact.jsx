import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div name="Contact" className='max-w-screen-2xl container mx-auto md:px-20 mt-32'>
            <h1 className='bg-gradient-to-r from-navcol to-navcoll font-bold text-xl box-content p-4 border-4 text-center md:py-5 tracking-widest'>Contact ME</h1>
            <div className='flex flex-col items-center justify-center mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}
            action='' className='bg-slate-200 w-96 px-8 py-6 shadow-xl rounded-xl'>
                <h1 className='font-bold text-xl text-center'>Send Your Message</h1>
                <div className='flex flex-col mt-10 space-y-3'>
                    <label>FullName</label>
                    <input {...register("name", { required: true })}
                    className='border rounded-lg shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' id="name" name='name' type='text' placeholder='Enter Your Full Name'/>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mt-10 space-y-3'>
                    <label>Email Address</label>
                    <input {...register("email", { required: true })}
                    className='border rounded-lg shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' id="email" name='email' type='text' placeholder='Enter Your Email Address'/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mt-10 space-y-3'>
                    <label>Message</label>
                    <textarea {...register("message", { required: true })}
                    className='border rounded-lg shadow appearance-none py-5 px-3 leading-tight focus:outline-none focus:shadow-outline' id="message" name='message' type='text' placeholder='Enter Your Query'/>
                    {errors.message && <span>This field is required</span>}
                </div>
                <button className='bg-black hover:bg-red-950 text-white rounded px-6 py-2 mx-28 mt-6'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
