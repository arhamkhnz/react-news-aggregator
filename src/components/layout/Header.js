import React from "react";
import { NewspaperIcon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap h-16 items-center justify-between mx-auto p-4 md:p-0">
        <a href="/" className="flex items-center space-x-1">
          <NewspaperIcon className="size-6 text-white" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            News Aggregator
          </span>
        </a>
      </div>
    </nav>
  );
}
