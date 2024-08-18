import { fetchNYTimesArticles } from "../api/nyTimesAPI"
import { fetchGuardianArticles } from "../api/guardianAPI"

export const searchAndFilterArticles = async (filters) => {
  let results = []
  if (filters.source === "all") {
    const nyTimesData = await fetchNYTimesArticles(filters)
    const guardianData = await fetchGuardianArticles(filters)
    results = [...nyTimesData, ...guardianData]
  } else {
    switch (filters.source) {
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
