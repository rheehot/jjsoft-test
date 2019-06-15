<template>
  <div class="layout-box">
    <nuxt />
  </div>
</template>

<style>
body,
html {
  background: #ee0979;
  background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
  background: linear-gradient(to right, #ff6a00, #ee0979);
}
.layout-box {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 360px;
  width: 100%;
  flex-direction: column;
}
</style>
