import React, { useState, useEffect } from "react"
import NewsFilter from "../components/UI/NewsFilter"
import HeroGrid from "../components/UI/HeroGrid"
import FeedCard from "../components/UI/FeedCard"
import ArticleListSidebar from "../components/UI/ArticleListSidebar"

import { fetchNewsAPIArticles } from "../api/newsAPI"
import { fetchNYTimesArticles } from "../api/nyTimesAPI"
import { fetchGuardianArticles } from "../api/guardianAPI"

import { filterRemovedEntries } from "../utils/articleHelpers"

export default function HomePage() {
  const [feedData, setFeedData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nyTimesData = await fetchNYTimesArticles()
        const guardianData = await fetchGuardianArticles()
        const newsAPIData = await fetchNewsAPIArticles()

        let combinedData = [...nyTimesData, ...guardianData, ...newsAPIData]

        // Filter out '[Removed]' entries
        combinedData = filterRemovedEntries(combinedData)

        // Randomize the combined data
        combinedData = combinedData.sort(() => Math.random() - 0.5)

        setFeedData(combinedData)
      } catch (error) {
        console.error("Error fetching articles:", error)
      }
    }

    fetchData()
  }, [])

  const heroArticles = feedData.slice(0, 5)
  const otherArticles = feedData.slice(5)
  const nyTimesArticles = feedData.slice(0, 5)

  return (
    <>
      {/* <NewsFilter /> */}

      <HeroGrid articles={heroArticles} />

      <div className="mt-10 flex flex-row flex-wrap">
        <div className="w-full lg:w-2/3">
          <div className="w-full py-3 md:px-2">
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="mr-2 inline-block h-5 border border-l-2 border-red-600"></span>
              Top News from the World
            </h2>
          </div>

          <div className="flex flex-row flex-wrap">
            {otherArticles.map((article, index) => (
              <FeedCard key={index} article={article} />
            ))}
          </div>
        </div>

        <ArticleListSidebar title="Catch up on The New York Times" articles={nyTimesArticles} />
      </div>
    </>
  )
}
