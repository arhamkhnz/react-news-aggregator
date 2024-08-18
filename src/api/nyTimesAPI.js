import axios from "axios"
import { normalizeArticle } from "../utils/articleHelpers"

export const fetchNYTimesArticles = async (filters = {}) => {
  const apiKey = process.env.REACT_APP_NY_TIMES_API_KEY
  const { category = "", keyword = "" } = filters
  const baseUrl = "https://api.nytimes.com/svc/"

  const endpoint = keyword ? `search/v2/articlesearch.json?q=${keyword}&` : `topstories/v2/${category}.json?`

  const url = `${baseUrl}${endpoint}api-key=${apiKey}`
  try {
    const response = await axios.get(url)
    const articles = keyword ? response.data.response.docs : response.data.results
    return articles.map((article) => normalizeArticle(article, "nytimes"))
  } catch (error) {
    throw new Error("Failed to fetch NY Times articles")
  }
}
