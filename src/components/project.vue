<template>
    <div id="project">
      <div class="container">
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <div class="project-img">
          <div class="imgbox project1"> 
            <img src="../assets/project1.jpg" alt="项目配图"/>                      
            <a href="https://blog.huangguandi.cn/" target="_blank">
              <div class="mask"><span><h4>我的技术博客</h4>平时积累的点点滴滴~</span></div>
            </a>
          </div>
          <div class="imgbox project2">            
            <img src="../assets/project2.jpg" alt="项目配图"/>
            <a href="http://ebook.huangguandi.cn/">
              <div class="mask"><span><h4>H5页面</h4>翻页、字号设置、主体设置等~</span></div>
            </a>
          </div>
          <div class="imgbox project3" @click="toWXpro">            
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
  name: 'project',
  data() {
    return {
      title: '作品展现'
    }
  },
  methods: {
    toWXpro() {
      this.$router.push({ path: '/wxproject' })
    }
  }
}
// debugger
</script>

<style scoped lang="less">
#project {
  width: 100%;
  background-color: #f5f5f5;
  background-size: cover;
  text-align: center;
  /* transform: scale(1.25);
  transform-origin: center top 0px; */
  .container {
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4.25% 0;
    .title {
      padding: 8px 0 13px;
      font-family: 'Times New Roman', Times, serif;
      color: #2f2c06;
      font-size: 45px;
      margin-top: 38px;
    }
    .border {
      display: block;
      width: 23%;
      height: 1px;
      position: relative;
      margin: 0 auto 38px;
      background: #8c8989;
    }
    .border:after {
      position: absolute;
      top: 0;
      left: 30%;
      content: ' ';
      width: 40%;
      height: 5px;
      margin-top: -2px;
      background: #32cd32;
    }
    .project-img {
      padding: 3.25%;
      .imgbox:hover img {
        -webkit-transform: scale(1.1, 1.1);
        transform: scale(1.1, 1.1);
      }
      .imgbox {
        display: inline-block;
        position: relative;
        width: 275px;
        height: 250px;
        margin-right: 62.5px;
        img {
          width: 275px;
          height: 250px;
          transition: transform 0.5s ease;
        }
        a:hover .mask {
          opacity: 1;
          /* scale按比例扩大缩小图形 */
          -webkit-transform: scale(1.1, 1.1);
          transform: scale(1.1, 1.1);
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 275px;
          height: 250px;
          background: rgba(44, 44, 44, 0.6);
          color: #ffffff;
          opacity: 0;
          display: flex;
          font-size: 16.25px;
          /* 转换速度 */
          transition: transform 0.5s ease;
          span {
            margin: auto;
          }
        }
      }
    }
  }
}
</style>
