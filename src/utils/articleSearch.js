import { fetchNYTimesArticles } from "../api/nyTimesAPI"
import { fetchGuardianArticles } from "../api/guardianAPI"
import { fetchNewsAPIArticles } from "../api/newsAPI"

export const searchAndFilterArticles = async (filters) => {
  let results = []
  if (filters.source === "all") {
    // Query all sources
    const nyTimesData = await fetchNYTimesArticles()
    const guardianData = await fetchGuardianArticles()
    const newsAPIData = await fetchNewsAPIArticles()
    results = [...nyTimesData, ...guardianData, ...newsAPIData]
    console.log(results)
  } else {
    // Query single source based on filter
    switch (filters.source) {
      case "News API":
        results = await fetchNewsAPIArticles(filters)
        break
      case "The Guardian":
        results = await fetchGuardianArticles(filters)
        break
      case "New York Times":
        results = await fetchNYTimesArticles(filters)
        break
      default:
        break
    }
  }

  // Optionally filter results further by category or keyword
  if (filters.category) {
    results = results.filter((article) => article.category === filters.category)
  }

  if (filters.keyword) {
    results = results.filter((article) => article.title.includes(filters.keyword))
  }

  return results
}
