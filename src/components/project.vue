<template>
    <div id="project">
      <div class="container">
        <span class="tip">WHAT I DO</span>
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <div class="projectBox">
          <div class="projectImage">
            <img src="../assets/web1.jpg" alt="项目1">
          </div>

          <div class="projectContent">
              <p class="projectName"><b>娴余小程序</b></p>
              <p class="projectName"><b>项目描述：</b>娴余是一个微信小程序，为了让闲置物品得到更好的利用，于是利用自己所学的知识开发了这个小程序。技术
          要求包括获取用户信息、实现页面跳转、页面刷新和继续加载、轮播图、横竖向滚动等</p>
              <p class="projectName"><b>实现技术：</b>微信小程序</p>
              <div class="projectName">
              <p><b>难点与解决：</b></p>
              <p>①获取微信用户信息，使用wx.getUserInfo()</p> 
<p>②使用scroll-view的bindscrolltolower和bindscrolltoupper属性给本地fake数据实现刷新和继续加载效果</p>
<p>③横向滚动直接使用scroll-x属性并不能实现，父元素需要使用white-space属性且子元素使用display属性</p>
              </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      title: "我的作品"
    };
  }
};
</script>

<style>
#project {
  width: 100%;
  height: 710px;
  background-color: #f5f5f5;
  background-size: cover;
  text-align: center;
}

.container {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4% 0;
}

.tip {
  display: inline-block;
  position: relative;
  padding: 6px 20px;
  margin: 0 auto 10px;
  font-size: 20px;
  background: #32CD32;
  color: #fff;
}
.tip:after {
  position: absolute;
  width: 0;
  height: 0;
  left: 42%;
  bottom: -10px;
  content: "";
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #32CD32 transparent;
}
.title {
  padding: 6px 0 10px;
  font-family: "Times New Roman",Times,serif;
  color: #2f2c06;
  font-size: 36px;
  margin-top: 0;
}
.border {
  display: block;
  width: 20%;
  height: 1px;
  position: relative;
  margin: 0 auto 30px;
  background: #8c8989;
}
.border:after {
  position: absolute;
  top: 0;
  left: 30%;
  content: " ";
  width: 40%;
  height: 5px;
  margin-top: -2px;
  background: #32CD32;
}
.projectBox {
  display: flex;
  margin-top: 60px;
}

.projectImage {
  border: 1px solid black;
  width: 500px;
  height: 400px;
  margin: auto;
}
.projectImage img {
  width: 500px;
  height: 400px;
  /* 转换的速度 */
  transition: transform 0.25s ease;
}
.projectImage img:hover {
  /* scale(x,y):定义 2D 缩放转换，改变元素的宽度和高度。 */
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.projectContent {
  margin: auto;
  /* border: 1px solid black; */
  text-align: left;
  width: 400px;
  height: 400px;
}
.projectName {
  width: 100%;
/* 同时有中英文时，解决不能自动换行问题 */
  word-break: break-all;   
}
</style>
