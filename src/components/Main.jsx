
import {BsFillPlayFill} from 'react-icons/bs';
import Code from './Code';
import Register from './Register'

const Main = () => {
  return (
    <>
    {/* Text Headings and Links */}

    <div className='ml-24'>
        <a href='/' className='text-5xl font-semibold'>Learn programming with <span className='text-success'>LJTechnology🔥</span></a>
        <p className='mt-3 text-2xl'>the best Code Course program for students and teachers</p>
        <div className='mt-4'>
        <a href='/' className='flex'><BsFillPlayFill className='mt-1'/> with support for these runtimes</a>
        </div>
    </div>

    {/* Button Section */}
    <Register/>
    <Code/>
    </>
  )
}

export default Main

