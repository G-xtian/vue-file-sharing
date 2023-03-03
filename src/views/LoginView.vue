<template>
    <div class="home">
        <!--        上面整体-->
        <el-container class="home_container">
            <!--                左边部分-->
            <el-aside class="home_container_left" width="60%">
                <img class="left_img" src="../assets/img/Login.png" alt="加载失败">
            </el-aside>
            <!--                内容-->
            <el-main class="home_container_right">

            </el-main>
        </el-container>
        <!--        底部-->
        <el-footer class="home_footer">
            <span></span>
            <span></span>
        </el-footer>
    </div>
</template>

<script>
    // 引入css
    import "@/assets/css/LoginView.css"

    export default {
        components: {}
    }
</script>
