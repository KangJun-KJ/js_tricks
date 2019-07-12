<template>
  <div>
    <input type="file"
           @change="change"
           accept="image/gif, image/jpeg, image/jpg, image/png">
    <textarea name=""
              style="width:100%;margin-top:20px;"
              v-model="baseText"
              id=""
              cols="30"
              rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name: "filetobase64",
  data() {
    return {
      baseText: ""
    };
  },
  methods: {
    change(e) {
      let file = e.target.files[0];
      let reader = new FileReader(); //新建一个FileReader对象
      reader.readAsDataURL(file); //将读取的文件转换成base64格式
      const _this = this;
      reader.onload = function(e) {
        // console.log(e.target.result); //转换后的文件数据存储在e.target.result中
        _this.baseText = e.target.result;
      };
    }
  }
};
</script>

<style>
</style>


