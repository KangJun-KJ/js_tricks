<template>
  <div>
    <p @click="fullscreen">
      点击我 有惊喜
    </p>
  </div>
</template>

<script>
export default {
  name: "fullScreen",
  mounted() {
    document.addEventListener("fullscreenchange", function() {
      if (document.fullscreenElement) {
        console.log(
          `Element: ${document.fullscreenElement.id} entered full-screen mode.`
        );
      } else {
        console.log("Leaving full-screen mode.");
      }
    });
  },
  methods: {
    setFullScreen(target) {
      if (target.requestFullscreen) {
        target.requestFullscreen();
      }
      if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
      }
      if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen();
      }
      if (target.msRequestFullscreen) {
        target.msRequestFullscreen();
      }
    },
    fullscreen(e) {
      this.setFullScreen(e.currentTarget);
    }
  }
};
</script>

<style scoped>
p:-webkit-full-screen {
  width: 100%;
  height: 100%;
}
p {
  cursor: pointer;
  background-color: aqua;
  border-radius: 3px;
  line-height: 40px;
  text-align: center;
}
</style>
