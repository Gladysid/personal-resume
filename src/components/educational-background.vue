<template>
    <div id="education">
      <div class="container">
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
      title: "教育经历"
    };
  }
};
</script>

<style scoped lang="less">
#education {
  width: 100%;
  background-color: #fff;
  background-size: cover;
  text-align: center;
  /* transform: scale(1.25); */
  /* transform-origin: center top 0px; */
  .container {
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5.25% 0;
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
    .content {
      display: flex;
      padding: 6%;
      .circular {
        width: 250px;
        height: 250px;
        border: 1.25px solid gray;
        border-radius: 50%;
        margin: auto 0 auto auto;
        display: flex;
        .date {
          margin: auto;
        }
      }
      .border2 {
        display: inline-block;
        width: 187px;
        height: 2px;
        background-color: #8c8989;
        margin: auto 50px;
        position: relative;
      }
      .square {
        width: 375px;
        height: 250px;
        border: 1.25px solid gray;
        margin: auto auto auto 0;
        border-radius: 5px;
        transform: rotate(34deg);
        -ms-transform: rotate(34deg); /* IE 9 */
        -webkit-transform: rotate(34deg); /* Safari and Chrome */
        .school {
          color: dimgray;
          h3 {
            color: black;
          }
          h4 {
            color: #ffc125;
          }
        }
      }
    }
  }
}
</style>
