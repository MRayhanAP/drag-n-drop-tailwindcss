import React from 'react' 
import { UserIcon, StarIcon, PuzzleIcon } from '@heroicons/react/outline'

function SideBar(props) {
    return (
        <div className="fixed inset-y-0 left-0 bg-white w-40">
            <h1 className="flex items-center justify-center text-2xl 
            h-16 bg-emerald-500 text-white font-bold">Home</h1>

            <ul className='flex flex-col text-lg h-full'>
                <li className='flex justify-center items-center flex-col py-5'>
                    <UserIcon className="w-8 h-8"/>
                    User
                </li>
                <li className='flex justify-center items-center flex-col py-5 border-l-4 border-sky-500 text-sky-500'>
                    <PuzzleIcon className="w-8 h-8 text-sky-500"/>
                    Game
                </li>
                <li className='flex justify-center items-center flex-col py-5'>
                    <StarIcon className="w-8 h-8"/>
                    Test
                </li>
            </ul>

        </div>
    );
}

export default SideBar;