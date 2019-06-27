<template>
  <div>
    <button @click="random">随机数字</button>
    <label for="">随机数组长度：</label>
    <input v-model="count"
           type="number"
           placeholder="数量">
    <p>
      点击上面的按钮随机出来数字：{{value}}
    </p>
  </div>
</template>

<script>
const random = (count = 1) =>
  Array.from({ length: 100 }, (v, i) => i + 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
export default {
  name: "random",
  data() {
    return {
      value: "",
      count: 1
    };
  },
  methods: {
    random() {
      this.value = random(this.count);
    }
  }
};
</script>

