<template>
 <div class="line">
    <p>此功能待完善............</p>   
    <p>id:{{id}}</p>
     <!-- <button class="button" v-on:click="getId">弹出</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  created: function() {
    // const downloadEle = document.querySelector('#toDownload')
    // if (!!downloadEle) {
    //   downloadEle.scrollIntoView(true) // true 是默认的
    // }
    // document.querySelector('#download').scrollIntoView(true)
    //  console.log('id')

    // this.id = localStorage.getItem("id");

    this.id = this.$route.query.id //获取传过来的参数
  }
  // methods: {
  //   getId() {
  //   console.log('没问题');
  //    var id =  localStorage.getItem("id");
  //    console.log(id)
  //   }
  // }
}
</script>

<style>
</style>


