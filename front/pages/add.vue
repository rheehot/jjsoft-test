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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AddPage extends Vue {
  // data
  private inputTitle: string = ''
  private inputContent: string = ''
}
</script>

<style lang="scss">
.add-container {
  p {
    text-align: left;
  }
}
</style>
