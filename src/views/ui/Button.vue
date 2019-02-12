<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item><i class="el-icon-goods"></i> ui</el-breadcrumb-item>
                <el-breadcrumb-item>button按钮</el-breadcrumb-item>
            </el-breadcrumb>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>基础按钮</span>
                </div>
                <div class="text item">
                    <el-row>
                        <el-button>默认按钮</el-button>
                        <el-button type="primary" disabled>主要按钮（禁用）</el-button>
                        <el-button type="success">成功按钮</el-button>
                        <el-button type="info">信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button>
                    </el-row>
                </div>
                <div class="text item">
                    <el-row>
                        <el-button round>圆角按钮</el-button>
                        <el-button type="primary" round>主要按钮</el-button>
                        <el-button type="success" round>成功按钮</el-button>
                        <el-button icon="el-icon-search" circle></el-button>
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="success" icon="el-icon-check" circle></el-button>
                        <el-button type="info" icon="el-icon-message" circle></el-button>
                        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-row>
                </div>
            </el-card>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>图形按钮</span>
                </div>
                <div class="text item">
                    <el-row>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                    </el-row>
                </div>

            </el-card>

             <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>按钮组</span>
                </div>
                <div class="text item">
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                    </el-button-group>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                        <el-button type="primary" :loading="true">加载中</el-button>
                    </el-button-group>
                </div>

            </el-card>

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>不同尺寸按钮</span>
                </div>
                <div class="text item">
                    <el-row>
                        <template>
                            <el-radio-group v-model="radio">
                                <el-radio  :label="1">中等</el-radio>
                                <el-radio  :label="2">小型</el-radio>
                                <el-radio  :label="3">超小型</el-radio>
                            </el-radio-group>
                        </template>
                    </el-row>
                </div>
                <div class="text item">
                    <el-row>
                        <el-button type="primary" :size="btnSize">主要按钮</el-button>
                        <el-button type="success" :size="btnSize">成功按钮</el-button>
                        <el-button type="info" :size="btnSize">信息按钮</el-button>
                    </el-row>
                </div>
            </el-card>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                radio:1
            }
        },
        computed: {
            btnSize () {
                if(this.radio == 1){
                    return 'medium';
                }else{
                    return this.radio == 2 ? 'small':'mini'
                }
            }
        }
    }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    margin-top: 20px;
  }
.el-button-group{
    margin-left: 10px
}
</style>