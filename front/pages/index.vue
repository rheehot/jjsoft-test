<template>
  <div class="container">
    <h1 class="main-title">My TodoList</h1>
    <el-card class="todo-list-box">
      <div
        v-for="todoItem in todoItems"
        :key="todoItem.id"
        class="text item"
        :class="{ checked: todoItem.checked }"
      >
        <el-checkbox
          v-model="todoItem.checked"
          @change="changeCheck(todoItem.id)"
        />
        <nuxt-link class="todo-title" :to="`detail/${todoItem.id}`">
          {{ todoItem.title }}
        </nuxt-link>
        <i
          class="el-icon-delete todo-delete-button"
          @click="deleteCheck(todoItem.id)"
        />
      </div>
    </el-card>
    <nuxt-link to="add" class="add-todo-button">
      <el-button type="primary" icon="el-icon-plus" circle />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import axios from '@/plugins/axios'
import { Vue, Component } from 'nuxt-property-decorator'
import todoDatas from '@/apollo/queries/todoDatas.graphql'

export interface TodoLists {
  id: number
  checked: boolean
  title: string
  content: string
  createAt: string
}

export interface TodoItem {
  id: number
  checked: boolean
  title: string
  content: string
  createAt: string
}

@Component({
  apollo: {
    todoDatas: () => todoDatas
  }
})
export default class IndexPage extends Vue {
  // data
  private todoDatas: TodoItem[] = []
  private todoItems: TodoLists[] = []

  // beforeMount
  beforeMount() {
    !localStorage.getItem('todos')
      ? this.initLoadDatas()
      : (this.todoItems = JSON.parse(localStorage.getItem('todos')!))
  }
  // methods
  private initLoadDatas(): void {
    this.todoItems = this.todoDatas as TodoLists[]
    localStorage.setItem('todos', JSON.stringify(this.todoDatas))
  }
  private changeCheck(id): void {
    const findItem = this.todoItems[id]
    this.todoItems[id] = findItem
    localStorage.setItem('todos', JSON.stringify(this.todoItems))
  }
  private deleteCheck(id): void {
    const filterItems = this.todoItems.filter(item => item.id !== id)
    this.todoItems = filterItems
    localStorage.setItem('todos', JSON.stringify(this.todoItems))
  }
}
</script>
<style lang="scss">
.container {
  padding-bottom: 100px;
  position: relative;
  width: 100%;
}
.main-title {
  margin-top: 32px;
  color: #fff;
}
.todo-title {
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  width: calc(100% - 55px);
  text-decoration: none;
  color: #606266;
}
.todo-list-box {
  width: 100%;
  .el-card__body .item {
    text-align: left;
    padding: 0 8px;
    box-sizing: border-box;
    height: 42px;
    line-height: 42px;
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    font-size: 14px;
    &:first-child {
      margin-top: 0;
    }
    &.checked {
      border-color: #409eff;
      .todo-title {
        text-decoration: line-through;
        border-color: #409eff;
        color: #409eff;
      }
    }
  }
  label {
    width: 100%;
    text-align: left;
  }
  .el-checkbox {
    margin: 0;
    width: 20px;
    display: inline-block;
    vertical-align: middle;
  }
  .el-checkbox__label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    vertical-align: middle;
  }
}
.add-todo-button {
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 50px;
  right: 0;
  button {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
}
.todo-delete-button {
  float: right;
  cursor: pointer;
  margin-top: 6px;
  padding: 8px;
}
</style>
