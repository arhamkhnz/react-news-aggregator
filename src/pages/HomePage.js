import React, { useState, useEffect, Suspense, useContext } from "react"
import ArticleFilterPanel from "../components/UI/ArticleFilterPanel"
import HeroGrid from "../components/UI/HeroGrid"
import FeedCard from "../components/UI/FeedCard"
import ArticleListSidebar from "../components/UI/ArticleListSidebar"
import { searchAndFilterArticles } from "../utils/articleSearch"
import { FilterContext } from "../context/FilterContext"
import HeroGridSkeleton from "../components/UI/skeletons/HeroGridSkeleton"
import FeedCardSkeleton from "../components/UI/skeletons/FeedCardSkeleton"
import ArticleListSidebarSkeleton from "../components/UI/skeletons/ArticleListSidebarSkeleton"
import toast from "react-hot-toast"

export default function HomePage() {
  const { filters } = useContext(FilterContext)
  const [feedData, setFeedData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const results = await searchAndFilterArticles(filters)
        if (results.length > 0) {
          setFeedData(results)
          setLoading(false)
        } else {
          // console.log("Still loading...")
        }
      } catch (error) {
        // console.error("Error fetching articles:", error)
        toast.error(error.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [filters])

  const heroArticles = feedData.slice(0, 5)
  const otherArticles = feedData.slice(5)
  const nyTimesArticles = feedData.slice(0, 5)

  return (
    <>
      <ArticleFilterPanel />

      <Suspense fallback={<HeroGridSkeleton />}>
        {loading ? <HeroGridSkeleton /> : <HeroGrid articles={heroArticles} />}
      </Suspense>

      <div className="mt-10 flex flex-row flex-wrap">
        <div className="w-full lg:w-2/3">
          <div className="w-full py-3 md:px-2">
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="mr-2 inline-block h-5 border border-l-2 border-red-600"></span>
              Top News from the World
            </h2>
          </div>

          <div className="flex flex-row flex-wrap">
            {loading
              ? Array.from({ length: 6 }, (_, index) => <FeedCardSkeleton key={index} />)
              : otherArticles.map((article, index) => <FeedCard key={index} article={article} />)}
          </div>
        </div>

        <Suspense fallback={<ArticleListSidebarSkeleton />}>
          {loading ? (
            <ArticleListSidebarSkeleton />
          ) : (
            <ArticleListSidebar title="Catch up on The New York Times" articles={nyTimesArticles} />
          )}
        </Suspense>
      </div>
    </>
  )
}
