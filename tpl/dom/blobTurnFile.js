// 传进来的名字
function blobTurnFile(url, name) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true); // 也可以使用POST方式，根据接口
  xhr.responseType = "blob"; // 返回类型blob
  xhr.onload = function() {
    // 请求完成
    if (this.status == 200) {
      // 返回200
      var blob = this.response;
      var reader = new FileReader();
      reader.readAsDataURL(blob); // 转换为base64，可以直接放入a标签
      reader.onload = function(e) {
        // 转换完成，创建一个a标签用于下载
        var a = document.createElement("a");
        a.download = name;
        a.href = e.target.result;
        a.click();
      };
    }
  };
  // 发送ajax请求
  xhr.send();
}
