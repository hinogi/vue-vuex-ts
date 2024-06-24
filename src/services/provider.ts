import ArticleService from './article/article'
import data from './data.json'
import type { IProvider } from './provider.types'

export default (): IProvider => ({
  articles: new ArticleService(data),
})
