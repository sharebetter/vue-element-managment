<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-goods"></i> ui</el-breadcrumb-item>
            <el-breadcrumb-item>全局消息提醒</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>多样按钮</span>
            </div>
            <el-row>
                <el-button plain @click="open" type="success"> 可自动关闭 </el-button>
                <el-button plain @click="open2" type="primary"> 不会自动关闭 </el-button>
                <el-button plain @click="open3" type="primary"> 隐藏关闭按钮 </el-button>
                <el-button plain @click="open4" type="primary"> 偏移的消息 </el-button>
                <el-button :plain="true" @click="openHTML" type="warning">使用 HTML 片段</el-button>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>状态按钮</span>
            </div>
            <el-row>
                <el-button plain @click="open5" type="success"> 成功 </el-button>
                <el-button plain @click="open6" type="warning"> 警告 </el-button>
                <el-button plain @click="open7" type="info"> 消息 </el-button>
                <el-button plain @click="open8" type="danger"> 错误 </el-button>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>位置按钮</span>
            </div>
            <el-row>
                <el-button plain @click="open9"  type="primary"> 右上角 </el-button>
                <el-button plain @click="open10" type="primary"> 右下角 </el-button>
                <el-button plain @click="open11" type="primary"> 左下角 </el-button>
                <el-button plain @click="open12" type="primary"> 左上角 </el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        methods: {
            openHTML() {
                this.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong>这是 <i>HTML</i> 片段</strong>'
                });
            },
            open() {
                const h = this.$createElement;
                this.$notify({
                    title: '标题名称',
                    message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
                });
            },

            open2() {
                this.$notify({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 0
                });
            },
            open3() {
                this.$notify.success({
                    title: 'Info',
                    message: '这是一条没有关闭按钮的消息',
                    showClose: false
                });
            },
            open4() {
                this.$notify({
                    title: '偏移',
                    message: '这是一条带有偏移的提示消息',
                    offset: 100
                });
            },
            open5() {
                this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                });
            },

            open6() {
                this.$notify({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                });
            },

            open7() {
                this.$notify.info({
                    title: '消息',
                    message: '这是一条消息的提示消息'
                });
            },

            open8() {
                this.$notify.error({
                    title: '错误',
                    message: '这是一条错误的提示消息'
                });
            },
            open9() {
                this.$notify({
                    title: '自定义位置',
                    message: '右上角弹出的消息'
                });
            },

            open10() {
                this.$notify({
                    title: '自定义位置',
                    message: '右下角弹出的消息',
                    position: 'bottom-right'
                });
            },

            open11() {
                this.$notify({
                    title: '自定义位置',
                    message: '左下角弹出的消息',
                    position: 'bottom-left'
                });
            },

            open12() {
                this.$notify({
                    title: '自定义位置',
                    message: '左上角弹出的消息',
                    position: 'top-left'
                });
            }
        }
    }
</script>

<style scoped>

</style>