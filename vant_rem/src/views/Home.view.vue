<template>
  <div class="home">
    <div class="home-top">
      <div class="home-top-bg-wrap"><img class="home-top-bg" :src="require('../assets/images/pic_dabg.png')" alt="" /></div>
      <span class="home-top-des">Vue3+Vant+rem适配</span>
    </div>
    <van-tabs v-model:active="active">
      <van-tab title="标签 1">
         <van-form @submit="onSubmit">
          <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
          <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="标签 2">
        <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>
      </van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
/* eslint @typescript-eslint/no-var-requires: "off" */
import Home from './Home.class';
export default Home;
</script>
<style lang="less">
.home-top {
  position: relative;
  &-bg {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  }
  &-bg-wrap {
    width: 100%;
    position: relative;
    height: 0;
    overflow: hidden;
    padding-top: percentage(768/750);
  }
  &-txt {
    width: 443px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 120px;
    transform: translateX(-50%);
  }
  &-des {
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 320px;
    transform: translateX(-50%);
    color: #fff;
  }
}
</style>
