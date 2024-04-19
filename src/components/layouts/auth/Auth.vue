<script setup>
import store from '@/stores';
import { ref } from 'vue'

import { notification } from 'ant-design-vue';
import request from '@/utils/request';
// const { , modal, notification } = App.useApp();




const isShow = ref(0)
const emit = defineEmits(); // Import emit từ defineEmits
const closeForm = () => {
    emit('update:closeLogin');
}
const isLoading = ref(false)
//khai báo danh sách biến
const email = ref('')
const password = ref('')
const confirm_password = ref('')
const maGioiThieu = ref('')
const app_name = ref('')



const login = async () => {
    isLoading.value = true
    store
        .dispatch("login", {
            email: email.value,
            password: password.value
        })
        .then(async (data) => {
            console.log("sfsdfdsfddd")
            var temp = data.data
            notification.success({
                message: 'Success!',
                description: 'Đăng nhập thành công!',
                placement: 'topRight',
            });
        })
        .catch((error) => {
            console.log("sfsdfdsf")
            notification.error({
                message: 'Error!',
                description: 'Tài khoản hoặc mật khẩu của bạn không hợp lệ!',
                placement: 'topRight',
            });
        });
}
const register = async () => {
    if (password.value != confirm_password.value) {
        notification.error({
            message: 'Error!',
            description: 'Xác nhận mật khẩu không chính xác',
            placement: 'topRight',
        });
    }
    else {
        request.post('api/auth/register', {
            email: email.value,
            password: password.value,
            maGioiThieu: maGioiThieu.value
        })
            .then((response) => {
                console.log(response);
                notification.success({
                    message: 'Success!',
                    description: 'Login success!',
                    placement: 'topRight',
                });
                setTimeout(()=>{
                    login()
                },1000)
            })
            .catch((error) => {
                notification.error({
                    message: 'Error!',
                    description: 'Đăng ký tài khoản không thành công!',
                    placement: 'topRight',
                });
            });
    }
}
</script>
<template>
    <div class="form-auth">
        <div class="form">
            <div class="close">
                <label class="close-btn" @click="closeForm"><i class='bx bx-x bx-flip-horizontal'></i></label>
            </div>
            <div class="title">
                <h1>1StComic<sup></sup></h1>
            </div>
            <form class="login" v-if="isShow == 0">
                <div class="login-title">
                    <h4>Đăng nhập</h4>
                </div>
                <div class="login-input">
                    <label style="display: block;" for="email"><i class='bx bx-envelope'></i> E-mail(<span
                            style="color: red;">*</span>)</label>
                    <input type="text" class="input" id="email" v-model="email">
                </div>
                <div class="login-input">
                    <label style="display: block;" for="password"><i class='bx bx-dialpad-alt'></i> Mật khẩu(<span
                            style="color: red;">*</span>)</label>
                    <input type="password" class="input" id="password" autocomplete="on" v-model="password">
                </div>
                <div class="login-button">
                    <button type="button" class="btn backgroud" @click="login">Đăng nhập <i
                            class='bx bx-loader bx-spin bx-flip-horizontal' v-if="isLoading"></i></button>

                </div>
                <div class="login-footer flex">
                    <a class="footer-tab" @click="isShow = 2">Quên mật khẩu?</a>
                    <a class="footer-tab faq" @click="isShow = 1">Đăng ký tài khoản</a>
                </div>
            </form>
            <form class="login" v-if="isShow == 1">
                <div class="login-title">
                    <h4>Đăng ký</h4>
                </div>
                <div class="login-input">
                    <label style="display: block;" for="email"><i class='bx bx-envelope'></i> E-mail(<span
                            style="color: red;">*</span>)</label>
                    <input type="text" class="input" id="email" v-model="email">
                </div>
                <div class="login-input">
                    <label style="display: block;" for="password"><i class='bx bx-dialpad-alt'></i> Mật khẩu(<span
                            style="color: red;">*</span>)</label>
                    <input type="password" class="input" id="password" autocomplete="on" v-model="password">
                </div>
                <div class="login-input">
                    <label style="display: block;" for="password"><i class='bx bx-dialpad-alt'></i> Xác minh mật
                        khẩu(<span style="color: red;">*</span>)</label>
                    <input type="password" class="input" id="confirm_password" autocomplete="on"
                        v-model="confirm_password">
                </div>
                <div class="login-input">
                    <label style="display: block;" for="code"><i class='bx bx-barcode'></i> Mã giới thiệu(nếu
                        có)</label>
                    <input type="text" class="input" id="code" v-model="maGioiThieu">
                </div>
                <div class="login-button">
                    <button @click="register" type="button" class="btn backgroud">Đăng ký <i
                            class='bx bx-loader bx-spin bx-flip-horizontal' v-if="isLoading"></i></button>

                </div>
                <div class="login-footer flex">
                    <a class="footer-tab" @click="isShow = 2">Quên mật khẩu?</a>
                    <a class="footer-tab faq" @click="isShow = 0">Đăng nhập tài khoản</a>
                </div>
            </form>
            <form class="login" v-if="isShow == 2">
                <div class="login-title">
                    <h4>Quên mật khẩu</h4>
                    <span>Vui lòng nhập email liên kết với tài khoản của bạn</span>
                </div>
                <div class="login-input">
                    <label style="display: block;" for="email"><i class='bx bx-envelope'></i> E-mail(nếu có)</label>
                    <input type="text" class="input" id="email">
                </div>
                <div class="login-button">
                    <button class="btn backgroud">Gửi mã <i class='bx bx-loader bx-spin bx-flip-horizontal'
                            v-if="isLoading"></i></button>

                </div>
                <div class="login-footer flex">
                    <a class="footer-tab faq" @click="isShow = 0">Đăng nhập tài khoản</a>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>
h3 {
    margin: 0;
}

.close-btn {
    cursor: pointer;
}

.close {
    font-size: 1.5em;
    text-align: end;
    cursor: pointer;
}

.input {
    border: 1px solid rgba(128, 128, 128, 0.329);
    border-radius: 4px;
    padding: 5px 10px;
    width: 100%;
}

.login {
    padding: 20px;
}

.login-button .btn {
    min-width: 130px;
    width: 100%;
    color: rgb(41, 62, 71);
    margin-bottom: 5px;
    transition: all 0.5s;
    border: 1px solid rgba(41, 62, 71, 0.582);
}

.backgroud {
    /* background-color: #0a2833; */
    color: #0a2833;
}

.login-button .btn:hover {
    background-color: rgb(71, 84, 90);
    color: white;
}

.login-input {
    margin-bottom: 10px;
}

.footer-tab {
    margin-right: 15px;
    display: flex;
}

.faq {
    margin-left: auto;
    justify-content: end;
    cursor: pointer;
}

.login-input label {
    margin-bottom: 5px;
}

.login-title {
    text-align: center;
}

.form-auth {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(73, 73, 73, 0.897);
    padding: 10px;
    padding-top: 80px;
}

.form {
    width: 100%;
    max-width: 400px;
    margin: auto;
    background: white;
    padding: 10px;
    padding-top: 10px;
    margin-top: 6%;
    min-height: 300px;
    border-radius: 5px;
}

.form .title {
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding-top: 10px;
}
</style>