import React, { useState, useContext } from "react"
import { Button } from "@headlessui/react"
import { FilterContext } from "../../context/FilterContext"
import { categories, sources } from "../../constants/filterOptions"
import CustomListbox from "./HeadlessUI/CustomListbox"
import { BookmarkIcon } from "@heroicons/react/24/outline"

export default function ArticleFilterPanel() {
  const { updateFilter, filters, saveUserPreferences } = useContext(FilterContext)
  const [keyword, setKeyword] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(filters.category)
  const [selectedSource, setSelectedSource] = useState(filters.source)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSourceChange = (source) => {
    setSelectedSource(source)
  }

  const handleSearchChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSearch = () => {
    updateFilter("keyword", keyword)
    updateFilter("category", selectedCategory)
    updateFilter("source", selectedSource)
  }

  const handleSavePreferences = () => {
    saveUserPreferences()
  }

  return (
    <div className="py-6 sm:px-4 lg:px-0">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="relative mb-4 w-full md:mb-0 md:w-1/3">
          <input
            name="keyword"
            type="text"
            value={keyword}
            onChange={handleSearchChange}
            placeholder="Search news..."
            className="h-10 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm md:rounded-r-none md:border-r-0"
          />
        </div>

        <div className="relative mb-4 w-full md:mb-0 md:w-1/4">
          <CustomListbox options={categories} selectedOption={selectedCategory} onChange={handleCategoryChange} />
        </div>

        <div className="relative mb-4 w-full md:mb-0 md:w-1/4">
          <CustomListbox options={sources} selectedOption={selectedSource} onChange={handleSourceChange} />
        </div>

        <div className="flex w-full md:w-1/6">
          <Button
            onClick={handleSearch}
            className="w-full rounded-l-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700 md:rounded-none"
          >
            Search
          </Button>

          <Button
            onClick={handleSavePreferences}
            className="rounded-r-md border border-gray-300 px-2 hover:bg-black/10"
          >
            <BookmarkIcon className="size-5 text-black" />
          </Button>
        </div>
      </div>
    </div>
  )
}
