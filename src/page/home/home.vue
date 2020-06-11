<template>
    <div class="home">
        <about/>
        <know-more/>
        <educational-background/>
        <project/>
        <skill/>
        <contact/>
         <video controls autoplay muted loop preload="auto" class="video" style="object-fit:cover">
         <source src="https://vardar.oss-cn-shenzhen.aliyuncs.com/gladys/online_images/resume_img/dayu_video.mp4" type="video/mp4">
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
    return {};
  },

  components: {
    about,
    knowMore,
    educationalBackground,
    project,
    skill,
    contact
  }
};
</script>

<style scoped>
.home {
  min-width: 1200px;
  /* height: auto; */
}
.video {
  width: 387px;
  height: 225px;
  position: fixed;
  right: 0;
  top: 70%;
  z-index: 10;
  border: 0;
  outline: none;
}
</style>

