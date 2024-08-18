import React, { createContext, useState } from "react"

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(() => {
    const savedFilters = JSON.parse(localStorage.getItem("userPreferences")) || {}
    return {
      keyword: "",
      category: savedFilters.category || "world",
      source: savedFilters.source || "all",
    }
  })

  const updateFilter = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }))
  }

  const saveUserPreferences = (category, source) => {
    const preferencesToSave = { category, source }
    localStorage.setItem("userPreferences", JSON.stringify(preferencesToSave))
  }

  return (
    <FilterContext.Provider value={{ filters, updateFilter, saveUserPreferences }}>{children}</FilterContext.Provider>
  )
}
