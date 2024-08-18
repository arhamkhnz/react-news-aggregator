import axios from "axios"
import normalizeArticle from "../utils/normalizeArticle"

export const fetchNewsAPIArticles = async (params = "") => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const url = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=world`

  try {
    const response = await axios.get(url)
    return response.data.articles.map((article) => normalizeArticle(article, "newsapi"))
  } catch (error) {
    throw new Error("Failed to fetch NewsAPI articles")
  }
}
