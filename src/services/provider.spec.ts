import provider from './provider'
import ArticlesService from './article/article'
import { vi, describe, it, expect } from 'vitest'

vi.mock('./articles')
describe('>> Provider', () => {
  it('should instantiate Articles Service', () => {
    provider()
    expect(ArticlesService.prototype.constructor).toBeCalled()
  })
})
