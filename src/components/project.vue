<template>
    <div id="project">
      <div class="container">
        <!-- <span class="tip">WHAT I DO</span> -->
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <!-- <div class="projectBox">
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
        </div> -->
        <div class="project-img">
          <div class="imgbox project1"> 
            <img src="../assets/project1.jpg" alt="项目配图"/>                      
            <a href="https://blog.csdn.net/Gladys_Huang" target="_blank">
              <div class="mask"><span><h4>我的技术博客</h4>平时积累的点点滴滴~</span></div>
            </a>
          </div>
          <div class="imgbox project2">
             
            <img src="../assets/project2.jpg" alt="项目配图"/>
            <a>
              <div class="mask"><span><h4>H5购物车页面</h4>添加、删除选购物品~</span></div>
            </a>
          </div>
          <div class="imgbox project3">            
            <img src="../assets/project3.jpg" alt="项目配图"/>
            <a>
              <div class="mask"><span><h4>小程序页面</h4>授权、刷新与加载效果、页面跳转~</span></div>
            </a>
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
      title: "作品展现"
    };
  }
};
</script>

<style scoped>
#project {
  width: 100%;
  /* height: 710px; */
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

/* .tip {
  display: inline-block;
  position: relative;
  padding: 6px 20px;
  margin: 0 auto 10px;
  font-size: 20px;
  background: #32cd32;
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
  border-color: #32cd32 transparent;
} */
.title {
  padding: 6px 0 10px;
  font-family: "Times New Roman", Times, serif;
  color: #2f2c06;
  font-size: 36px;
  margin-top: 30px;
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
  background: #32cd32;
}
/* .projectBox {
  display: flex;
  padding: 3%;
  margin-top: 15px;
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
  transition: transform 0.25s ease;
}
.projectImage img:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.projectContent {
  margin: auto;
  text-align: left;
  width: 400px;
  height: 400px;
} */
/* .projectName {
  width: 100%;
  /* 同时有中英文时，解决不能自动换行问题 */
/* word-break: break-all; */
/* } */

.project-img {
  padding: 3%;
}

.project-img .imgbox {
  display: inline-block;
  position: relative;
  width: 220px;
  height: 200px;
  margin-right: 50px;
}

.project-img .imgbox img {
  width: 220px;
  height: 200px;
  transition: transform 0.5s ease;
}

.project-img .imgbox .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 200px;
  background: rgba(44, 44, 44, 0.6);
  color: #ffffff;
  opacity: 0;
  display: flex;
  font-size: 13px;
  /* 转换速度 */
  transition: transform 0.5s ease;
}

.mask span {
  margin: auto;
}

.imgbox a:hover .mask {
  opacity: 1;
  /* scale按比例扩大缩小图形 */
  -webkit-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}

.imgbox:hover img {
  -webkit-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}
</style>
