<template>
  <div class="root">
    <div class="login_container">
      <div class="log"></div>
      <div class="form">
        <div class="header"><h1>登录</h1></div>
        <div class="form-wrapper">
          <input type="text" name="userLogin" placeholder="请输入用户名">
          <input type="password" name="password" placeholder="请输入密码">
        </div>
        <div class="agree">
          <input type="checkbox" name="isAgree">
          <a href="#">用户平台使用协议</a>
        </div>
        <button class="submit">登录</button>
        <div class="switch">
          <span class="usePhone">手机号登录</span>
          <span class="useQr">扫码登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginIndex'
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
      text-align: center;
      margin-top:30px;
    }
    .form-wrapper input:nth-child(-n+2){
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
      width: 100%;
      height: 40px;
      background-color: #2752FB;
    }
    .switch{
      width: 100%;
      margin-top:30px;
      span {
        display: inline-block;
        width: 48%;
        height: 30px;
        border:1px solid #ccc;
        text-align: center;
        line-height: 30px;
      }
      .useQr{
        margin-left:3%;
      }
    }
  }
}
</style>
