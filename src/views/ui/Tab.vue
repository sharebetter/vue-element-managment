<template>
   <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-goods"></i> ui</el-breadcrumb-item>
            <el-breadcrumb-item>Tab标签页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>基础Tab</span>
            </div>
            <el-row>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>自定义标签Tab</span>
            </div>
            <el-row>
               <el-tabs type="border-card">
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
                        我的行程
                    </el-tab-pane>
                    <el-tab-pane label="消息中心">消息中心</el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                </el-tabs>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>自定义添加标签Tab</span>
            </div>
            <el-row>
                <div style="margin-bottom: 20px;">
                    <el-button size="small" @click="addTab(editableTabsValue2)" >
                        add tab
                    </el-button>
                </div>
                <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name" >
                        {{item.content}}
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </el-card>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                //基础tab
                activeName: 'second',
                //自定义添加tab
                editableTabsValue2: '2',
                editableTabs2: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }],
                tabIndex: 2
            };
        },
        methods: {
            //基础用法
            handleClick(tab, event) {
                console.log(tab, event);
            },

            //自定义添加tab
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue2 = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
                }

                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            }
        }
    }
</script>

<style scoped>

</style>