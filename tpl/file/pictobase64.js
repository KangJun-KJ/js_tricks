` vue
  <input type="file"
  @change="change"
  accept="image/gif, image/jpeg, image/jpg, image/png">
`
function change(e) {  
  let file = e.target.files[0]; // 获取文件对象
  let reader = new FileReader(); // 新建一个FileReader对象
  reader.readAsDataURL(file); // 将读取的文件转换成base64格式
  const _this = this;
  reader.onload = function(e) {
    console.log(e.target.result); //转换后的文件数据存储在e.target.result中
  };
}
