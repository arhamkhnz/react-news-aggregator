import React, { useState, useContext } from "react"
import { Button } from "@headlessui/react"
import { FilterContext } from "../../context/FilterContext"
import { categories, sources } from "../../constants/filterOptions"
import CustomListbox from "./HeadlessUI/CustomListbox"
import { BookmarkIcon } from "@heroicons/react/24/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function ArticleFilterPanel() {
  const { updateFilter, filters } = useContext(FilterContext)
  const [keyword, setKeyword] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(filters.category)
  const [selectedSource, setSelectedSource] = useState(filters.source)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    // updateFilter("category", category)
  }

  const handleSourceChange = (source) => {
    setSelectedSource(source)
    // updateFilter("source", source)
  }

  const handleSearchChange = (e) => {
    setKeyword(e.target.value)
    updateFilter("keyword", e.target.value)
  }

  const handleSearch = () => {
    updateFilter("keyword", keyword)
    updateFilter("category", selectedCategory)
    updateFilter("source", selectedSource)
  }

  return (
    <div className="py-6">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <div className="relative mb-4 w-full sm:mb-0 sm:w-1/3">
          <input
            name="keyword"
            type="text"
            value={keyword}
            onChange={handleSearchChange}
            placeholder="Search news..."
            className="h-10 w-full rounded-l-md border border-r-0 border-gray-300 px-4 py-2 shadow-sm"
          />
        </div>

        <div className="relative mb-4 w-full sm:mb-0 sm:w-1/4">
          <CustomListbox options={categories} selectedOption={selectedCategory} onChange={handleCategoryChange} />
        </div>

        <div className="relative mb-4 w-full sm:mb-0 sm:w-1/4">
          <CustomListbox options={sources} selectedOption={selectedSource} onChange={handleSourceChange} />
        </div>

        <div className="flex w-full sm:w-1/6">
          <Button
            onClick={handleSearch}
            className="w-full bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
          >
            Search
          </Button>

          <Button onClick={handleSearch} className="w-ful rounded-r-md border border-gray-300 px-2 hover:bg-black/10">
            <BookmarkIcon className="size-5 text-black" />
          </Button>
        </div>
      </div>
    </div>
  )
}
