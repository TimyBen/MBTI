import React, { useEffect, useState } from 'react';
import kittyImage from '../assets/kitty.jpg';

const MainPage = () => {
 const [language, setLanguage] = useState('ko');

 useEffect(() => {
  console.log('Updated lang in useEffect:', language);
}, [language]);

 const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
 };

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full'>
        <div className='flex justify-evenly items-center'>
          <div className='px-6 pt-10 items-center justify-around flex flex-row top-4 absolute w-full'>
            <div className=''>
              <div className='flex content-left items-center flex-col font-serif text-white font-bold'>
                <h1 className=''>M.B.T.I</h1>
                <h1>PERSONALITY TEST</h1>
              </div>
            </div>
            <select
              className=' ring-green-400 ring-opacity ring rounded-2xl border-opacity20 border-10 bg-opacity-40 bg-blue-800 w-36 relative font-serif text-sm'
              onChange={handleLanguageChange}
              value={language}
            >
              <option className='' value="vi">🇻🇳 Vietnamese</option>
              <option value="ko">🇰🇷 Korean</option>
            </select>
          </div>
        </div>

        <div className='mt-24 max-h-full w-full justify-center items-center flex flex-col'>
          <div className='bg-center object-fill aspect-auto bg-contain bg-no-repeat brightness-150'>
            <img
              className="size-24 object-fill aspect-auto bg-contain bg-no-repeat brightness-1500"
              src={kittyImage}
              alt=''
            />
          </div>
          <div className='mt-16 w-96'>
            <div className='rounded-2xl  text-blue-900 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>
              <a href={`/questions?language=${language}`} className='top-12 flex justify-center items-center font-serif rounded-xl w-full h-18'>
                <button  className='w-full font-serif text-3xl h-16 font-extrabold'>START TEST</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
