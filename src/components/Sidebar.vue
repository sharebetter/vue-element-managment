<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <router-link :to="subItem.index">
                                    <template slot="title">{{ subItem.title }}</template>
                                    <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                        {{ threeItem.title }}
                                    </el-menu-item>
                                </router-link>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from './bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-location',
                        index: '/',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-goods',
                        index: '/ui',
                        title: 'UI控件',
                        subs: [
                            {
                                index: '/ui/button',
                                title: '按钮'
                            },
                            {
                                index: '/ui/alert',
                                title: '弹窗'
                            },
                            {
                                index: '/ui/loading',
                                title: 'Loading'
                            },
                            {
                                index: '/ui/notification',
                                title: 'notification消息提醒'
                            },
                            {
                                index: '/ui/message',
                                title: '全局Message'
                            },
                            {
                                index: '/ui/tab',
                                title: 'tab标签页'
                            },
                            {
                                index: '/ui/imageCard',
                                title: '图片画廊'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'form',
                        title: '基础表单',
                        subs:[
                            {
                                index: '/form/login',
                                title: '登录表单'
                            },
                            {
                                index: '/form/regist',
                                title: '注册表单'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'table',
                        title: '基础表格'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: '3',
                        title: '表单相关',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: '3-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-info',
                        index: 'icon',
                        title: '自定义图标'
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'charts',
                        title: 'schart图表'
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'drag',
                        title: '拖拽列表'
                    },
                    {
                        icon: 'el-icon-error',
                        index: '6',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: '404',
                                title: '404页面'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
