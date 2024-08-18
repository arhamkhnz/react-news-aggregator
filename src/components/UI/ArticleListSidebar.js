import React from "react"

export default function ArticleListSidebar({ title, articles }) {
  return (
    <div className="order-first w-full max-w-full shrink px-3 lg:order-last lg:w-1/3 lg:px-0 lg:pb-8 lg:pl-8 lg:pt-14">
      <div className="top-5 w-full rounded-lg bg-gray-100 shadow-md lg:sticky">
        <div className="mb-6">
          <div className="rounded-t-lg bg-gray-200 p-4">
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          </div>
          <ul className="rounded-b-lg bg-white">
            {articles.map((article, index) => (
              <li key={index} className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50">
                <a
                  className="flex flex-row items-center px-6 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900"
                  href={article.link}
                >
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
