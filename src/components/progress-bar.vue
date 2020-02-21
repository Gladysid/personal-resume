<template>
    <div class="progress-box">
        <p>{{skill.type}} </p>      
          <div class="container2">
            <div class="progress-bar progress-bar-striped active" :style="{width:skill.percent}"></div>
          </div>
    </div>
</template>

<script>
export default {
  name: "progress-box",
  props: {
    skill: {
      type: Object
    }
  }
};
</script>

<style scoped>
.progress-box {
  margin-left: 30px;
}

.progress-box p {
  font-size: 24px;
  color: #2f2c06;
  text-align: left;
}
/* .container {
  border: 1px solid blue;
 } */
.container2 {
  width: 500px;
  height: 10px;
  background-color: #e8edf2;
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.progress-bar {
  height: 100%;
  background-color: #32cd32;
}
.progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(156, 245, 156, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(203, 250, 215, 0.15) 50%,
    rgba(100, 247, 124, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px 40px;
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress-bar.active {
  animation: progress-bar-stripes 2s linear infinite;
}
</style>

