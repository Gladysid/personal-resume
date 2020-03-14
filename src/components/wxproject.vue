<template>
<div id="wxproject">
    <div class="wxpro-container">
        <h2>关于娴余</h2>
        <div class="wxproTxt-box">
            <div class="wxproTxt">
                <p><b>项目描述：</b>娴余是一个微信小程序，是一个发布闲置物品的平台，包括首页、发现、发布、消息、我的共五部分</p>
                <p><b>实现技术：</b>微信小程序</p>
                <p><b>开发工具：</b>微信开发者工具</p>
                <p><b>技术要求：</b>①授权获取微信用户信息（包括昵称和所在城市）；②给本地数据实现刷新和继续加载效果；③横竖向滚动；④页面跳转；⑤轮播图 </p>
                <p><b>项目收获：</b>通过开发该项目，了解了页面刷新和加载的实现以及应用云开发控制台保存图片，加深了小程序技术知识的理解和使用</p>       
            </div>
        </div>
        <div class="wxproBox">
            <div class="wxpro-img-box">
                <div class="wxpro-img"><img src="../assets/wxpro-1.png"/></div>
                <div class="wxpro-img wxpro"><img src="../assets/wxpro-2.png"/></div>
            </div>           
        </div>

        <div class="wxproBox">
            <div class="wxpro-img-box">
                <div class="wxpro-img"><img src="../assets/wxpro-3.png"/></div>
                <div class="wxpro-img wxpro"><img src="../assets/wxpro-4.png"/></div>
            </div>
        </div>

        <div class="wxproBox">
            <div class="wxpro-img-box">
                <div class="wxpro-img"><img src="../assets/wxpro-5.png"/></div>
                <div class="wxpro-img wxpro"><img src="../assets/wxpro-6.png"/></div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
  name: "wxproject"
};
</script>

<style scoped>
.wxpro-container {
  padding: 0 100px;
}
.wxpro-container h2 {
  text-align: center;
  color: #32cd32;
}
.wxproTxt-box {
  /* border: 1px solid black; */
  display: flex;
}
.wxproTxt {
  width: 1100px;
  margin: auto;
  /* border: 1px solid red; */
}
.wxproBox {
  display: flex;
  /* border: 1px solid black; */
}
.wxpro-img-box {
  margin: 20px auto;
  /* border: 1px solid red; */
}

.wxpro-img-box .wxpro {
  margin-left: 100px;
}

.wxpro-img-box .wxpro-img {
  display: inline-block;
}

.wxpro-img-box .wxpro-img img {
  width: 500px;
  height: 1000px;
}
</style>

