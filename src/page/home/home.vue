<template>
    <div class="home">
        <about :show="show" />
        <know-more/>
        <educational-background/>
        <project/>
        <skill/>
        <contact/>
         <video controls autoplay muted loop preload="auto" class="video">
         <source src="../../assets/video/movie.mp4" type="video/mp4">
      </video>                      
    </div>
    

</template>

<script>
import about from "../../components/about";
import knowMore from "../../components/know-more";
import educationalBackground from "../../components/educational-background";
import project from "../../components/project";
import skill from "../../components/skill";
import contact from "../../components/contact";

export default {
  name: "home",
  data() {
    return {
      show: true
    };
  },

  components: {
    about,
    knowMore,
    educationalBackground,
    project,
    skill,
    contact
  }
  // created: function() {
  //   this.$alert("欢迎进入黄观娣个人主页!", "Welcome", {
  //     confirmButtonText: "确定",
  //     callback: action => {
  //       this.show = true;
  //     }
  //   });
  // }
};
</script>

<style scoped>
.home {
  min-width: 1200px;
  height: auto;
}
.video {
  width: 310px;
  height: 180px;
  position: fixed;
  right: 0;
  top: 69%;
}
</style>

