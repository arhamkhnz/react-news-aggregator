import React, { useState } from "react"
import { Menu, Input, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
import { ChevronDownIcon, EllipsisVerticalIcon } from "@heroicons/react/16/solid"
import TransitionWrapper from "./TransitionWrapper"

const categories = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology"]
const sources = ["News API", "The Guardian", "New York Times"]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function NewsFilter({ onSearch, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSource, setSelectedSource] = useState("")
  const [keyword, setKeyword] = useState("")

  const handleSearch = () => {
    onSearch(keyword, selectedCategory, selectedSource)
  }

  return (
    <div className="py-6">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div className="relative mb-4 w-full sm:mb-0 sm:w-1/3">
          <Input
            name="keyword"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search news..."
            className="h-10 w-full rounded-l-md border border-r-0 border-gray-300 px-4 py-2 shadow-sm "
            data-hover
          />
        </div>

        <div className="relative mb-4 w-full sm:mb-0 sm:w-1/4">
          <Menu as="div" className="relative inline-block w-full text-left">
            <div>
              <MenuButton className="inline-flex  h-10 w-full justify-between border border-r-0 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 ">
                {selectedCategory || "Select Category"}
                <ChevronDownIcon className="-mr-1 ml-2 size-5" aria-hidden="true" />
              </MenuButton>
            </div>
            <TransitionWrapper>
              <MenuItems className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black/5">
                <div className="py-1">
                  {categories.map((category) => (
                    <MenuItem key={category}>
                      {({ active }) => (
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm w-full text-left",
                          )}
                        >
                          {category}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </TransitionWrapper>
          </Menu>
        </div>

        <div className="relative mb-4 w-full sm:mb-0 sm:w-1/4">
          <Menu as="div" className="relative inline-block w-full text-left">
            <div>
              <MenuButton className="inline-flex h-10 w-full justify-between border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                {selectedSource || "Select Source"}
                <ChevronDownIcon className="-mr-1 ml-2 size-5" aria-hidden="true" />
              </MenuButton>
            </div>
            <TransitionWrapper>
              <MenuItems className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black/5">
                <div className="py-1">
                  {sources.map((source) => (
                    <MenuItem key={source}>
                      {({ active }) => (
                        <button
                          onClick={() => setSelectedSource(source)}
                          className={classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm w-full text-left",
                          )}
                        >
                          {source}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </TransitionWrapper>
          </Menu>
        </div>

        <div className="relative w-full sm:w-1/6">
          <button
            onClick={handleSearch}
            className="w-full bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Search
          </button>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex h-10 w-full justify-between rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 ">
              <EllipsisVerticalIcon className="size-5" aria-hidden="true" />
            </MenuButton>
          </div>
          <TransitionWrapper>
            <MenuItems className="absolute z-10 mt-2 w-24 rounded-md bg-white shadow-lg ring-1 ring-black/5">
              <div className="py-1">
                {sources.map((source) => (
                  <MenuItem key={source}>
                    {({ active }) => (
                      <button
                        onClick={() => setSelectedSource(source)}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm w-full text-left",
                        )}
                      >
                        {source}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </TransitionWrapper>
        </Menu>
      </div>
    </div>
  )
}
