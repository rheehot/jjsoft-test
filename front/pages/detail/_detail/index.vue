<template>
  <div class="container">
    <h1 class="main-title">
      <nuxt-link to="/" class="back-button"
        ><i class="el-icon-arrow-left"></i
      ></nuxt-link>
      Todo Detail
    </h1>
    <el-card :body-style="{ padding: '0px' }" class="detail-content-box">
      <div class="text item">
        Todo Title 1
      </div>
      <div class="text item">
        Todo Content 1
      </div>
    </el-card>
    <nuxt-link :to="`/detail/${todoId}/edit`" class="edit-link-button">
      <el-button type="primary" plain>Edit</el-button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Route } from 'vue-router'

@Component
export default class DetailPage extends Vue {
  // data
  private todoId: number = 0
  // created
  created() {
    this.todoId = Number(this.$route.params.detail)
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
</style>
