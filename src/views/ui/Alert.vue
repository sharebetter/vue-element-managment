<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-goods"></i> ui</el-breadcrumb-item>
                <el-breadcrumb-item>弹窗</el-breadcrumb-item>
            </el-breadcrumb>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>基础模态框</span>
                </div>
                <el-row>
                    <el-button type="primary" @click="open">open Message Box</el-button>
                    <el-button type="primary" @click="open2">confirm框</el-button>
                    <el-button type="primary" @click="open3">提交内容</el-button>
                    <el-button type="primary" @click="open4">自定义内容</el-button>
                </el-row>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>信息确认框</span>
                </div>
                <el-row>
                    <el-button type="success" @click="open5('success')">success</el-button>
                    <el-button type="info" @click="open5('info')">info</el-button>
                    <el-button type="warning" @click="open5('warning')">warnning</el-button>
                    <el-button type="danger" @click="open5('error')">error</el-button>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            open() {
                this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                    });
                }
                });
            },
            open2() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            open3() {
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            open4() {
                const h = this.$createElement;
                this.$msgbox({
                title: '消息',
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, 'VNode')
                ]),
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = '执行中...';
                        setTimeout(() => {
                            done();
                            setTimeout(() => {
                            instance.confirmButtonLoading = false;
                            }, 300);
                        }, 3000);
                    } else {
                        done();
                    }
                }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            },
            open5(type) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type,
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'warning',
                        message: '已取消删除'
                    });
                });
            },
        }
    }
</script>

<style>
  .box-card {
    width: 100%;
    margin-top: 20px;
  }
</style>