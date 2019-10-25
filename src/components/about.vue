<template>
    <div id="about">
    <!-- <div class="container"> -->
      <!-- <slot></slot> -->
       <div class="nav-center">
          <ul>
              <li><a href="#about">首页</a></li>
              <li><a href="#know">关于我</a></li>
              <li><a href="#education">我的经历</a></li>
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
         <div class="rotate-wrap">
           <div class="front circle" style="transform: translateZ(5px);"></div>
           <div class="reverse circle"></div>
         </div>
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
  background: url("../assets/last-pic-1.jpg");
  background-size: cover;
  height: 600px;
  width: 100%;
  color: white;
}

.nav-center {
  background-color: #f1f1f1;
  opacity: 0.7;
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
  margin: auto;
}
.nav-center ul li {
  display: inline;
}

.nav-center ul li a {
  padding: 14px 16px;
  text-decoration: none;
  color: black;
}
.nav-center ul li a:hover {
  /* background-color: 	#7CCD7C; */
  color: #32CD32;
}
/* .nav-center ul li a:active {
  color: #fff;
} */


.login {
  color: black;
  margin: auto 20px;
}

.login:hover {
  color: #32CD32;
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
  font-family: "Overlock",cursive;
  color: 	white;
}
.info ul {
  margin-top: 10px;
  /* 显示ul的上边框 */
  border-top: 1px solid white;
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

.rotate-wrap {
            width: 100px;
            height: 100px;
            /* margin: 100px; */
            transform-style: preserve-3d;
            animation: rotate 5s linear infinite;
            position: absolute;
            margin-top: 100px;
            left: 250px;
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
            background-image: url('../assets/Me.jpg');
        }

        .rotate-wrap .reverse {
          
            background-image: url('../assets/Me.jpg');
        }

        .circle {
            border-radius: 50%;
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

