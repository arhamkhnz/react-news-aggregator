import React, { useState, useEffect } from "react"
import FeedCard from "../components/UI/FeedCard"
import NewsFilter from "../components/UI/NewsFilter"
import { fetchNewsAPIArticles } from "../api/newsAPI"
import { fetchNYTimesArticles } from "../api/nyTimesAPI"
import { fetchGuardianArticles } from "../api/guardianAPI"

export default function HomePage() {
  const [feedData, setFeedData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nyTimesData = await fetchNYTimesArticles()
        const guardianData = await fetchGuardianArticles()
        const newsAPIData = await fetchNewsAPIArticles()

        const combinedData = [...nyTimesData, ...guardianData, ...newsAPIData]

        setFeedData(combinedData)
      } catch (error) {
        console.error("Error fetching articles:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {/* <NewsFilter /> */}
      <div className="flex flex-row flex-wrap">
        <div className="w-full lg:w-2/3">
          <div className="w-full py-3">
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="mr-2 inline-block h-5 border border-l-2 border-red-600"></span>
              Top News from the World
            </h2>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-full max-w-full shrink px-3 pb-5">
              <div className="relative max-h-96 overflow-hidden">
                <a href="#">
                  <img
                    className="mx-auto h-auto w-full max-w-full"
                    src="https://static01.nyt.com/images/2024/08/17/multimedia/17ukraine-pows-promo/17ukraine-pows-01-bjlm-superJumbo.jpg"
                    alt="Image description"
                  />
                </a>
                <div className="absolute bottom-0 w-full px-5 pb-5 pt-8">
                  <a href="#">
                    <h2 className="mb-3 text-3xl font-bold capitalize text-white">
                      Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
                    </h2>
                  </a>
                  <p className="hidden text-gray-100 sm:inline-block">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    very helpfull for generate default content..
                  </p>

                  <div className="pt-2">
                    <div className="text-gray-100">
                      <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>
                      Europe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {feedData.map((item, index) => (
              <FeedCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            ))}
          </div>
        </div>

        <div className="order-first w-full max-w-full shrink lg:order-last lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14">
          <div className="w-full bg-white">
            <div className="mb-6">
              <div className="bg-gray-100 p-4">
                <h2 className="text-lg font-bold">Most Popular</h2>
              </div>
              <ul>
                <li className="border-b border-gray-100 hover:bg-gray-50">
                  <a className="flex flex-row items-center px-6 py-3 text-lg font-bold" href="#">
                    Why the world would end without political polls
                  </a>
                </li>
                <li className="border-b border-gray-100 hover:bg-gray-50">
                  <a className="flex flex-row items-center px-6 py-3 text-lg font-bold" href="#">
                    Meet The Man Who Designed The Ducati Monster
                  </a>
                </li>
                <li className="border-b border-gray-100 hover:bg-gray-50">
                  <a className="flex flex-row items-center px-6 py-3 text-lg font-bold" href="#">
                    2020 Audi R8 Spyder spy shots release
                  </a>
                </li>
                <li className="border-b border-gray-100 hover:bg-gray-50">
                  <a className="flex flex-row items-center px-6 py-3 text-lg font-bold" href="#">
                    Lamborghini makes Huracán GT3 racer faster for 2019
                  </a>
                </li>
                <li className="border-b border-gray-100 hover:bg-gray-50">
                  <a className="flex flex-row items-center px-6 py-3 text-lg font-bold" href="#">
                    ZF plans $14 billion autonomous vehicle push, concept van
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
