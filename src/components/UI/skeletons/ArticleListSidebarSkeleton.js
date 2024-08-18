import React from "react"

export default function ArticleListSidebarSkeleton() {
  return (
    <div className="order-first w-full max-w-full shrink px-3 lg:order-last lg:w-1/3 lg:px-0 lg:pb-8 lg:pl-8 lg:pt-14">
      <div className="top-5 w-full animate-pulse rounded-lg bg-gray-100 shadow-md lg:sticky">
        <div className="mb-6">
          <div className="rounded-t-lg bg-gray-200 p-4">
            <div className="h-6 w-3/4 rounded bg-gray-300"></div>
          </div>
          <ul className="rounded-b-lg bg-white">
            {Array(5)
              .fill()
              .map((_, index) => (
                <li key={index} className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50">
                  <div className="flex flex-row items-center px-6 py-3">
                    <div className="h-4 w-full rounded bg-gray-300"></div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
