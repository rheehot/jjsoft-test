<template>
  <div class="container">
    <h1 class="main-title">My TodoList</h1>
    <div class="search-box">
      <el-input
        v-model="searchValue"
        placeholder="Search Todos"
        class="search-input"
        @change="SearchTodos"
      />
    </div>
    <el-card class="todo-list-box">
      <div
        v-for="todoItem in todoItems"
        :key="todoItem.id"
        class="text item"
        :class="{ completed: todoItem.completed }"
      >
        <el-checkbox
          v-model="todoItem.completed"
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
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import gql from 'graphql-tag'
import todoDatas from '@/apollo/queries/todoDatas.graphql'

export interface TodoLists {
  id: number
  completed: boolean
  title: string
  content: string
  createAt: number
}

@Component
export default class IndexPage extends Vue {
  // data
  private todoItems: TodoLists[] = []
  private searchValue: String = ''

  @Watch('searchValue')
  SearchTodos(val: string, oldVal: string) {
    if (this.searchValue === '') {
      this.todoItems = JSON.parse(localStorage.getItem('todos')!)
    } else {
      this.todoItems = this.todoItems.filter(items => {
        return items.title
          .toLowerCase()
          .includes(this.searchValue.toLowerCase())
      })
    }
  }

  // beforeMount
  beforeMount() {
    if (!localStorage.getItem('todos')) {
      this.initLoadDatas()
    } else {
      this.todoItems = JSON.parse(localStorage.getItem('todos')!)
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
    }
  }

  // methods
  private initLoadDatas(): void {
    this.$apollo
      .query({
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
        `
      })
      .then(({ data }) => {
        this.todoItems = data.todoDatas as TodoLists[]
        localStorage.setItem('todos', JSON.stringify(data.todoDatas))
      })
  }
  private changeCheck(id): void {
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
  }
  private deleteCheck(id): void {
    const filterItems = this.todoItems.filter(item => item.id !== id)
    this.todoItems = filterItems
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
  }
}
</script>
<style lang="scss">
.container {
  padding-bottom: 100px;
  position: relative;
  width: 100%;
}
.search-box {
  margin-bottom: 32px;
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
  box-sizing: border-box;
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
    &.completed {
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
