<template>
    <div id="skill">
      <div class="container">
        <!-- <span class="tip">WHAT I CAN</span> -->
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <!-- <div class="pbContainer">
          <div class="s_wrapper">
  	  	    <div class="progress-bar" v-for="item in skill">
  	          <progressBar :skill="item"></progressBar>
  	        </div>
  	      </div>
        </div> -->
        <!--进度0%-->
        <section>       
          <div class="wrap">
            <!--大于180，则class=clip-auto circle，否则：circle-->
             <!--大于180，则class=clip-auto circle，否则：circle-->
            <div class="clip-auto circle">
                <!-- 度数为：当前进度*3.6 -->
                <div class="percent left" style="-webkit-transform:rotate(324deg);"></div>
                <!-- 大于180，则class=percent right，否则为percent right wth0 -->
                <div class='percent right'></div>
            </div>
            <div class="num">
                <span>90</span>%
            </div>
          </div>
          <div class="txt">html5</div>
        </section>
       

    <section>
        <div class="wrap">
            <!--大于180，则class=clip-auto circle，否则：circle-->
            <div class="clip-auto circle">
                <!-- 度数为：当前进度*3.6 -->
                <div class="percent left" style="-webkit-transform:rotate(324deg);"></div>
                <!-- 大于180，则class=percent right，否则为percent right wth0 -->
                <div class='percent right'></div>
            </div>
            <div class="num">
                <span>90</span>%
            </div>
        </div>
        <div class="txt">css3</div>
    </section>

    <section>
        <div class="wrap">
            <!--大于180，则class=clip-auto circle，否则：circle-->
            <div class="clip-auto circle">
                <!-- 度数为：当前进度*3.6 -->
                <div class="percent left" style="-webkit-transform:rotate(288deg);"></div>
                <!-- 大于180，则class=percent right，否则为percent right wth0 -->
                <div class='percent right'></div>
            </div>
            <div class="num">
                <span>80</span>%
            </div>
        </div>
        <div class="txt">javaScript</div>
    </section>
   
   <div class="none"></div>

    <section>
        <div class="wrap">
            <!--大于180，则class=clip-auto circle，否则：circle-->
            <div class="clip-auto circle">
                <!-- 度数为：当前进度*3.6 -->
                <div class="percent left" style="-webkit-transform:rotate(288deg);"></div>
                <!-- 大于180，则class=percent right，否则为percent right wth0 -->
                <div class='percent right'></div>
            </div>
            <div class="num">
                <span>80</span>%
            </div>
        </div>
        <div class="txt">Vue</div>
    </section>

    <section>
        <div class="wrap">
            <!--大于180，则class=clip-auto circle，否则：circle-->
            <div class="clip-auto circle">
                <!-- 度数为：当前进度*3.6 -->
                <div class="percent left" style="-webkit-transform:rotate(252deg);"></div>
                <!-- 大于180，则class=percent right，否则为percent right wth0 -->
                <div class='percent right'></div>
            </div>
            <div class="num">
                <span>70</span>%
            </div>
        </div>
        <div class="txt">小程序</div>
    </section>

    <section>
        <div class="wrap">
            <!--大于180，则class=clip-auto circle，否则：circle-->
            <div class="clip-auto circle">
                <!-- 度数为：当前进度*3.6 -->
                <div class="percent left" style="-webkit-transform:rotate(252deg);"></div>
                <!-- 大于180，则class=percent right，否则为percent right wth0 -->
                <div class='percent right'></div>
            </div>
            <div class="num">
                <span>70</span>%
            </div>
        </div>
        <div class="txt">Photoshop</div>
    </section>



      </div>
    </div>
</template>

<script>
// import progressBar from "@/components/progress-bar";
export default {
  name: "skill",
  data() {
    return {
      title: "技能掌握"
      // skill: [
      //   { type: "html/html5", percent: "90%" },
      //   { type: "css/css3", percent: "90%" },
      //   { type: "js", percent: "80%" },
      //   { type: "vue", percent: "60%" },
      //   { type: "photoshop", percent: "60%" },
      //   { type: "http", percent: "60%" },
      //   { type: "react", percent: "30%" }
      // ]
    };
  },
  components: {
    // progressBar
  }
};
</script>

<style scoped>
#skill {
  width: 100%;
  /* height: 900px; */
  background-color: white;
  background-size: cover;
  text-align: center;
}
.container {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4% 0;
}
section {
  width: 8rem;
  height: 8rem;
  position: relative;
  margin: 15px 3.5rem;
  display: inline-block;
}

.none {
  height: 10px;
}

.wrap,
.circle,
.percent {
  position: absolute;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}

.wrap {
  top: 0;
  left: 0;
  background: #ccc;
}

.circle {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  border: 4px solid #ccc;
  clip: rect(0, 8rem, 8rem, 4rem);
  /* 把圆剪切为只有右边的灰色半圆 */
}

.clip-auto {
  clip: rect(auto, auto, auto, auto);
}

.percent {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  top: -4px;
  left: -4px;
}

.left {
  border: 0.4rem solid #0c4b62;
  clip: rect(0, 4rem, 8rem, 0);
  /* 把圆剪切为只有左边的橙色半圆，因为left圆是circle圆的子圆，
            所以circle圆剪切为只有右边的半圆时，left圆无法显示 */
}

.right {
  border: 0.4rem solid #0c4b62;
  clip: rect(0, 8rem, 8rem, 4rem);
  /* 把圆剪切为只有右边的橙色半圆 */
}

.wth0 {
  width: 0;
}

.num {
  position: absolute;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  width: 7.2rem;
  height: 7.2rem;
  line-height: 7.2rem;
  text-align: center;
  font-size: 1.5rem;
  left: 0.4rem;
  top: 0.4rem;
  border-radius: 50%;
  color: #0c4b62;
  background: white;
  z-index: 4;
}
.txt {
  color: #32cd32;
  /* border: 1px solid black; */
  /* font-size: 60px; */
  margin-top: 150px;
  text-align: center;
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
/* .pbContainer {
  display: flex;
}
.s_wrapper {
  margin: auto;
}  */

/* .progress-bar { */
/* float: left; */
/* width: 50%; */
/* height: auto; */
/* margin: auto; */
/* padding: 0 40px */
/* box-sizing: border-box;
  margin-top: 10px; */
/* } */
</style>
