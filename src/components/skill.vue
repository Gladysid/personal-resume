<template>
    <div id="skill">
       <div class="container">
        <span class="tip">WHAT I CAN</span>
        <h1 class="title">{{title}}</h1>
        <span class="border"></span>
       <div class="pbContainer">
        <div class="s_wrapper">
  	  	  <div class="progress-bar" v-for="item in skill">
  	        <progressBar :skill="item"></progressBar>
  	    </div>
  	  </div>
      </div>

      </div>
    </div>
</template>

<script>
import progressBar from "@/components/progress-bar";
export default {
  name: "skill",
  data() {
    return {
      title: "个人技能",
      skill: [
        { type: "html/html5", percent: "90%" },
        { type: "css/css3", percent: "90%" },
        { type: "js", percent: "80%" },
        { type: "vue", percent: "60%" },
        { type: "photoshop", percent: "60%" },
        { type: "http", percent: "60%" },
        { type: "react", percent: "30%" }
      ]
    };
  },
  components: {
    progressBar
  }
};
</script>

<style>
#skill {
  width: 100%;
  height: 900px;
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
.pbContainer{
display: flex;
}
.s_wrapper {
 margin: auto;
}

.progress-bar {
  /* float: left; */
  width: 50%;
  height: auto;
  /* margin: auto; */
  /* padding: 0 40px */
  /* box-sizing: border-box;
  margin-top: 10px; */
}
</style>
