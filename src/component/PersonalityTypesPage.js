import React from 'react';
import MBTI from "../assets/MBTI.json";
import { useSearchParams } from 'react-router-dom';

const PersonalityTypesPage = () => {
    const [searchParams] = useSearchParams();
    const languageFromURL = searchParams.get('language');
    const mbtiType = searchParams.get('mbti');

    const mbtiData = MBTI.find((item) => item["MBTI"] === mbtiType);
    let languageKey = '';

    console.log(languageKey)
    switch (languageFromURL) {
        case 'vi':
            languageKey = 'Vietnamese';
            break;
        case 'ko':
            languageKey = 'Korean';
            break;
        default:
            // Set a default language if none is specified
            languageKey = 'Vietnamese';
            break;
    }

    return (
        <div className="w-full ml-4 mr-4  h-full justify-center items-center flex bg-green-900 rounded-lg">
            <div className="p-10 modal-content flex flex-col justify-center items-center text-center text-white font-serif">
                <h1 className='pb-4 font-semibold text-center text-lg'>Your Personality Type is: </h1>
                <h1 className='tracking-wide rounded-sm w-1/3 font-extrabold leading-loose text-2xl border-2 border-green-500 '>{mbtiType}</h1>
                <div></div>
                <span className='py-4 font-medium text-xl underline'>Description</span>
                {mbtiData && (
                    <div className='pb-10'>
                        <p className='font-bold text-lg '>{`${mbtiData[languageKey]}`}</p>
                    </div>
                )}
                <a href='/'>
                    <button type="button" class="text-red-500 hover:text-white border border-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800">
                        <span className="close">Finish</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default PersonalityTypesPage;
