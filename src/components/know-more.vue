<template>
    <div id="know">
      <div class="container">
        <!-- <span class="tip">WHY I DID</span> -->
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <div class="a_info">
          <swiper id="sw" :options="swiperOption" ref="mySwiper" >
          <swiper-slide>
            <p>
              <b>为什么想做前端？</b>
              因为遇见，因为兴趣，因为适合，所以我来了！
            </p>
          </swiper-slide>

            <swiper-slide>
            <p><b>让我废寝忘食的事情？</b>莫过于研究BUG~</p>
          </swiper-slide>

          <swiper-slide>
            <p><b>让我兴奋不已的事情？</b>莫过于解决了BUG~</p>
          </swiper-slide>

          <swiper-slide>
            <p><b>让我难以忘怀的事情？</b>莫过于收到您的面试邀请~</p>
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
      title: "畅谈天地",
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

<style  scoped lang="less">
#know {
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
    .a_info {
      font-size: 25px;
      .swiper-container {
        width: 100%;
        height: 300px;
        line-height: 300px;
        overflow: hidden;
        text-align: center;
      }
      .swiper-pagination {
        top: 46%;
      }
    }
  }
}
</style>

<style scoped>
#sw >>> .swiper-button-prev {
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
  color: #fff;
  background: #32cd32;
}
</style>
