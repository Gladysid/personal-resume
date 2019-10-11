<template>
    <div id="know">
      <div class="container">
        <span class="tip">WHY I DID</span>
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <div class="a_info">
          <swiper :options="swiperOption" >
          <swiper-slide>
            <p>您在找前端工程师？？</p>
          </swiper-slide>

          <swiper-slide>
            <p>您真的来对了！！</p>
          </swiper-slide>

          <swiper-slide>
            <p>我就是一名热爱前端开发，为前端痴狂的coder。</p>
          </swiper-slide>

          <swiper-slide>
            <p>I Am The One!!</p>
          </swiper-slide>

          </swiper>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "know",
  data(){
    return{
      title:'自我简述'
    }
  }
};
</script>

<style scoped>
#know {
  width: 100%;
  height: 710px;
  background-color:#f5f5f5;
  background-size: cover;
  text-align: center;
}
.container{height: auto;max-width: 1200px;margin: 0 auto;padding:4% 0;}
.tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
.tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
.title{padding:6px 0 10px;font-family: 'Overlock', cursive;color: #2F2C06;font-size: 36px;margin-top: 0; }
.border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
.border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}

</style>
