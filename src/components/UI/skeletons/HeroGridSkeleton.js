import React from "react"

export default function HeroGridSkeleton() {
  return (
    <div className="mx-auto animate-pulse xl:container sm:px-4 lg:px-0">
      <div className="flex flex-row flex-wrap">
        <div className="w-full max-w-full shrink pb-1 lg:w-1/2 lg:pb-0 lg:pr-1">
          <div className="dark:bg-gray-700 relative h-full overflow-hidden rounded-lg bg-gray-200">
            <div className="h-64 w-full bg-gray-300"></div>
            <div className="absolute bottom-0 z-20 w-full px-5 pb-5 pt-8">
              <div className="mb-3 h-6 w-3/4 rounded bg-gray-400"></div>
              <div className="mb-3 hidden h-4 w-5/6 rounded bg-gray-400 sm:block"></div>
              <div className="h-4 w-1/4 rounded bg-gray-400"></div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full shrink lg:w-1/2">
          <div className="grid grid-cols-2 gap-1">
            {Array(4)
              .fill()
              .map((_, index) => (
                <article key={index} className="w-full">
                  <div className="dark:bg-gray-700 relative h-48 overflow-hidden rounded-lg bg-gray-200">
                    <div className="h-48 w-full bg-gray-300"></div>
                    <div className="absolute bottom-0 z-20 w-full px-4 pb-4 pt-7">
                      <div className="mb-2 h-4 w-3/4 rounded bg-gray-400"></div>
                      <div className="h-3 w-1/2 rounded bg-gray-400"></div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
