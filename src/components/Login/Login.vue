<template>
    <div class="right_form">
        <form class="form" action="">
            <Tabs value="1">
                <Tab-pane label="短信登录" name="1">
                    短信登录
                </Tab-pane>
                <Tab-pane label="账号登录" name="2">
                    账号登录
                </Tab-pane>
                <Tab-pane label="扫码登录" name="3">
                    扫码登录
                </Tab-pane>
            </Tabs>
        </form>

<!--        <form class="form" action="">-->
<!--            &lt;!&ndash;                    登录方式&ndash;&gt;-->
<!--            <div class="form_login_mode">-->
<!--                &lt;!&ndash;                        短信登录&ndash;&gt;-->
<!--                <div class="login_message" onclick="">-->
<!--                    <a href="">短信登录</a>-->
<!--                </div>-->
<!--                &lt;!&ndash;                        账号登录&ndash;&gt;-->
<!--                <div class="login_number">-->
<!--                    <a href="">账号登录</a>-->
<!--                </div>-->
<!--                &lt;!&ndash;                        扫码登录&ndash;&gt;-->
<!--                <div class="login_barcode">-->
<!--                    <a href="">扫码登录</a>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash;                    表单&ndash;&gt;-->
<!--            <div class="form_login">-->

<!--            </div>-->
<!--            &lt;!&ndash;                    用户协议&ndash;&gt;-->
<!--            <div class="form_agreement">-->

<!--            </div>-->
<!--        </form>-->
    </div>
</template>

<script>
    // 引入css
    import "@/components/Login/Login.css"

    export default {
        components: {}
    }
</script>