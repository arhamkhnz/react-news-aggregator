import axios from "axios"
import { normalizeArticle } from "../utils/articleHelpers"

export const fetchGuardianArticles = async (filters = {}) => {
  const apiKey = process.env.REACT_APP_GUARDIAN_API_KEY
  const { category = "", keyword = "" } = filters
  const baseUrl = "https://content.guardianapis.com/search"

  const queryEndpoint = keyword ? `&q=${keyword}` : `&section=${category}`

  const url = `${baseUrl}?api-key=${apiKey}&show-fields=headline,trailText,thumbnail,short-url${queryEndpoint}`
  try {
    const response = await axios.get(url)
    return response.data.response.results.map((article) => normalizeArticle(article, "guardian"))
  } catch (error) {
    throw new Error("Failed to fetch The Guardian articles")
  }
}
