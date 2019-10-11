<template>
  <div id="back">
    <div class="header" :style="back">
       <div class="title"><b>登录</b></div>
    </div>

    <div>
      <form class="login" v-on:submit.prevent="submit">
          <div class="line">
             <div v-show="btn && !form.id">id不能为空</div>
             <input type="number" placeholder="请输入id" v-model="form.id">
          </div>

          <div class="line">
             <div v-show="btn && !form.psw">密码不能为空</div>
             <input type="password" placeholder="请输入密码" v-model="form.psw">
          </div>

          <button class="button">登录</button>
      </form>
    </div>

  </div>

    
</template>

<script>
// import img from '../../assets/background-pic.jpg'
export default {
    data(){
        return {
            btn: false,//true已经提交过，false没有提交过
            form:{
                id:"",
                psw:""
            },
        //    back:{
        //        backgroundImage:"url(" + require('../../assets/background-pic.jpg') + ")",
        //        backgroundRepeat:"no-repeat",
        //        backgroundSize:"100% 100%",
               
        //    }
        }
    },

    name:"back",

   methods:{
     submit(){
         this.btn = true;
         if(!this.form.id || !this.form.psw)return;
         this.$router.replace({path:'/index'})
     }
   }
    
}
</script>

<style lang="less" scoped>
 .header {
		position: relative;
		line-height: 38px;
		color: white;
		text-align: center;
        background: #222;
 }

 .login {
		padding: 50px;
		text-align: center;
        .line {
			padding: 5px;
			input {
				padding: 0 10px;
                line-height: 28px;
                background-color: white;
			}
        }

}

.button {
    background-color:#4A708B	;
    font-size: 15px;
    border-radius: 8px;
    padding:5px 75px;
    color: white;

}

.button:hover {
    background-color:#708090;
}

#back {
 background:url('../../assets/background-pic.jpg');
 background-size:100% 100%;
 height: 100%;
 position:fixed;
 width:100%

}

</style>


