import axios from "axios"
import { normalizeArticle } from "../utils/articleHelpers"

export const fetchNYTimesArticles = async (params = "") => {
  const apiKey = process.env.REACT_APP_NY_TIMES_API_KEY
  const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}&${params}`

  try {
    const response = await axios.get(url)
    return response.data.results.map((article) => normalizeArticle(article, "nytimes"))
  } catch (error) {
    throw new Error("Failed to fetch NY Times articles")
  }
}
