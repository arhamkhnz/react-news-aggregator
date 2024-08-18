import React, { createContext, useState, useEffect } from "react"

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "world",
    source: "all",
  })

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("userPreferences"))
    if (savedFilters) {
      setFilters(savedFilters)
    }
  }, [])

  const updateFilter = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value,
    }
    setFilters(newFilters)

    localStorage.setItem("userPreferences", JSON.stringify(newFilters))
  }

  return <FilterContext.Provider value={{ filters, updateFilter }}>{children}</FilterContext.Provider>
}
