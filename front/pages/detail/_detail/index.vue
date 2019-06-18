<template>
  <div class="container">
    <h1 class="main-title">
      <nuxt-link to="/" class="back-button"
        ><i class="el-icon-arrow-left"></i
      ></nuxt-link>
      Todo Detail
    </h1>
    <el-card :body-style="{ padding: '0px' }" class="detail-content-box">
      <div class="text item title-item">
        {{ todoTitle }}
      </div>
      <div class="text item content-item">
        {{ todoContent }}
      </div>
    </el-card>
    <nuxt-link
      v-if="!todoCompleted"
      :to="`/detail/${todoId}/edit`"
      class="edit-link-button"
    >
      <el-button type="primary" plain>Edit</el-button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Route } from 'vue-router'

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
export default class DetailPage extends Vue {
  // data
  private todoId: number = 0
  private todoTitle: string = ''
  private todoContent: string = ''
  private todoCompleted: boolean = false
  // beforeMount
  beforeMount() {
    this.todoId = Number(this.$route.params.detail)
    const todoItems: TodoLists[] = JSON.parse(localStorage.getItem('todos')!)
    const todoItem: TodoItem | undefined = todoItems.find(item => {
      return item.id === this.todoId
    })
    if (todoItem) {
      this.todoTitle = todoItem.title
      this.todoContent = todoItem.content
      this.todoCompleted = todoItem.completed
    }
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
}
.main-title {
  margin-top: 32px;
  color: #fff;
  a {
    color: #fff;
  }
}
.detail-content-box {
  width: 100%;
  .item {
    padding: 16px;
    text-align: left;
    &:first-child {
      border-bottom: 1px solid #eee;
    }
  }
}
.back-button {
  float: left;
}
.edit-link-button {
  margin-top: 16px;
  float: right;
}
.title-item {
  font-weight: bold;
  font-size: 18px;
}
.content-item {
  font-size: 14px;
}
</style>
