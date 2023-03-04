<template>
    <div class="home">
        <!--        上面整体-->
        <el-container class="home_container">
            <!--                左边部分-->
            <el-aside class="home_container_left" width="">
                <img class="left_img" src="../assets/img/Login.png" alt="加载失败">
            </el-aside>
            <!--                内容-->
            <el-main class="home_container_right">
                <!--                上面图标-->
                <div class="right_img" width="">
                    <img class="right_img_tubiao" width="" src="../assets/img/tubiao.png" alt="加载失败">
                </div>
                <!--                下面登录小页面-->
                <div class="right_form">
                    <form class="form" action="">
                        <!--                    登录方式-->
                        <div class="form_login_mode">
                            <!--                        短信登录-->
                            <div class="login_message" onclick="">
<!--                                <a href="">短信登录</a>-->
                            </div>
                            <!--                        账号登录-->
                            <div class="login_number">
<!--                                <a href="">账号登录</a>-->
                            </div>
                            <!--                        扫码登录-->
                            <div class="login_barcode">
<!--                                <a href="">扫码登录</a>-->
                            </div>
                        </div>
                        <!--                    表单-->
                        <div class="form_login">

                        </div>
                        <!--                    用户协议-->
                        <div class="form_agreement">

                        </div>
                    </form>
                </div>

            </el-main>
        </el-container>
        <!--        底部-->
        <el-footer class="home_footer" height="">
            <div class="footer_a">
                <a href="AboutView.vue">用户协议</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="AboutView.vue">隐私特权</a>
            </div>
            <div class="footer_span">
                <span>粤ICP备09210879号-50</span>
                <span>|</span>
                <span>济南市潮种计算机科技有限公司</span>
                <span>|</span>
                <span>联系方式:0393-3936-1234</span>
            </div>
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
