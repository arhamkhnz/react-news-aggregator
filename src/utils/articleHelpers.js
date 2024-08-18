export const normalizeArticle = (article, source) => {
  switch (source) {
    case "nytimes":
      return {
        title: article.title || article.headline.main,
        description: article.abstract,
        imageSrc: article.multimedia.length
          ? article.multimedia[0].url.startsWith("https")
            ? article.multimedia[0].url
            : `https://static01.nyt.com/${article.multimedia[0].url}`
          : "/assets/no-image.webp",
        category: article.section_name || "General",
        section: article.section,
        subSection: article.subSection,
        createdAt: article.created_date,
      }
    case "newsapi":
      return {
        title: article.title,
        description: article.description,
        imageSrc: article.urlToImage || "/assets/no-image.webp",
        category: article.source.name || "General",
        createdAt: article.publishedAt,
      }
    case "guardian":
      return {
        title: article.fields.headline,
        description: article.fields.trailText || article.fields.headline,
        imageSrc: article.fields.thumbnail || "/assets/no-image.webp",
        category: article.sectionName || "General",
        section: article.sectionName,
        subSection: article.subSection,
        createdAt: article.webPublicationDate,
      }
    default:
      throw new Error("Unknown source")
  }
}

export const filterRemovedEntries = (articles) => {
  return articles.filter((article) => {
    const { title, description } = article
    return !title.includes("[Removed]") && !description.includes("[Removed]")
  })
}
