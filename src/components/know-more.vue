<template>
    <div id="know">
      <div class="container">
        <span class="tip">WHY I DID</span>
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <div class="a_info">
          <swiper id="sw" :options="swiperOption" ref="mySwiper" >
          <swiper-slide>
            <p>
              <b>为什么想做前端工程师？？</b>
              因为遇见，因为崇敬，因为爱好，所以我来了！
            </p>
          </swiper-slide>

          <swiper-slide>
            <p><b>我的优势？</b>拥有自主的学习能力、研究过github上开源项目、会项目部署</p>
          </swiper-slide>

          <swiper-slide>
            <p><b>我的缺点？</b>有点健忘，很多时候都会把要做的事情记录下来</p>
          </swiper-slide>

          <swiper-slide>
            <p><b>我的看法？</b>这个行业并没有饱和，没有最优秀，只有更优秀！</p>
          </swiper-slide>
           <!-- 实现每个点对应一个页面，点击点可以跳到相应的页面 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 实现返回前一页和前进后一页 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
	        <div class="swiper-button-next" slot="button-next"></div>

          </swiper>
        </div>
      </div>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "know",
  data() {
    return {
      title: "关于我",

      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        // 实现自动演示，每个页面的展示时间，disableOnInteraction：解除交互作用
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true

        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style  scoped>
#know {
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

.a_info {
  font-size: 20px;
}


.swiper-container {
  width: 100%;
  height: 300px;
  line-height: 300px;
  overflow: hidden;
  text-align: center;
}
.swiper-pagination {
  top: 46%;
  /* background-color: green; */
}

#sw >>> .swiper-button-prev{
  background-image: url("../assets/arrow-left-2.png");
  left: 10px;
  right: auto;
}


#sw >>> .swiper-button-next {
  background-image: url("../assets/arrow-right-2.png");
  right: 10px;
  left: auto;
}

  #sw >>> .swiper-pagination-bullet-active {
    color:#fff;
    background:#32CD32 ;
  } 

</style>
