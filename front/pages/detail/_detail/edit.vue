<template>
  <div class="container add-container">
    <h1 class="main-title">
      <nuxt-link :to="`/detail/${todoId}`" class="back-button">
        <i class="el-icon-arrow-left"></i>
      </nuxt-link>
      Edit Todo
    </h1>
    <el-card>
      <div class="text item todo-title-input-box">
        <p class="sub-title-text">Todo Title</p>
        <el-input v-model="inputTitle" type="text" />
      </div>
      <div class="text item">
        <p class="sub-title-text">Todo Content</p>
        <el-input v-model="inputContent" type="textarea" />
      </div>
    </el-card>
    <el-button type="primary" plain class="save-button" @click="saveItem">
      Save
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import gql from 'graphql-tag'

export interface TodoLists {
  id: number
  completed: boolean
  title: string
  content: string
  createAt: number
}

export interface TodoItem {
  id: number
  completed: boolean
  title: string
  content: string
  createAt: number
}

@Component
export default class AddPage extends Vue {
  // data
  private inputTitle: string = ''
  private inputContent: string = ''
  private todoId: number = 0
  private todoItems: TodoLists[] = []

  // beforeMount
  beforeMount() {
    this.todoId = Number(this.$route.params.detail)
    this.todoItems = JSON.parse(localStorage.getItem('todos')!)
    const todoItem: TodoItem | undefined = this.todoItems.find(item => {
      return item.id === this.todoId
    })
    if (todoItem) {
      this.inputTitle = todoItem.title
      this.inputContent = todoItem.content
    }
  }

  // methods
  private saveItem(): void {
    this.todoItems[this.todoId].title = this.inputTitle
    this.todoItems[this.todoId].content = this.inputContent
    this.$apollo.provider.defaultClient.writeQuery({
      query: gql`
        query todoDatas {
          todoDatas {
            id
            completed
            title
            content
            createAt
          }
        }
      `,
      data: {
        todoDatas: this.todoItems
      }
    })
    localStorage.setItem('todos', JSON.stringify(this.todoItems))
    this.$message({
      message: '수정되었습니다.',
      type: 'success'
    })
  }
}
</script>

<style lang="scss">
.add-container {
  p {
    text-align: left;
  }
}
.save-button {
  margin-top: 16px;
  float: right;
}
</style>
