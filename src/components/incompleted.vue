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
      id: ""
    };
  },
  created: function() {
    //  console.log('id')

    // this.id = localStorage.getItem("id");

    this.id = this.$route.params.id;
  }
  // methods: {
  //   getId() {
  //   console.log('没问题');
  //    var id =  localStorage.getItem("id");
  //    console.log(id)
  //   }
  // }
};
</script>

<style>
</style>


