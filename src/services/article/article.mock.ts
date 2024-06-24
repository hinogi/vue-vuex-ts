import { IArticle } from '@/entities/article/article.types'
import type { IArticleServiceMock } from './article.types'
import { vi } from 'vitest'

export default (): IArticleServiceMock => ({
  getAll: vi.fn(),
  getOneById: vi.fn().mockReturnValue({} as IArticle),
  createComment: vi.fn().mockReturnValue({} as IArticle),
})
