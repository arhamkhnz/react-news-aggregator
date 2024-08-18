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

  const updateFilter = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }))
  }

  const saveUserPreferences = () => {
    localStorage.setItem("userPreferences", JSON.stringify(filters))
  }

  return (
    <FilterContext.Provider value={{ filters, updateFilter, saveUserPreferences }}>{children}</FilterContext.Provider>
  )
}
