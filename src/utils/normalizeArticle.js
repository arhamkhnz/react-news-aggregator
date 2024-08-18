const normalizeArticle = (article, source) => {
  switch (source) {
    case "nytimes":
      return {
        title: article.title,
        description: article.abstract,
        imageSrc: article.multimedia.length ? article.multimedia[0].url : "default-image-url",
        category: article.section_name || "General",
        section: article.section,
        subSection: article.subSection,
        createdAt: article.created_date,
      }
    case "newsapi":
      return {
        title: article.title,
        description: article.description,
        imageSrc: article.urlToImage || "default-image-url",
        category: article.source.name || "General",
        createdAt: article.publishedAt,
      }
    case "guardian":
      return {
        title: article.fields.headline,
        description: article.fields.trailText || article.fields.headline,
        imageSrc: article.fields.thumbnail || "default-image-url",
        category: article.sectionName || "General",
        section: article.sectionName,
        subSection: article.subSection,
        createdAt: article.webPublicationDate,
      }
    default:
      throw new Error("Unknown source")
  }
}

export default normalizeArticle
