<template>
    <div class="home">
        <el-container>
<!--            头部-->
            <el-header >

                Header
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <el-row>
                        <el-button>默认按钮</el-button>
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="success">成功按钮</el-button>
                        <el-button type="info">信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button>
                    </el-row>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    // 引入css
    import "@/assets/css/LoginView.css"

    export default {
        components: {

        }
    }
</script>
