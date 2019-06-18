import { expect } from 'chai'
import IndexPage from '../../pages/index.vue'

describe('Todo Test', () => {
  it('Todo test', () => {
    expect(IndexPage.todoItems).to.have.lengthOf(20)
  })
})
