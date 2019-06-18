<template>
  <div class="container add-container">
    <h1 class="main-title">
      <nuxt-link to="/" class="back-button">
        <i class="el-icon-arrow-left"></i>
      </nuxt-link>
      Add Todo
    </h1>
    <el-card>
      <div class="text item todo-title-input-box">
        <p class="sub-title-text">Todo Title</p>
        <el-input
          v-model="inputTitle"
          type="text"
          placeholder="Please input todo title"
        />
      </div>
      <div class="text item">
        <p class="sub-title-text">Todo Content</p>
        <el-input
          v-model="inputContent"
          type="textarea"
          placeholder="Please input todo content"
        />
      </div>
    </el-card>
    <el-button type="primary" plain class="add-button" @click="addItem">
      Add
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
  private todoItems: TodoLists[] = []

  // beforeMount
  beforeMount() {
    this.todoItems = JSON.parse(localStorage.getItem('todos')!)
  }

  // methods
  private addItem(): void {
    const currentTime = Math.floor(new Date().getTime() / 1000)
    const currentId = this.todoItems[this.todoItems.length - 1].id + 1
    const item: TodoItem = {
      id: currentId,
      completed: false,
      title: this.inputTitle,
      content: this.inputContent,
      createAt: currentTime,
      __typename: 'Todo'
    }
    this.todoItems.push(item)
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
      message: '추가되었습니다.',
      type: 'success'
    })
    this.inputTitle = ''
    this.inputContent = ''
  }
}
</script>

<style lang="scss">
.main-title {
  margin-top: 32px;
  color: #fff;
  a {
    color: #fff;
  }
}
.add-container {
  p {
    text-align: left;
  }
}
.add-button {
  margin-top: 16px;
  float: right;
}
</style>
