<template>
    <div id="contact" >
      <div class="container">
        <span class="tip">HOW TO FIND</span>
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>

        <div class="cardContainer">
          <div class="card">
            <img src="../assets/weixin.jpg">
                <ul>
                <li><b>手机：</b><span>18824103673</span></li>
                <li><b>邮箱：</b><span>18824103673@163.com</span></li>
                <li><b>QQ：</b><span>2584135898</span></li>
                </ul>
             
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      title: "联系我"
    };
  },
  
}
</script>

<style scoped>
#contact {
  width: 100%;
  height: 720px;
  background: url("../assets/office.jpg") no-repeat center 0px;
  /* background-color: bisque; */
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
.card {
  box-shadow: 0 4px 8px 0 black;
  transition: 0.3s;
  width: 350px;
  border-radius: 10px;
  background-color: white;
  margin: auto;
  font-size: 20px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card img {
  /* border-radius: 10px 10px 0 0; */
  width: 330px;
}

.cardContainer {
  display: flex;
}

.card ul {
  text-align: left;
  list-style-type: none;
}

</style>
