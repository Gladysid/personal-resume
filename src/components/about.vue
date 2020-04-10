<template>
    <div id="about">
       <div class="nav-center" id="nav">
          <div class="blogName"><h3>Gladys简历</h3></div>
          <ul>
              <li><a @click="jump('#about')">关于我</a></li>
              <li><a @click="jump('#know')">畅谈天地</a></li>
              <li><a @click="jump('#education')">教育经历</a></li>
              <li><a @click="jump('#project')">作品展现</a></li>
              <li><a @click="jump('#skill')">技能掌握</a></li>
              <li><a @click="jump('#contact')">雇佣我</a></li>
          </ul>
          <!-- <div class="login" @click="toLogin" >
            <span>登录</span>
                 |
            <span>注册</span>
          </div> -->
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
      
    </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      info: {
        Name: "Hey,I'm Gladys",
        age: "24岁",
        sex: "女",
        native: "广东茂名",
        address: "广州市天河区",
        position: "web前端工程师"
      }
    };
  },

  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    },
    jump(obj) {
      const downloadEle = document.querySelector("#nav");
      if (!!downloadEle) {
        downloadEle.scrollIntoView(true); // true 是默认的
      }
      document.querySelector(obj).scrollIntoView(true);
    }
  }
};
</script>

<style scoped lang="less">
#about {
  background: url("../assets/last-pic-1.jpg");
  background-size: cover;
  height: 730px;
  width: 100%;
  .nav-center {
    background-color: #0c4b62;
    width: 100%;
    height: 62.5px;
    position: fixed;
    display: flex;
    color: #f1f1f1;
    font-size: 15px;
    z-index: 10;
    .blogName {
      margin: auto 32px;
      height: 62.5px;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      margin: auto 0 auto auto;
      li {
        display: inline-block;
        margin-right: 32px;
        a {
          text-decoration: none;
          color: #f1f1f1;
        }
        a:hover {
          color: #32cd32;
        }
      }
    }
  }
  .banner {
    max-width: 1200px;
    padding: 10% 0;
    margin: 0 auto;
    @keyframes rotate {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
    .rotate-wrap {
      transform-style: preserve-3d;
      animation: rotate 5s linear infinite;
      position: absolute;
      margin-top: 113px;
      left: 263px;
      .circle {
        border-radius: 50%;
      }
      .front,
      .reverse {
        width: 313px;
        height: 313px;
        background-size: cover;
      }
      .front {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("../assets/Me.jpg");
      }
      .reverse {
        background-image: url("../assets/Me.jpg");
      }
    }
    .rotate-wrap:hover {
      animation-play-state: paused;
    }
    .info {
      float: right;
      width: 60%;
      text-align: left;
      h1 {
        font-size: 42px;
        font-family: "Overlock", cursive;
        color: white;
      }
      ul {
        margin-top: 37.5px;
        color: #000000;
        border: 1px solid #f1f1f1;
        border-radius: 10px;
        width: 475px;
        background-color: #f1f1f1f1;
        opacity: 0.7;
        li {
          font-size: 22px;
          margin: 32px 0;
          font-family: "Overlock", cursive;
          b {
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>

