<script setup>
import { ref, computed, watch } from "vue";
import { RouterLink, RouterView, useRouter } from 'vue-router'
import FooterView from '@/components/layouts/Footer.vue'
import AuthView from '@/components/layouts/auth/Auth.vue'
import store from "./stores";
import { languagePack } from "@/languages";
import iconAvata from '@/assets/images/icon-256x256.png'


const isLogin = computed(() => store.getters.usersss)
const isShowLogin = ref(false)

const router = useRouter()
window.addEventListener("message", async function (event) {
  var res = event.data
  if (res.active == "auth") {
    isShowLogin.value = true
  }
}, false
)
watch(isLogin, (oldValue, newValue) => {
  if (isLogin.value) {
    isShowLogin.value = false
  }
})
function Logout() {
  store.dispatch('logout')
  router.push('/login')
}

</script>

<template>
  <header class="header">
    <div class="container wrapper flex">
      <nav class="compute">
        <div class="logo flex">
          <RouterLink class="item-link logo-icon" to="/">
            <img width="70" height="70"
              src="https://www.cryptus.in/hackingnews/wp-content/uploads/2023/09/Chrome_Browser_Extensions-1.png"
              alt="">
          </RouterLink>
        </div>
        <RouterLink class="item-link" to="/new">{{ languagePack["NEW"] }}</RouterLink>
        <RouterLink class="item-link" to="/genres">{{ languagePack["GENRES"] }}
        </RouterLink>
        <RouterLink class="item-link" to="/popular">{{ languagePack["POPULAR"] }}
        </RouterLink>
      </nav>
      <div class="mobile">
        <div class="menu">
          <i class='bx bx-menu'></i>
          <div class="logo flex">
            <RouterLink class="item-link logo-icon" to="/">
              <img width="70" height="70"
                src="https://www.cryptus.in/hackingnews/wp-content/uploads/2023/09/Chrome_Browser_Extensions-1.png"
                alt="">
            </RouterLink>
          </div>
          <div class="menu-ui">
            <RouterLink class="item-link" to="/new">{{ languagePack["NEW"] }}</RouterLink>
            <RouterLink class="item-link" to="/genres">{{ languagePack["GENRES"] }}
            </RouterLink>
            <RouterLink class="item-link" to="/popular">{{ languagePack["POPULAR"] }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="bottom">
    <RouterView />
    <FooterView />
    <!-- //show login -->
    <AuthView v-if="isShowLogin" @update:closeLogin="isShowLogin = false" />
  </div>
</template>

<style scoped>
.logo {
  height: 90px;
  align-items: center;
  justify-content: center;
}

.logo img {
  object-fit: cover;
}

.bottom {
  padding-top: 100px;
  background: #65899618;
  min-height: 100vh;
}

.user-info {
  position: relative;
}

.sub-profile {
  display: none;
  position: absolute;
  top: 100%;
  left: -100%;
  width: 200px;
  padding: 5px;
  border-radius: 5px;
}

.profile-item {
  padding: 5px 10px;
  cursor: pointer;
  text-align: start;
}

.profile-item:hover {
  border-radius: 5px;
}

.user-info:hover .sub-profile {
  display: block;
}

.title-web {
  text-align: center;
}

.slogan {
  font-size: 13px;
}

.title-website {
  text-align: center;
  padding-top: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 0 !important;
}

.login {
  border: 1px solid #0a2833;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 20px;
}

header {
  width: 100%;
  background: white;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  box-shadow: 2px 2px 5px 2px rgba(192, 192, 192, 0.158);
}

.wrapper {
  height: 90px;
  margin: auto;
}

nav {
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 15px;
  min-width: 100px;
  border-radius: 5px;
  margin-right: 5px;
  color: #0a2833;
  font-weight: 500;
  transition: all 0.5s;
  font-size: 1.1em;
  text-transform: uppercase;
}

.profile-item a {
  padding: 0;
  justify-content: flex-start;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: auto;
  padding-right: 20px;
}

.center {
  align-items: center;
  justify-content: center;
}

.right {
  margin-right: 7px;
}

.user {
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  color: #0a2833;
}

.item-link:hover {
  color: rgb(23, 23, 51);
}

.mobile {
  display: none;
  position: relative;
}

.menu-ui {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background: white;
  z-index: 99;
  display: none;
  padding-bottom: 15px;
  font-size: 13px;
}
.menu:hover .menu-ui {
  display: block;
}

.menu {
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  display: flex;
  color: #0a2833;
}
.menu i {
  font-size: 2.3em;
}


.menu-ui .item-link {
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 0;
  border-radius: 0;
  padding: 8px 15px;
}
.logo-icon img{
  border-radius: 50%;
}

@media only screen and (max-width: 1000px) {
  .compute {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
