import React, { ReactNode } from 'react';

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: {
    title: string,
    icon: ReactNode,
    position: string,
    handleClick?: () => void,
    otherClasses?: string
}) => {
    return (
        // Button code
        <button 
            className="inline-flex h-12 animate-shimmer items-center w-full justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors 
            hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] hover:text-slate-50 hover:border-slate-500 duration-800 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-8"
            onClick={handleClick}
        >
            <span className={`inline-flex items-center ${otherClasses}`}>
                {position === "left" && <span className="mr-2">{icon}</span>}
                {title}
                {position === "right" && <span className="ml-2">{icon}</span>}
            </span>
        </button>
    )
}

export default MagicButton;
