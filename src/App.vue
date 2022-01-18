<template>
  <div id="app">
    <div class="d1"></div>
    <div class="d2"></div>
    <div class="d3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    dianji() {
      this.arr.reverse()
      console.log(this.arr)
    },
    yichu() {
      this.arr.splice(1, 1)
    },
  },
}
</script>
<style>
.d1 {
  background-color: red;
  position: absolute;
  top: 5vh;
}
.d2 {
  background-color: pink;
  position: absolute;
  height: 90vh;
}
.d3 {
  background-color: black;
  position: absolute;
}
</style>
