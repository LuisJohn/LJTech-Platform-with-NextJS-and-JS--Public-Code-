import { SiJavascript, SiPython, SiTypescript} from 'react-icons/si';

const page = () => {
  return (
    <>
    <div className=' courses'>
      <h1 className='text-3xl font-bold'>Pick your language</h1>
    </div>

      <div className='grid-rows-4 courses'>
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <SiTypescript  size={150}/>
        </a>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <SiJavascript  size={150}/>
        </a>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <SiPython size={150}/>
        </a>
      </div>
    </>
  )
}

export default page