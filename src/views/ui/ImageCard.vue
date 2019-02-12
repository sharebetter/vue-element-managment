<template>
    <el-row>
        <el-col :span="4" v-for="(imgArr, index) in imgs" :key="index" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }" v-for="imgUrl in imgArr" :key="imgUrl">
                <img :src="'./images/'+ imgUrl" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
              currentDate: new Date(),
              imgs : [
                ['1.png', '2.png', '3.png', '4.png', '5.png'],
                ['6.png', '7.png', '8.png', '9.png', '10.png'],
                ['11.png', '12.png', '13.png', '14.png', '15.png'],
                ['16.png', '17.png', '18.png', '19.png', '20.png'],
                ['21.png', '22.png', '23.png', '24.png', '25.png']
              ]
            };
        }
    }
</script>

<style scoped>
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>