<template>
    <div id="about">
    <!-- <div class="container"> -->
      <!-- <slot></slot> -->
       <div class="nav-center">
          <ul>
              <li><a href="#about">首页</a></li>
              <li><a href="#know">关于我</a></li>
              <li><a href="#education">教育背景</a></li>
              <li><a href="#project">我的作品</a></li>
              <li><a href="#skill">个人技能</a></li>
              <li><a href="#contact">联系我</a></li>
          </ul>
          <div class="login" @click="toLogin" >
            <span>登录</span>
                 |
            <span>注册</span>
          </div>
       </div>
       
       <div class="banner">
         <div class="avator"><img src="../assets/Me.jpg" alt="人像图片"></div>
         <div class="info">
           <h1>{{info.Name}}</h1>
           <ul>
             <li class="text-hidden"><b>年龄</b> <span>{{info.age}}</span></li>
             <li class="text-hidden"><b>性别</b> <span>{{info.sex}} </span></li>
             <li class="text-hidden"><b>籍贯</b> <span>{{info.native}} </span></li>
             <li class="text-hidden"><b>住址</b> <span>{{info.address}} </span></li>
             <li class="text-hidden"><b>意向</b> <span>{{info.position}} </span></li>
           </ul>
         </div>
       </div>
    <!-- </div> -->
    </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      info: {
        Name: "Hi,I'm Gladys",
        age: "23岁",
        sex: "女",
        native: "广东茂名",
        address: "广州市天河区",
        position: "web前端工程师"
      }
    };
  },
  methods: {
    toLogin() {
      // alert('哈哈哈哈1');
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
#about {
  background: url("../assets/computer1.jpg");
  background-size: cover;
  height: 710px;
  width: 100%;
  color: white;
}

.nav-center {
  background-color: #ffe7ba;
  opacity: 0.5;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
}

.nav-center ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: black;
  margin: auto;
}
.nav-center ul li {
  display: inline;
}

.nav-center ul li a {
  padding: 14px 16px;
  text-decoration: none;
}

.login {
  color: black;
  margin: auto 20px;
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
  width: 50%;
  height: 50%;
  border: 5px solid rgba(255, 255, 255, 0.68);
  /* border-radius: 50%; */
}
.info {
  float: right;
  width: 60%;
  text-align: left;
 
}
h1 {
  font-size: 34px;
  font-family: "Overlock", cursive;
  color: 	white;
}
.info ul {
  margin-top: 10px;
  border-top: 1px solid #fff;
  color: 	white;
}
.info ul li {
  font-size: 20px;
  margin-top: 26px;
}
.info b {
  display: inline-block;
  font-family: "Overlock", cursive;
  margin-right: 10px;
  
}
.info ul li span:hover {
  color: #03a9f4;
}
</style>

