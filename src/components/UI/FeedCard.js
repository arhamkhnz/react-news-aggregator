import React from "react"

export default function FeedCard({ article }) {
  const { imageSrc, title, description, category } = article
  return (
    <div className="w-full max-w-full shrink p-3 sm:w-1/3 sm:pt-0">
      <div className="flex flex-col sm:block">
        <a href="#">
          <img className="mx-auto h-52 w-full max-w-full object-cover" src={imageSrc} alt={title} />
        </a>
        <div className="py-3 sm:py-3">
          <h3 className="mb-2 text-lg font-bold leading-tight">
            <a className="line-clamp-3" href="#">
              {title}
            </a>
          </h3>
          <p className="mb-1 line-clamp-3 leading-tight text-gray-600">{description}</p>
          <a className="text-gray-500" href="#">
            <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
            {category}
          </a>
        </div>
      </div>
    </div>
  )
}
