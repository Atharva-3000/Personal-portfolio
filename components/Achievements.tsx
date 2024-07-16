import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { achievements} from '@/data'

const Achievements = () => {
    return (
        <div className="py-12" id='achievements'>
            <h1 className="heading mb-10">
                My{" "}
                <span className="text-purple">Achievements</span>
            </h1>
            <div className="flex flex-col  items-center ">
                <div className='h-80 md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>

                <InfiniteMovingCards
                items={achievements} direction='right' speed='slow'/>
                </div>
            </div>
        </div>

    )
}

export default Achievements