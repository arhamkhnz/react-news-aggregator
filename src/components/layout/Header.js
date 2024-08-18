import React from "react"
import { NewspaperIcon } from "@heroicons/react/16/solid"

export default function Header() {
  return (
    <nav className="bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl flex-wrap items-center justify-between p-4 lg:p-0">
        <a href="/" className="flex items-center space-x-1">
          <NewspaperIcon className="size-6 text-white" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">News Aggregator</span>
        </a>
      </div>
    </nav>
  )
}
