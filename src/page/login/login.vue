<template>
  <div id="back">
    <!-- <div class="header" :style="back">
       <div class="title"><b>登录</b></div>
    </div> -->
    <div class="loginContainer">
       <div class="loginContainer1">
       <p>Gladys的简历</p>
       <div class="loginCard">
         <p><b>登录</b></p>
         <form class="login" v-on:submit.prevent="submit">
            <div class="line">
              <!-- 点击了按钮并且id为空时显示“id不能为空” -->
              <div v-show="btn && !form.id">id不能为空</div>
              <input type="number" placeholder="请输入id" v-model="form.id">
            </div>

            <div class="line">
              <div v-show="btn && !form.psw">密码不能为空</div>
              <input type="password" placeholder="请输入密码"  v-model="form.psw">
            </div>

            <!-- <el-row> -->
                <!-- <el-button type="primary">主要按钮</el-button> -->
            <!-- </el-row> -->
            <div class="line">
                <button class="button">登录</button>
            </div>
          </form>
       </div>
       </div>
    </div>

  </div>

    
</template>

<script>
// import img from '../../assets/background-pic.jpg'
export default {
  data() {
    return {
      btn: false, //true已经提交过，false没有提交过
      form: {
        id: "",
        psw: ""
      }
      //    back:{
      //        backgroundImage:"url(" + require('../../assets/background-pic.jpg') + ")",
      //        backgroundRepeat:"no-repeat",
      //        backgroundSize:"100% 100%",

      //    }
    };
  },

  name: "back",

  methods: {
    submit() {
      this.btn = true;
      if (!this.form.id || !this.form.psw) return;
      //  localStorage.setItem('id',this.form.id);
      //  this.$router.replace({path:'/incompleted'})
      this.$router.push({
        name: "incompleted",
        params: {
          id: this.form.id
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.loginCard {
  width: 320px;
  height: 350px;
  margin: auto;
  background: #fff;
  padding: 20px;
}
.loginCard p {
  font-size: 20px;
  margin-right: 250px;
}

.loginContainer1 {
  text-align: center;
  margin-top: 50px;
}

.loginContainer1 p {
  font-size: 20px;
}

.login {
  padding: 0px;
  text-align: center;
  margin: auto;
  // border: 1px solid green;
  .line {
    margin: auto;
    // border: 1px solid green;
    width: 320px;
    input {
      line-height: 30px;
      width: 300px;
      margin: 5px;
      background-color: white;
      border: 1px solid gray;
      border-radius: 5px;
    }
  }
}

.button {
  background-color: #32cd32;
  font-size: 15px;
  border-radius: 5px;
  line-height: 30px;
  margin: 5px;
  color: white;
  width: 300px;
  margin-top: 10px;
  border: 1px solid gray;
}

.button:hover {
  background-color: #708090;
}

#back {
  background-color: #ededed;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
</style>


