import React, {useState} from "react"
import FeedCard from "../components/UI/FeedCard"
import NewsFilter from "../components/UI/NewsFilter"

export default function HomePage() {
  const [feedData, setFeedData] = useState([])
  return (
    <>
    <NewsFilter />
      <div className="flex flex-row flex-wrap">
        <div className="w-full lg:w-2/3">
          <div className="w-full py-3">
            <h2 className="text-2xl font-bold text-gray-800">
              <span className="border-l-3 mr-2 inline-block h-5 border border-red-600"></span>
              Asian
            </h2>
          </div>
          <div className="flex flex-row flex-wrap">
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

        <div className="order-first w-full lg:order-last lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14">
          <div className="w-full bg-white">
            <div className="mb-6">
              <div className="bg-gray-100 p-4">
                <h2 className="text-lg font-bold">Most Popular</h2>
              </div>
              <ul className="post-number">
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
