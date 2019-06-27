<template>
  <div>
    <p class='resultText'>示例：</p>
    <div class="box">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "demo"
};
</script>
<style>
.resultText {
  line-height: 1.6em;
  margin: 1.2em 0 -1.2em;
  padding-bottom: 1.2em;
  position: relative;
  z-index: 1;
}
.box {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 25px 35px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>

