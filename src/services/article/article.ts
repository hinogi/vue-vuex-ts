import type { IArticle, IArticleData } from '@/entities/article/article.types'
import Article from '@/entities/article/article'
import type { ICommentData } from '@/entities/comment/comment.types'
import Comment from '@/entities/comment/comment'
import { IArticleService } from './article.types'

export default class ArticleService implements IArticleService {
  constructor(private readonly data: IArticleData[]) {}

  getAll(): IArticleData[] {
    return this.data
  }

  getOneById(id: number): IArticle | undefined {
    const data = this.data.find((article) => article.id === id)
    if (!data) {
      return
    }
    return new Article(data)
  }

  createComment(articleId: number, commentData: ICommentData): IArticle {
    const article = this.getOneById(articleId)
    if (!article) {
      throw new Error('Article doesn\'t exist in DB!')
    }

    const comment = new Comment(commentData)
    if (!comment.validate()) {
      throw new Error('Comment data is not valid')
    }

    article.comments.push(comment)

    return article
  }
}
