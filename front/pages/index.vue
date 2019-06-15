<template>
  <div class="container">
    <h1 class="main-title">My TodoList</h1>
    <el-card class="todo-list-box">
      <div
        v-for="todoData in todoDatas"
        :key="todoData.id"
        class="text item"
        :class="{ checked: todoData.checked }"
      >
        <el-checkbox v-model="todoData.checked" />
        <nuxt-link class="todo-title" :to="`detail/${todoData.id}`">
          {{ todoData.title }}
        </nuxt-link>
        <i class="el-icon-delete todo-delete-button"></i>
      </div>
    </el-card>
    <nuxt-link to="add" class="add-todo-button">
      <el-button type="primary" icon="el-icon-plus" circle />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

export interface TodoLists {
  id: number
  checked: boolean
  title: string
  content: string
  createAt: string
}

@Component
export default class IndexPage extends Vue {
  // data
  private todoDatas: TodoLists[] = [
    {
      id: 1,
      checked: false,
      title: '바퀴벌레약 설치해놓기',
      content: '여름이 다가왔으니 필수!',
      createAt: '1560577682'
    },
    {
      id: 2,
      checked: true,
      title: '닭가슴살 사기',
      content: '이번 일주일 동안 먹을 고기를 사자!',
      createAt: '1560577728'
    },
    {
      id: 3,
      checked: false,
      title: '수박 사자',
      content: '여름이 다가왔으니 필수!',
      createAt: '1560577682'
    },
    {
      id: 4,
      checked: false,
      title: '선물 사기',
      content: '선물 사자',
      createAt: '1560577682'
    }
  ]
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
  bottom: -50px;
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
