<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
main.el-main {
  padding: 0;
}

#app {
  .el-dialog__wrapper {
    .el-dialog {
      width: 600px;
      border-radius: 20px;
    }
  }
}
.el-tooltip__popper {
  font-size: 16px !important;
  color: pink;
}

// .el-tooltip__popper .popper__arrow {
//   font-size: 16px !important;
// }
@media screen and (max-width: 767px) {
  #app {
    .el-dialog__wrapper {
      .el-dialog {
        width: 300px;
        border-radius: 10px;
      }
    }
  }
  .el-tooltip__popper {
    font-size: 5px !important;
    color: pink;
  }
}
</style>
