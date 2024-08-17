import React from "react";

export default function FeedCard({ imageSrc, title, description, category }) {
  return (
    <div className="w-full max-w-full shrink p-3 sm:w-1/3 sm:pt-0">
      <div className="hover-img flex flex-col sm:block">
        <a href="#">
          <img
            className="mx-auto w-full max-w-full"
            src={imageSrc}
            alt={title}
          />
        </a>
        <div className="py-3 sm:py-3">
          <h3 className="mb-2 text-lg font-bold leading-tight">
            <a href="#">{title}</a>
          </h3>
          <p className="mb-1 hidden leading-tight text-gray-600 md:block">
            {description}
          </p>
          <a className="text-gray-500" href="#">
            <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
            {category}
          </a>
        </div>
      </div>
    </div>
  );
}
