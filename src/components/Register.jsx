'use client'
import { useState } from 'react';

import { AiFillGithub } from 'react-icons/ai';
import RegisterPop from './RegisterPop';

const Register = () => {

    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='ml-24 mt-10 flex'>
        <button 
            onClick={()=>setModalOpen(!modalOpen)}
            className="btn btn-success gap-2 text-white">
            <AiFillGithub className='h-6 w-6'/>
            Register
        </button>
        <p className='text-lg ml-2 mt-2'>or browse <a href='/corses' className='link link-success'>course outline</a></p>

        <RegisterPop modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" required/>

                <label className="label">
                    <span className="label-text">What is your email?</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" required/>
                
                <label className="label">
                    <span className="label-text">What is your phone number?</span>
                </label>
                <input type="tel" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" />
                <button type='submit' className='btn btn-success mt-2'>Register</button>

            </div>
            </form>
        </RegisterPop>
    </div>
  )
}

export default Register