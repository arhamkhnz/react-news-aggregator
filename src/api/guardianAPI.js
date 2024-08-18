import axios from "axios"
import { normalizeArticle } from "../utils/articleHelpers"

export const fetchGuardianArticles = async (params = "") => {
  const apiKey = process.env.REACT_APP_GUARDIAN_API_KEY
  const url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=headline,trailText,thumbnail,short-url`

  try {
    const response = await axios.get(url)
    return response.data.response.results.map((article) => normalizeArticle(article, "guardian"))
  } catch (error) {
    throw new Error("Failed to fetch The Guardian articles")
  }
}
