<template>
    <div id="education">
      <div class="container">
        <span class="tip">WHERE I DID</span>
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
        <div class="content">
         <div class="circular">
           <div class="date">
           <p><b>09/2015</b></p>
           <p><b>-</b></p>
           <p><b>06/2018</b></p>
           </div>
         </div>
         <span class="border2"></span>
         <div class="square">
           <div class="school">
             <h3>广州城市职业学院</h3>
             <h4>大学专科</h4>
             <p><b>相关奖项：</b>三等奖奖学金，优秀社员等</p>
             <p><b>技能证书：</b>大学英语四级、计算机二级（Photoshop）</p>
           </div>
           <!-- <ul>
             <li><b>广州城市职业学院</b></li>
             <li><b>大学专科</b></li>
             <li>相关奖项</li>
             <li>技能证书</li>
           </ul> -->
         </div>
         </div>

      </div>
      
      
    </div>
</template>

<script>
export default {
  name: "education",
  data() {
    return {
      title: "我的经历"
    };
  }
};
</script>

<style scoped>
#education {
  width: 100%;
  height: 710px;
  background-color: #fff;
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

.circular {
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 50%;
  margin: auto;
  display: flex;
}
.border2 {
  display: inline-block;
  width: 100px;
  height: 2px;
  background-color: #8c8989;
  margin: auto;
  position: relative;
}
.square {
  width: 300px;
  height: 200px;
  border: 1px solid gray;
  margin: auto;
 
}
.content {
  display: flex;
  padding: 10%;
}
.date{
  margin: auto;
}
.school{
  color: dimgray;
}
.school h3{
  color: black;
}
.school h4{
  color: 	#FFC125;
}


</style>
