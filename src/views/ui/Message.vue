<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-goods"></i> ui</el-breadcrumb-item>
            <el-breadcrumb-item>Message</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-row>
                <el-button :plain="true" @click="open" type="primary">打开消息提示</el-button>
                <el-button :plain="true" @click="openVn" type="primary">VNode</el-button>
                <el-button :plain="true" @click="openCenter" type="primary">文字居中</el-button>
                <el-button :plain="true" @click="openHTML" type="primary">使用 HTML 片段</el-button>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>状态Message</span>
            </div>
            <el-row>
                <el-button plain @click="open2" type="success"> 成功 </el-button>
                <el-button plain @click="open3" type="warning"> 警告 </el-button>
                <el-button plain @click="open" type="info"> 消息 </el-button>
                <el-button plain @click="open4" type="danger"> 错误 </el-button>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>可关闭状态Message</span>
            </div>
            <el-row>
                <el-button plain @click="open5" type="success"> 成功 </el-button>
                <el-button plain @click="open6" type="warning"> 警告 </el-button>
                <el-button plain @click="open7" type="info"> 消息 </el-button>
                <el-button plain @click="open8" type="danger"> 错误 </el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        methods:{
            openCenter() {
                    this.$message({
                    message: '居中的文字',
                    center: true
                });
            },
            openHTML() {
                this.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                });
            },
            open() {
                this.$message('这是一条消息提示');
            },

            openVn() {
                const h = this.$createElement;
                this.$message({
                    message: h('p', null, [
                        h('span', null, '内容可以是 '),
                        h('i', { style: 'color: teal' }, 'VNode')
                    ])
                });
            },
            open2() {
                this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
                });
            },

            open3() {
                this.$message({
                message: '警告哦，这是一条警告消息',
                type: 'warning'
                });
            },

            open4() {
                this.$message.error('错了哦，这是一条错误消息');
            },
            open5() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },

            open6() {
                this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open7() {
                this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open8() {
                this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                });
            }
        }
    }
</script>

<style scoped>

</style>