import axios from "axios"
import { normalizeArticle } from "../utils/articleHelpers"

export const fetchNewsAPIArticles = async (filters = {}) => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const { category = "", keyword = "" } = filters
  const baseUrl = "https://newsapi.org/v2/"

  const endpoint = keyword ? `everything?q=${encodeURIComponent(keyword)}` : `top-headlines?category=${category}`

  const url = `${baseUrl}${endpoint}&apiKey=${apiKey}&language=en&pageSize=25`
  try {
    const response = await axios.get(url)
    return response.data.articles.map((article) => normalizeArticle(article, "newsapi"))
  } catch (error) {
    throw new Error("Failed to fetch NewsAPI articles")
  }
}
