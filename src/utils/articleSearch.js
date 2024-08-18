import { fetchNYTimesArticles } from "../api/nyTimesAPI"
import { fetchGuardianArticles } from "../api/guardianAPI"
import { fetchNewsAPIArticles } from "../api/newsAPI"

export const searchAndFilterArticles = async (filters) => {
  let results = []
  if (filters.source === "all") {
    const nyTimesData = await fetchNYTimesArticles(filters)
    const guardianData = await fetchGuardianArticles(filters)
    const newsAPIData = await fetchNewsAPIArticles(filters)
    results = [...nyTimesData, ...guardianData, ...newsAPIData]
  } else {
    switch (filters.source) {
      case "newsapi":
        results = await fetchNewsAPIArticles(filters)
        break
      case "guardian":
        results = await fetchGuardianArticles(filters)
        break
      case "nytimes":
        results = await fetchNYTimesArticles(filters)
        break
      default:
        break
    }
  }

  if (results.length === 0) {
    throw new Error("No articles found for the selected filters. Displaying the most recent available articles.")
  }

  return results
}
