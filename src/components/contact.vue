<template>
    <div id="contact" >
      <div class="container">
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
        <div class="copyright">Copyright © 2019 - 2020 Gladys All Rights Reserved.</div>
        <footer><img src="../assets/icp.png"/><a href="http://beian.miit.gov.cn" target="_bank">粤ICP备20012156号</a></footer>
      </div>
    </div>
</template>



<script>
export default {
  name: "contact",
  data() {
    return {
      title: "雇佣我"
    };
  }
};
</script>

<style scoped>
#contact {
  width: 100%;
  background: url("../assets/office.jpg") no-repeat center 0px;
  background-size: cover;
  text-align: center;
  /* transform: scale(1.25); */
  /* transform-origin: center top 100px; */
}
.container {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.25% 0;
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
.card {
  box-shadow: 0 4px 8px 0 black;
  transition: 0.3s;
  width: 437.5px;
  border-radius: 12.5px;
  background-color: #0c4b62;
  margin: auto;
  font-size: 18.8px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card img {
  width: 312.5px;
}

.cardContainer {
  display: flex;
  margin-top: 15px;
}

.card ul {
  text-align: left;
  list-style-type: none;
  padding: 0 62px;
  color: #ffffff;
}

.value1 {
  font-size: 37px;
}

.copyright {
  margin-top: 62.5px;
  color: #ffffff;
}

footer {
  margin-top: 5px;
}

footer img {
  margin-right: 2px;
}

footer a {
  color: #ffffff;
  text-decoration: none;
}
</style>
