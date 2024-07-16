import React from 'react'

const TailwindCard = ({
  title, img, quote
}: {
  title: string,
  img: string,
  quote: string
}) => {
  return (
    <div className="max-w-sm  rounded-lg shadow dark:bg-gray-800 flex flex-col justify-center items-center">
      <div className="relative h-48 w-full overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src={img} alt={title} />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden md:block">{quote}</p>
      </div>
    </div>
  )
}

export default TailwindCard
