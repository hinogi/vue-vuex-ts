import type { IArticle, IArticleData } from '@/entities/article/article.types'
import type { ICommentData } from '@/entities/comment/comment.types'
import type { Mock } from 'vitest'

export interface IArticleService {
  getAll(): IArticleData[]
  getOneById(id: number): IArticle | undefined
  createComment(id: number, data: ICommentData): IArticle
}

export interface IArticleServiceMock {
  getAll: Mock<IArticleData[]>
  getOneById: Mock<IArticle[], unknown>
  createComment: Mock<IArticle[], unknown>
}
