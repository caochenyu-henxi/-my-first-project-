<template>
  <div class="root">
    <div class="login_container">
      <div class="log"></div>
      <div class="form">
        <div class="header"><h1>{{title}}</h1></div>
        <div class="phone" v-show="isPhoneLogin" @click="howLogin">
          <div class="form-wrapper">
            <input type="text" name="userLogin" placeholder="请输入用户名" v-model="mobile">
            <div class="error_u" v-show="rightU">用户名格式错误</div>
            <input type="password" name="password" placeholder="请输入密码" v-model="password">
            <div class="error_p" v-show="rightP">密码格式错误</div>
          </div>
          <div class="agree">
            <input type="checkbox" name="isAgree" ref="checkbox">
            <a href="#" @click="goLoginAgree">用户平台使用协议</a>
          </div>
          <button class="submit" @click="toLogin">登录</button>
        </div>
        <div class="code" v-show="!isPhoneLogin">
          <img src="@/assets/login_pic/code.png" alt="二维码失效">
        </div>
        <ul class="switch" @click="howLogin">
          <li class="usePhone">手机号登录</li>
          <li class="useQr">扫码登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import request from '@/utils/request'
export default {
  name: 'loginIndex',
  data () {
    return {
      title: '手机号登录',
      isPhoneLogin: true,
      mobile: '',
      password: '',
      rightU: false,
      rightP: false,
      timer: null
    }
  },
  destroyed () {
    // 组件销毁删除定时器
    clearTimeout(this.timer)
  },
  methods: {
    goLoginAgree (e) {
      e.preventDefault()
      this.$router.push('/loginAgree')
    },
    // 切换login方式
    howLogin (e) {
      console.log(e.target.tagName)
      console.log(e.target.className.includes('usePhone'))
      if (e.target.className.includes('useQr') && e.target.tagName === 'LI') {
        this.isPhoneLogin = false
        this.title = '二维码登录'
      } else {
        this.isPhoneLogin = true
        this.title = '手机号登录'
      }
    },
    // 登录校验手机号、密码、协议
    validTest () {
      const username = /^1[3-9]\d{9}$/
      // 确保密码必须包含字母、数字和符号，且长度至少为 8 个字符
      const password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if (!username.test(this.mobile)) {
        this.rightU = true
        this.timer = setTimeout(() => {
          this.rightU = false
        }, 2000)
        return
      }
      if (!password.test(this.password)) {
        this.rightP = true
        this.timer = setTimeout(() => {
          this.rightP = false
        }, 2000)
        return
      }
      if (!this.$refs.checkbox.checked) {
        alert('请勾选协议')
      }
    },
    toLogin () {
      if (!this.validTest()) {
        return
      }
      this.$store.commit('user/setUserToken')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  // width: 100%;
  height: 100vh;
  background-color: #f8f9fa;
  .log {
    float:left;
    width: 970px;
    height: 100%;
    background: transparent url("@/assets/background_pic/blueBoat.png") no-repeat top left;
    background-size: cover;
    border-top-right-radius: 60px;
  }
  .form{
    float:right;
    margin-top:260px;
    margin-right:133px;
    padding: 0 20px;
    width: 350px;
    height: 403px;
    border-radius: 10px;
    background-color: #ffffff;
    .header{
      // text-align: center;
      margin-top:30px;
      color:#000000;
    }
    .form-wrapper{
        input{
        display: block;
        box-sizing:border-box;
        margin-top:20px;
        padding-left:5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        height: 40px;
        background-color: #f4f5fb;
      }
        input:hover{
        outline:1px solid #333d8a;
      }
      div{
        font-size: 14px;
        color:red;
        margin-left:5px;
      }
    }
    .agree{
      margin:25px 0;
      input{
      vertical-align: middle;
      }
      a{
        padding-left:10px;
      }
    }
    .submit{
      transition: all 0.2s ease;
      width: 100%;
      height: 40px;
      background-color: #2752FB;
      border-radius:2px;
      color:#fff;
    }
    .submit:active{
      transform: scale(0.98); /* 按下时稍微缩小 */
      opacity: 0.8; /* 透明度降低 */
    }
    .submit:hover{
      background-color: #7686ea;
    }
    .switch{
      width: 100%;
      margin-top:30px;
      li {
        transition: all 0.2s ease;
        display: inline-block;
        width: 48%;
        height: 30px;
        border:1px solid #dcdfe6;
        border-radius: 2px;
        text-align: center;
        line-height: 30px;
      }
      li:active{
        transform: scale(0.98); /* 按下时稍微缩小 */
        opacity: 0.8; /* 透明度降低 */
      }
      li:hover{
       cursor: pointer;
       background-color: #edf5ff;
       color:#6b9cfe;
      }
      .useQr{
        margin-left:3%;
      }
    }
    .code{
      width: 100%;
      height: 250px;
    }
    .code img{
      margin-left:-20px;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
