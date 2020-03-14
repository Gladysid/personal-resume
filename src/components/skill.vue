<template>
    <div id="skill">
      <div class="container">
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
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
export default {
  name: "skill",
  data() {
    return {
      title: "技能掌握"
    };
  },
  components: {}
};
</script>

<style scoped>
#skill {
  width: 100%;
  background-color: white;
  background-size: cover;
  text-align: center;
}
.container {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.25% 0;
}
section {
  width: 9.6rem;
  height: 9.6rem;
  position: relative;
  margin: 18px 4.2rem;
  display: inline-block;
}

.none {
  height: 13px;
}

.wrap,
.circle,
.percent {
  position: absolute;
  width: 9.6rem;
  height: 9.6rem;
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
  border: 4.8px solid #ccc;
  clip: rect(0, 9.6rem, 9.6rem, 4.8rem);
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
  top: -4.8px;
  left: -4.8px;
}

.left {
  border: 0.48rem solid #0c4b62;
  clip: rect(0, 4.8rem, 9.6rem, 0);
  /* 把圆剪切为只有左边的橙色半圆，因为left圆是circle圆的子圆，
            所以circle圆剪切为只有右边的半圆时，left圆无法显示 */
}

.right {
  border: 0.48rem solid #0c4b62;
  clip: rect(0, 9.6rem, 9.6rem, 4.8rem);
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
  width: 8.64rem;
  height: 8.64rem;
  line-height: 8.64rem;
  text-align: center;
  font-size: 1.8rem;
  left: 0.48rem;
  top: 0.48rem;
  border-radius: 50%;
  color: #0c4b62;
  background: white;
  z-index: 4.8;
}
.txt {
  color: #32cd32;
  margin-top: 180px;
  text-align: center;
}

.title {
  padding: 8px 0 13px;
  font-family: "Times New Roman", Times, serif;
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
  content: " ";
  width: 40%;
  height: 5px;
  margin-top: -2px;
  background: #32cd32;
}
</style>
