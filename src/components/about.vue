<template>
    <div id="about">
    <!-- <div class="container"> -->
      <!-- <slot></slot> -->
       <div class="nav-center">
          <div class="blogName"><h3>Gladys博客</h3></div>
          <ul>
              <li><a href="#about">关于我</a></li>
              <li><a href="#know">心里话</a></li>
              <li><a href="#education">教育经历</a></li>
              <li><a href="#project">作品展现</a></li>
              <li><a href="#skill">技能掌握</a></li>
              <li><a href="#contact">雇佣我</a></li>
          </ul>
          <div class="login" @click="toLogin" >
            <span>登录</span>
                 |
            <span>注册</span>
          </div>
       </div>
       
       <div class="banner">
         <div class="rotate-wrap">
           <div class="front circle" style="transform: translateZ(5px);"></div>
           <div class="reverse circle"></div>
         </div>
         <div class="info">
           <!-- <transition name="custom-classes-transition" enter-active-class="animated tada" > -->
           <h1  v-if="show">{{info.Name}}</h1>
           <!-- </transition> -->
           <ul>
             <li class="text-hidden"><b>年龄</b> <span>{{info.age}}</span></li>
             <li class="text-hidden"><b>性别</b> <span>{{info.sex}} </span></li>
             <li class="text-hidden"><b>籍贯</b> <span>{{info.native}} </span></li>
             <li class="text-hidden"><b>住址</b> <span>{{info.address}} </span></li>
             <li class="text-hidden"><b>意向</b> <span>{{info.position}} </span></li>
             <!-- <li class="text-hidden blog"><b>博客</b> <span><a href="http://gladys.blog.yanhuada.cn">{{info.blog}}</a> </span></li> -->
           </ul>
         </div>
       </div>
      
    <!-- </div> -->
    </div>
</template>

<script>
// import "@/assets/css/animated.css";
export default {
  name: "about",
  data() {
    return {
      info: {
        Name: "Hello,I'm Gladys",
        age: "23岁",
        sex: "女",
        native: "广东茂名",
        address: "广州市天河区",
        position: "web前端工程师",
        blog: "http://gladys.blog.yanhuada.cn"
      }
    };
  },
  props: {
    show: {}
  },

  methods: {
    toLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
#about {
  background: url("../assets/last-pic-1.jpg");
  background-size: cover;
  height: 600px;
  width: 100%;
}

.nav-center {
  background-color: #0c4b62;
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  color: #f1f1f1;
  font-size: 12px;
}

.nav-center ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin: auto 0 auto auto;
  /* border: 1px solid red; */
}
.nav-center ul li {
  display: inline-block;
  margin-right: 25px;
}

.nav-center ul li a {
  text-decoration: none;
  color: #f1f1f1;
}
.nav-center ul li a:hover {
  color: #32cd32;
}

.blogName {
  margin: auto 25px;
  height: 50px;
}

.login {
  margin: auto 25px auto 0;
}

.login:hover {
  color: #32cd32;
}

.banner {
  max-width: 1200px;
  padding: 10% 0;
  margin: 0 auto;
}
.avator {
  float: left;
  width: 40%;
  text-align: center;
  position: relative;
  z-index: 1;
}
.avator img {
  width: 350px;
  border: 5px solid rgba(255, 255, 255, 0.68);
  /* 实现图片变圆形，前提是图片宽度和高度相等 */
  border-radius: 50%;
  margin-top: 30px;
}

.info {
  float: right;
  width: 60%;
  text-align: left;
}
h1 {
  font-size: 34px;
  font-family: "Overlock", cursive;
  color: white;
}
.info ul {
  margin-top: 30px;
  color: #000000;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  width: 380px;
  background-color: #f1f1f1f1;
  opacity: 0.7;
}
.info ul li {
  font-size: 18px;
  margin: 26px 0;
  font-family: "Overlock", cursive;
}

.info b {
  display: inline-block;
  margin-right: 10px;
}

.rotate-wrap {
  width: 50px;
  height: 50px;
  transform-style: preserve-3d;
  animation: rotate 5s linear infinite;
  position: absolute;
  margin-top: 90px;
  left: 210px;
}

.rotate-wrap:hover {
  animation-play-state: paused;
}

.rotate-wrap .front,
.rotate-wrap .reverse {
  width: 250px;
  height: 250px;
  background-size: cover;
}

.rotate-wrap .front {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url("../assets/Me.jpg");
}

.rotate-wrap .reverse {
  background-image: url("../assets/Me.jpg");
}

.circle {
  border-radius: 50%;
}

.blog a {
  text-decoration: none;
  /* color: blue; */
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>

