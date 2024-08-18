import React from "react"

export default function HeroGrid({ articles = [] }) {
  const [mainArticle, ...subArticles] = articles
  return (
    <div className="mx-auto xl:container sm:px-4 lg:px-0">
      <div className="flex flex-row flex-wrap">
        {/* Main Article */}
        <div className="w-full max-w-full shrink pb-1 lg:w-1/2 lg:pb-0 lg:pr-1">
          <div className="relative h-96 overflow-hidden">
            <a className="overlay-dark" href={mainArticle.url} target="_blank" rel="noreferrer">
              <img className="size-full object-cover" src={mainArticle?.imageSrc} alt={mainArticle?.title} />
            </a>
            <div className="absolute bottom-0 z-20 w-full px-5 pb-5 pt-8">
              <a href={mainArticle.url} target="_blank" rel="noreferrer">
                <h2 className="mb-3 text-3xl font-bold capitalize text-white">{mainArticle?.title}</h2>
              </a>
              <p className="hidden text-gray-100 sm:inline-block">{mainArticle?.description}</p>
              <div className="pt-2">
                <div className="text-gray-100">
                  <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>
                  {mainArticle?.category}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Articles */}
        <div className="w-full max-w-full shrink lg:w-1/2">
          <div className="grid h-96 grid-cols-2 gap-1">
            {subArticles?.map((article, index) => (
              <article key={index} className="relative flex h-full flex-col overflow-hidden bg-gray-200">
                <a href={article.url} target="_blank" rel="noreferrer" className="h-full overlay-dark">
                  <img className="size-full object-cover" src={article.imageSrc} alt={article.title} />
                  <div className="absolute bottom-0 z-20 w-full px-4 pb-4 pt-7 text-white">
                    <h2 className="text-sm font-bold md:text-base">{article.title}</h2>
                    <div className="text-gray-100">
                      <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>
                      {article?.category}
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
