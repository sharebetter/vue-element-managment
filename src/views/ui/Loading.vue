<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-goods"></i> ui</el-breadcrumb-item>
                <el-breadcrumb-item>Loading</el-breadcrumb-item>
            </el-breadcrumb>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>基础模态框</span> <el-button type="primary" size="mini" class="marginLeft" @click="refresh('loading')">刷新</el-button>
                </div>
                <el-table v-loading="loading" :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>基础模态框</span> <el-button type="primary" size="mini" class="marginLeft" @click="refresh('loading2')">刷新</el-button>
                </div>
                <template>
                    <el-table v-loading="loading2" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)" :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                    </template>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                loading: true,
                loading2: true
            };
        },
        mounted () {
            this.loading = true;
            this.loading2 = true;
            setTimeout(()=>{
                this.loading = false;
                this.loading2 = false;
            },3000)
        },
        methods:{
            refresh(load){
                this[load] = true;
                setTimeout(()=>{
                    this[load] = false;
                },3000)
            }
        }
    }
</script>

<style scoped>
.marginLeft{
    margin-left: 10px;
}
</style>