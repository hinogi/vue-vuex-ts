import { IProviderMock } from './provider.types'
import mockArticleService from './article/article.mock'

export default (): IProviderMock => ({
  articles: mockArticleService(),
})
