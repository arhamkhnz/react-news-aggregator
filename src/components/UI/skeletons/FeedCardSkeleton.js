import React from "react"

export default function FeedCardSkeleton() {
  return (
    <div className="w-full max-w-full shrink animate-pulse p-3 sm:w-1/3 sm:pt-0">
      <div className="flex flex-col sm:block">
        <div className="mx-auto h-52 w-full max-w-full bg-gray-300"></div>
        <div className="py-3 sm:py-3">
          <div className="mb-2 h-6 w-3/4 rounded bg-gray-300"></div>
          <div className="mb-1 h-4 w-full rounded bg-gray-300"></div>
          <div className="h-4 w-1/2 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  )
}
