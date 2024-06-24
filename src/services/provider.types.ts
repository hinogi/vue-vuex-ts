import type {
  IArticleService,
  IArticleServiceMock,
} from './article/article.types'

export interface IProvider {
  articles: IArticleService
}

export interface IProviderMock {
  articles: IArticleServiceMock
}
