<template>
  <div class="hello">
    <van-button type="primary" size="large">大号按钮</van-button>
  </div>
</template>

<script lang="ts">
import appInstance from '@/main';
import { defineComponent} from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~@/style/mixins.less';
.test {
  font-size: 14px;
  width: 100px;
  height: 300px;
  .border1px();
}
</style>
